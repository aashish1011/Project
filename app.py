"""Build & Win football auction application.

The browser game is intentionally client-side for the current prototype. This
Flask entry point serves the structured frontend and provides a health route so
the app can be run consistently in development or deployment.
"""

from __future__ import annotations

import os
import time
import hmac
import secrets
from functools import wraps
from pathlib import Path

from dotenv import load_dotenv
from flask import Flask, jsonify, render_template, request, redirect, url_for, session, abort
from werkzeug.security import check_password_hash


BASE_DIR = Path(__file__).resolve().parent
load_dotenv(BASE_DIR / ".env")

SECRET_KEY = os.environ.get("SECRET_KEY")
if not SECRET_KEY:
    raise RuntimeError("SECRET_KEY is required. Copy .env.example to .env and configure it.")

ADMIN_USERNAME = os.environ.get("ADMIN_USERNAME", "admin")
ADMIN_PASSWORD_HASH = os.environ.get("ADMIN_PASSWORD_HASH", "")
COOKIE_SECURE = os.environ.get("COOKIE_SECURE", "0") == "1"

app = Flask(
    __name__,
    template_folder=str(BASE_DIR / "templates"),
    static_folder=str(BASE_DIR / "static"),
)
app.config.update(
    SECRET_KEY=SECRET_KEY,
    SESSION_COOKIE_HTTPONLY=True,
    SESSION_COOKIE_SECURE=COOKIE_SECURE,
    SESSION_COOKIE_SAMESITE="Lax",
    MAX_CONTENT_LENGTH=16 * 1024,
)

# This is intentionally small and process-local. It protects the prototype
# login from repeated guesses; production deployments should use a shared
# rate limiter at the reverse proxy or platform edge.
LOGIN_WINDOW_SECONDS = 15 * 60
LOGIN_MAX_ATTEMPTS = 5
login_attempts: dict[str, list[float]] = {}


def admin_required(view):
    """Require a server-side authenticated admin session."""

    @wraps(view)
    def wrapped(*args, **kwargs):
        if not session.get("admin_authenticated"):
            return redirect(url_for("admin_login", next=request.path))
        return view(*args, **kwargs)

    return wrapped


def is_login_rate_limited(ip_address: str) -> bool:
    now = time.time()
    recent = [stamp for stamp in login_attempts.get(ip_address, []) if now - stamp < LOGIN_WINDOW_SECONDS]
    login_attempts[ip_address] = recent
    return len(recent) >= LOGIN_MAX_ATTEMPTS


def record_login_attempt(ip_address: str) -> None:
    login_attempts.setdefault(ip_address, []).append(time.time())


@app.after_request
def add_security_headers(response):
    response.headers.setdefault("X-Content-Type-Options", "nosniff")
    response.headers.setdefault("X-Frame-Options", "DENY")
    response.headers.setdefault("Referrer-Policy", "strict-origin-when-cross-origin")
    response.headers.setdefault("Permissions-Policy", "camera=(), microphone=(), geolocation=()")
    return response


@app.get("/")
def home():
    """Render the football auction application."""

    return render_template("index.html")


@app.get("/health")
def health():
    """Lightweight service check for local hosting and deployment probes."""

    return jsonify({"status": "ok", "service": "build-and-win"})


@app.route("/admin", methods=["GET", "POST"])
def admin_login():
    """Display the admin login and authenticate without exposing credentials."""

    if session.get("admin_authenticated"):
        return redirect(url_for("admin_dashboard"))

    error = None
    ip_address = request.remote_addr or "unknown"
    if request.method == "POST":
        if is_login_rate_limited(ip_address):
            error = "Too many attempts. Please wait 15 minutes and try again."
        else:
            record_login_attempt(ip_address)
            csrf_token = session.get("admin_csrf_token", "")
            supplied_csrf = request.form.get("csrf_token", "")
            username = request.form.get("username", "")
            password = request.form.get("password", "")
            valid = (
                bool(ADMIN_PASSWORD_HASH)
                and hmac.compare_digest(supplied_csrf, csrf_token)
                and hmac.compare_digest(username, ADMIN_USERNAME)
                and check_password_hash(ADMIN_PASSWORD_HASH, password)
            )
            if valid:
                session.clear()
                session["admin_authenticated"] = True
                session["admin_username"] = ADMIN_USERNAME
                session["admin_csrf_token"] = secrets.token_urlsafe(32)
                login_attempts.pop(ip_address, None)
                next_url = request.args.get("next", "")
                return redirect(next_url if next_url.startswith("/") and not next_url.startswith("//") else url_for("admin_dashboard"))
            error = "Invalid admin credentials."

    session.setdefault("admin_csrf_token", secrets.token_urlsafe(32))
    return render_template("admin_login.html", error=error, csrf_token=session["admin_csrf_token"])


@app.get("/admin/dashboard")
@admin_required
def admin_dashboard():
    return render_template("admin.html", username=session.get("admin_username", ADMIN_USERNAME))


@app.post("/admin/logout")
@admin_required
def admin_logout():
    session.clear()
    return redirect(url_for("admin_login"))


if __name__ == "__main__":
    app.run(
        host=os.environ.get("FLASK_HOST", "127.0.0.1"),
        port=int(os.environ.get("FLASK_PORT", "5000")),
        debug=os.environ.get("FLASK_DEBUG", "0") == "1",
    )
