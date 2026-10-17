FC 25 Multiplayer Transfer Auction & Knockout Predictor (Top 80 Players)
========================================================================
How to Run:
1. Install dependencies: `python3 -m pip install -r requirements.txt`
2. Start the backend: `python3 app.py`
3. Open `http://127.0.0.1:5000` in a modern browser.

Admin:
- Open `http://127.0.0.1:5000/admin`.
- Credentials are stored in the local, ignored `.env` file. Never commit `.env`.
- For deployment, set a new `SECRET_KEY` and admin password hash through the hosting platform.

Project structure:
- `app.py` — Flask server and health endpoint.
- `templates/index.html` — page markup.
- `static/css/styles.css` — application styles.
- `static/js/app.js` — auction, squads, ratings, room sync, and UI logic.

The standalone Lineup Builder is available from the top navigation. It supports
two-person alternating picks, duplicate prevention, current and legacy FIFA-style
players, formation presets, editable slots, position filtering, and player search.

Security notes:
- The admin panel uses a server-side Flask session, a hashed password, CSRF token,
  secure cookie flags, login throttling, and basic security headers.
- The current multiplayer game is a browser prototype: room state is stored in
  localStorage and synchronized with BroadcastChannel, so it is not suitable for
  trusted server-side game rules until a real room store is added.

Key Updates:
- Top 80 Official EA Sports FC 25 Players (ratings 91 down to 85).
- Randomized Auction Order (Fisher-Yates shuffle) so high-rated and lower-rated players appear in mixed, unpredictable order right down to Lot #80, plus a Transfer Desk Scouting Report on every card.
- Real Player Photographs loaded via Wikimedia Commons REST API + EA FC image CDN with background pre-fetching so real photos appear without lag.
- Multiplayer Room Lobby for 4 Teams (Semi-Finals + Final) or 6 Teams (Round 1 + Semi-Final + Final).
