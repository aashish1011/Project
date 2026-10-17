    // ============================================================================
    // 100-player auction pool
    // Includes EA FC player identifiers used by the consistent portrait pipeline
    // ============================================================================
    const PLAYERS_DB = [
      { id: 1, sofifaId: 231747, wiki: "Kylian_Mbappé", name: "Kylian Mbappe", pos: "ST", group: "FWD", ovr: 91, club: "Real Madrid", nat: "FRA", base: 20, pac: 96, sho: 91, pas: 80, dri: 92, def: 29, phy: 76, news: "EA SPORTS FC 27 rating: 91 OVR, 96 Pace, 91 Shooting, and 92 Dribbling." },
      { id: 2, sofifaId: 231866, wiki: "Rodri_(footballer,_born_1996)", name: "Rodri", pos: "CDM", group: "MID", ovr: 91, club: "Manchester City", nat: "ESP", base: 19, pac: 66, sho: 80, pas: 86, dri: 84, def: 87, phy: 85, news: "Ballon d'Or midfield anchor; dictates tempo with 86 Passing and 87 Defense." },
      { id: 3, sofifaId: 239085, wiki: "Erling_Haaland", name: "Erling Haaland", pos: "ST", group: "FWD", ovr: 91, club: "Manchester City", nat: "NOR", base: 20, pac: 87, sho: 92, pas: 71, dri: 80, def: 47, phy: 89, news: "EA SPORTS FC 27 rating: 91 OVR, 92 Shooting, and 89 Physicality." },
      { id: 4, sofifaId: 252371, wiki: "Jude_Bellingham", name: "Jude Bellingham", pos: "CAM", group: "MID", ovr: 90, club: "Real Madrid", nat: "ENG", base: 18, pac: 79, sho: 86, pas: 83, dri: 88, def: 79, phy: 85, news: "EA SPORTS FC 27 rating: 90 OVR with 88 Dribbling and 85 Physicality." },
      { id: 5, sofifaId: 238794, wiki: "Vinícius_Júnior", name: "Vini Jr.", pos: "LW", group: "FWD", ovr: 89, club: "Real Madrid", nat: "BRA", base: 18, pac: 93, sho: 85, pas: 80, dri: 91, def: 31, phy: 71, news: "EA SPORTS FC 27 rating: 89 OVR, 93 Pace, and 91 Dribbling." },
      { id: 6, sofifaId: 192985, wiki: "Kevin_De_Bruyne", name: "Kevin De Bruyne", pos: "CM", group: "MID", ovr: 90, club: "Manchester City", nat: "BEL", base: 17, pac: 67, sho: 87, pas: 94, dri: 87, def: 65, phy: 78, news: "Highest Passing rating in EA FC 25 (94 PAS); elite set-piece and through-ball specialist." },
      { id: 7, sofifaId: 202126, wiki: "Harry_Kane", name: "Harry Kane", pos: "ST", group: "FWD", ovr: 90, club: "Bayern Munchen", nat: "ENG", base: 17, pac: 62, sho: 94, pas: 83, dri: 82, def: 49, phy: 83, news: "EA SPORTS FC 27 rating: 90 OVR and the database's top 94 Shooting rating." },
      { id: 8, sofifaId: 222665, wiki: "Martin_Ødegaard", name: "Martin Odegaard", pos: "CM", group: "MID", ovr: 89, club: "Arsenal", nat: "NOR", base: 15, pac: 70, sho: 82, pas: 89, dri: 89, def: 67, phy: 66, news: "Arsenal captain and chief chance creator with 89 Passing and 89 Dribbling." },
      { id: 9, sofifaId: 230621, wiki: "Gianluigi_Donnarumma", name: "G. Donnarumma", pos: "GK", group: "GK", ovr: 89, club: "Paris SG", nat: "ITA", base: 14, pac: 90, sho: 84, pas: 73, dri: 90, def: 52, phy: 87, news: "Towering shot-stopper with 90 Diving and 90 Reflexes in EA FC 25." },
      { id: 10, sofifaId: 212831, wiki: "Alisson_Becker", name: "Alisson", pos: "GK", group: "GK", ovr: 89, club: "Liverpool", nat: "BRA", base: 14, pac: 86, sho: 85, pas: 85, dri: 89, def: 56, phy: 90, news: "Premier League 1v1 sweeper-keeper with 90 Positioning and 89 Reflexes." },
      { id: 11, sofifaId: 192119, wiki: "Thibaut_Courtois", name: "Thibaut Courtois", pos: "GK", group: "GK", ovr: 89, club: "Real Madrid", nat: "BEL", base: 14, pac: 85, sho: 89, pas: 76, dri: 90, def: 46, phy: 88, news: "Champions League final specialist with 89 Handling and 90 Reflexes." },
      { id: 12, sofifaId: 231478, wiki: "Lautaro_Martínez", name: "Lautaro Martinez", pos: "ST", group: "FWD", ovr: 89, club: "Inter Milan", nat: "ARG", base: 16, pac: 82, sho: 88, pas: 75, dri: 87, def: 54, phy: 85, news: "Serie A Capocannoniere and Copa America winner; lethal penalty-box finisher." },
      { id: 13, sofifaId: 203376, wiki: "Virgil_van_Dijk", name: "Virgil van Dijk", pos: "CB", group: "DEF", ovr: 89, club: "Liverpool", nat: "NED", base: 16, pac: 78, sho: 60, pas: 71, dri: 71, def: 89, phy: 86, news: "Commanding aerial center-back with 89 Defending and 86 Physical." },
      { id: 14, sofifaId: 192448, wiki: "Marc-André_ter_Stegen", name: "M. ter Stegen", pos: "GK", group: "GK", ovr: 89, club: "FC Barcelona", nat: "GER", base: 13, pac: 86, sho: 85, pas: 89, dri: 91, def: 47, phy: 86, news: "Ball-playing goalkeeper with 91 Reflexes and 89 Kicking distribution." },
      { id: 15, sofifaId: 209331, wiki: "Mohamed_Salah", name: "Mohamed Salah", pos: "RW", group: "FWD", ovr: 89, club: "Liverpool", nat: "EGY", base: 16, pac: 89, sho: 87, pas: 82, dri: 88, def: 45, phy: 75, news: "Inside forward with trademark finesse curler, 89 Pace, and 87 Shooting." },
      { id: 16, sofifaId: 237692, wiki: "Phil_Foden", name: "Phil Foden", pos: "RW", group: "FWD", ovr: 88, club: "Manchester City", nat: "ENG", base: 14, pac: 86, sho: 86, pas: 85, dri: 90, def: 56, phy: 63, news: "Premier League Player of the Season; 90 Dribbling in tight half-spaces." },
      { id: 17, sofifaId: 158023, wiki: "Lionel_Messi", name: "Lionel Messi", pos: "CAM", group: "MID", ovr: 89, club: "Inter Miami CF", nat: "ARG", base: 15, pac: 76, sho: 87, pas: 89, dri: 90, def: 33, phy: 63, news: "EA SPORTS FC 27 rating: 89 OVR, 89 Passing, and 90 Dribbling." },
      { id: 18, sofifaId: 194765, wiki: "Antoine_Griezmann", name: "Antoine Griezmann", pos: "ST", group: "FWD", ovr: 88, club: "Atletico Madrid", nat: "FRA", base: 13, pac: 80, sho: 88, pas: 87, dri: 89, def: 58, phy: 75, news: "Atletico all-time top scorer; links midfield and attack seamlessly." },
      { id: 19, sofifaId: 239818, wiki: "Rúben_Dias", name: "Ruben Dias", pos: "CB", group: "DEF", ovr: 88, club: "Manchester City", nat: "POR", base: 14, pac: 67, sho: 39, pas: 70, dri: 69, def: 89, phy: 87, news: "Backline organizer with 89 Defending and shot-blocking tenacity." },
      { id: 20, sofifaId: 188545, wiki: "Robert_Lewandowski", name: "R. Lewandowski", pos: "ST", group: "FWD", ovr: 88, club: "FC Barcelona", nat: "POL", base: 14, pac: 75, sho: 88, pas: 79, dri: 86, def: 44, phy: 84, news: "La Liga veteran target man with 88 Shooting and 84 Physical hold-up play." },
      { id: 21, sofifaId: 239053, wiki: "Federico_Valverde", name: "Federico Valverde", pos: "CM", group: "MID", ovr: 88, club: "Real Madrid", nat: "URU", base: 15, pac: 88, sho: 84, pas: 84, dri: 84, def: 83, phy: 85, news: "Complete Gullit-Gang midfielder with 80+ in all six EA FC face stats." },
      { id: 22, sofifaId: 210257, wiki: "Ederson_(footballer,_born_1993)", name: "Ederson", pos: "GK", group: "GK", ovr: 88, club: "Manchester City", nat: "BRA", base: 12, pac: 86, sho: 82, pas: 91, dri: 86, def: 64, phy: 86, news: "World-record 91 Kicking distribution for launching instant counter-attacks." },
      { id: 23, sofifaId: 218667, wiki: "Bernardo_Silva", name: "Bernardo Silva", pos: "CM", group: "MID", ovr: 88, club: "Manchester City", nat: "POR", base: 13, pac: 75, sho: 78, pas: 86, dri: 92, def: 71, phy: 69, news: "Press-resistant technician with 92 Dribbling and tireless work rate." },
      { id: 24, sofifaId: 200389, wiki: "Jan_Oblak", name: "Jan Oblak", pos: "GK", group: "GK", ovr: 88, club: "Atletico Madrid", nat: "SVN", base: 12, pac: 85, sho: 90, pas: 78, dri: 87, def: 46, phy: 86, news: "Five-time Zamora Trophy winner with 90 Handling and secure positioning." },
      { id: 25, sofifaId: 205452, wiki: "Antonio_Rüdiger", name: "Antonio Rudiger", pos: "CB", group: "DEF", ovr: 88, club: "Real Madrid", nat: "GER", base: 14, pac: 82, sho: 55, pas: 73, dri: 70, def: 86, phy: 86, news: "Recovery-speed stopper with 82 Pace and 86 Physicality to lock down strikers." },
      { id: 26, sofifaId: 235073, wiki: "Gregor_Kobel", name: "Gregor Kobel", pos: "GK", group: "GK", ovr: 88, club: "Dortmund", nat: "SUI", base: 11, pac: 86, sho: 86, pas: 74, dri: 89, def: 44, phy: 88, news: "Bundesliga standout keeper after leading Dortmund to the Champions League final." },
      { id: 27, sofifaId: 256630, wiki: "Florian_Wirtz", name: "Florian Wirtz", pos: "CAM", group: "MID", ovr: 88, club: "Leverkusen", nat: "GER", base: 14, pac: 81, sho: 82, pas: 87, dri: 90, def: 52, phy: 67, news: "Bundesliga Player of the Season for unbeaten Leverkusen; 90 Dribbling." },
      { id: 28, sofifaId: 243715, wiki: "William_Saliba", name: "William Saliba", pos: "CB", group: "DEF", ovr: 87, club: "Arsenal", nat: "FRA", base: 13, pac: 82, sho: 39, pas: 70, dri: 74, def: 87, phy: 83, news: "Composed ball-playing center-back with 82 Pace and 87 Defending." },
      { id: 29, sofifaId: 246669, wiki: "Bukayo_Saka", name: "Bukayo Saka", pos: "RW", group: "FWD", ovr: 87, club: "Arsenal", nat: "ENG", base: 13, pac: 85, sho: 83, pas: 82, dri: 88, def: 60, phy: 73, news: "Arsenal Starboy right winger; consistent goal and assist output." },
      { id: 30, sofifaId: 234378, wiki: "Declan_Rice", name: "Declan Rice", pos: "CDM", group: "MID", ovr: 87, club: "Arsenal", nat: "ENG", base: 13, pac: 73, sho: 75, pas: 82, dri: 80, def: 84, phy: 85, news: "Dominant ball-winner and ball-carrier with 84 Defending and 85 Physical." },
      { id: 31, sofifaId: 256790, wiki: "Jamal_Musiala", name: "Jamal Musiala", pos: "CAM", group: "MID", ovr: 87, club: "Bayern Munchen", nat: "GER", base: 13, pac: 85, sho: 82, pas: 80, dri: 91, def: 63, phy: 66, news: " Close-control slalom dribbler with 91 Dribbling and 5-star skill moves." },
      { id: 32, sofifaId: 232656, wiki: "Theo_Hernández", name: "Theo Hernandez", pos: "LB", group: "DEF", ovr: 87, club: "AC Milan", nat: "FRA", base: 13, pac: 95, sho: 76, pas: 78, dri: 84, def: 81, phy: 89, news: "Fastest full-back in the auction pool with 95 Pace and 89 Physical." },
      { id: 33, sofifaId: 237383, wiki: "Alessandro_Bastoni", name: "Alessandro Bastoni", pos: "CB", group: "DEF", ovr: 87, club: "Inter Milan", nat: "ITA", base: 12, pac: 75, sho: 46, pas: 75, dri: 76, def: 87, phy: 82, news: "Left-footed progressive center-back; key to Inter's Serie A title." },
      { id: 34, sofifaId: 224232, wiki: "Nicolò_Barella", name: "Nicolo Barella", pos: "CM", group: "MID", ovr: 87, club: "Inter Milan", nat: "ITA", base: 12, pac: 80, sho: 78, pas: 84, dri: 86, def: 81, phy: 76, news: "All-action Italian engine with 86 Dribbling, 84 Passing, and 81 Defending." },
      { id: 35, sofifaId: 207865, wiki: "Marquinhos", name: "Marquinhos", pos: "CB", group: "DEF", ovr: 87, club: "Paris SG", nat: "BRA", base: 12, pac: 79, sho: 56, pas: 75, dri: 74, def: 89, phy: 81, news: "PSG captain with 89 Defending and elite interception awareness." },
      { id: 36, sofifaId: 212198, wiki: "Bruno_Fernandes", name: "Bruno Fernandes", pos: "CAM", group: "MID", ovr: 87, club: "Manchester Utd", nat: "POR", base: 12, pac: 70, sho: 85, pas: 88, dri: 83, def: 69, phy: 75, news: "Long-range shooting and chance-creation machine with 88 Passing." },
      { id: 37, sofifaId: 200104, wiki: "Son_Heung-min", name: "Son Heung-min", pos: "LW", group: "FWD", ovr: 87, club: "Tottenham", nat: "KOR", base: 13, pac: 87, sho: 89, pas: 82, dri: 84, def: 42, phy: 69, news: "Two-footed lethal finisher with 89 Shooting and 87 Pace." },
      { id: 38, sofifaId: 232293, wiki: "Victor_Osimhen", name: "Victor Osimhen", pos: "ST", group: "FWD", ovr: 87, club: "Galatasaray", nat: "NGA", base: 12, pac: 89, sho: 85, pas: 66, dri: 81, def: 42, phy: 82, news: "Explosive aerial striker with 89 Pace and 85 Shooting." },
      { id: 39, sofifaId: 228702, wiki: "Frenkie_de_Jong", name: "Frenkie de Jong", pos: "CM", group: "MID", ovr: 87, club: "FC Barcelona", nat: "NED", base: 11, pac: 82, sho: 69, pas: 86, dri: 87, def: 77, phy: 78, news: "Deep-lying ball carrier who breaks opposition pressing lines effortlessly." },
      { id: 40, sofifaId: 186942, wiki: "İlkay_Gündoğan", name: "Ilkay Gundogan", pos: "CM", group: "MID", ovr: 87, club: "Manchester City", nat: "GER", base: 11, pac: 62, sho: 81, pas: 85, dri: 86, def: 73, phy: 72, news: "Clutch big-game midfielder with 86 Dribbling and 85 Passing." },
      { id: 41, sofifaId: 202811, wiki: "Emiliano_Martínez", name: "Emiliano Martinez", pos: "GK", group: "GK", ovr: 87, club: "Aston Villa", nat: "ARG", base: 10, pac: 85, sho: 83, pas: 82, dri: 88, def: 58, phy: 86, news: "Yashin Trophy and World Cup winner; penalty shootout specialist." },
      { id: 42, sofifaId: 215698, wiki: "Mike_Maignan", name: "Mike Maignan", pos: "GK", group: "GK", ovr: 87, club: "AC Milan", nat: "FRA", base: 10, pac: 84, sho: 82, pas: 87, dri: 89, def: 55, phy: 85, news: "France No. 1 with 89 Reflexes and 87 Kicking." },
      { id: 43, sofifaId: 211110, wiki: "Paulo_Dybala", name: "Paulo Dybala", pos: "CAM", group: "MID", ovr: 87, club: "AS Roma", nat: "ARG", base: 11, pac: 80, sho: 85, pas: 86, dri: 90, def: 40, phy: 60, news: "Creative trequartista with 90 Dribbling and dead-ball precision." },
      { id: 44, sofifaId: 190871, wiki: "Neymar", name: "Neymar Jr", pos: "LW", group: "FWD", ovr: 87, club: "Santos", nat: "BRA", base: 12, pac: 85, sho: 79, pas: 84, dri: 92, def: 37, phy: 60, news: "Neymar Jr remains in the pool as a featured skill-player card with 92 Dribbling." },
      { id: 45, sofifaId: 177683, wiki: "Yann_Sommer", name: "Yann Sommer", pos: "GK", group: "GK", ovr: 87, club: "Inter Milan", nat: "SUI", base: 10, pac: 84, sho: 86, pas: 82, dri: 89, def: 50, phy: 86, news: "Led Europe in clean sheets during Inter's Scudetto campaign." },
      { id: 46, sofifaId: 212622, wiki: "Joshua_Kimmich", name: "Joshua Kimmich", pos: "RB", group: "DEF", ovr: 86, club: "Bayern Munchen", nat: "GER", base: 11, pac: 70, sho: 74, pas: 88, dri: 84, def: 81, phy: 78, news: "Inverted full-back and midfield quarterback with 88 Passing." },
      { id: 47, sofifaId: 231281, wiki: "Trent_Alexander-Arnold", name: "T. Alexander-Arnold", pos: "RB", group: "DEF", ovr: 86, club: "Liverpool", nat: "ENG", base: 11, pac: 76, sho: 73, pas: 90, dri: 80, def: 79, phy: 74, news: "90 Passing rating from right-back; elite crossing and long diagonals." },
      { id: 48, sofifaId: 235212, wiki: "Achraf_Hakimi", name: "Achraf Hakimi", pos: "RB", group: "DEF", ovr: 86, club: "Paris SG", nat: "MAR", base: 11, pac: 92, sho: 75, pas: 80, dri: 82, def: 75, phy: 78, news: "92 Pace overlapping right wing-back who dominates the flank." },
      { id: 49, sofifaId: 210514, wiki: "João_Cancelo", name: "Joao Cancelo", pos: "LB", group: "DEF", ovr: 86, club: "Al-Hilal", nat: "POR", base: 10, pac: 82, sho: 73, pas: 85, dri: 85, def: 77, phy: 71, news: "Two-sided attacking full-back with 85 Passing and 85 Dribbling." },
      { id: 50, sofifaId: 204963, wiki: "Dani_Carvajal", name: "Dani Carvajal", pos: "RB", group: "DEF", ovr: 86, club: "Real Madrid", nat: "ESP", base: 10, pac: 81, sho: 60, pas: 79, dri: 81, def: 82, phy: 81, news: "Six-time Champions League and Euro 2024 winner; rock-solid right-back." },
      { id: 51, sofifaId: 210035, wiki: "Alejandro_Grimaldo", name: "Alejandro Grimaldo", pos: "LB", group: "DEF", ovr: 86, club: "Leverkusen", nat: "ESP", base: 10, pac: 84, sho: 79, pas: 86, dri: 85, def: 77, phy: 71, news: "Free-kick and assist leader from left wing-back with 86 Passing." },
      { id: 52, sofifaId: 277643, wiki: "Lamine_Yamal", name: "Lamine Yamal", pos: "RW", group: "FWD", ovr: 86, club: "FC Barcelona", nat: "ESP", base: 12, pac: 88, sho: 79, pas: 82, dri: 89, def: 35, phy: 58, news: "Euro 2024 Young Player of the Tournament; electric 89 Dribbling." },
      { id: 53, sofifaId: 20801, wiki: "Cristiano_Ronaldo", name: "Cristiano Ronaldo", pos: "ST", group: "FWD", ovr: 84, club: "Al Nassr", nat: "POR", base: 12, pac: 67, sho: 88, pas: 75, dri: 78, def: 33, phy: 75, news: "EA SPORTS FC 27 rating: 84 OVR, 88 Shooting, and 75 Physicality." },
      { id: 54, sofifaId: 243812, wiki: "Rodrygo", name: "Rodrygo", pos: "RW", group: "FWD", ovr: 86, club: "Real Madrid", nat: "BRA", base: 11, pac: 89, sho: 81, pas: 79, dri: 88, def: 31, phy: 64, news: "Fluid Real Madrid forward with 89 Pace and 88 Dribbling." },
      { id: 55, sofifaId: 177003, wiki: "Luka_Modrić", name: "Luka Modric", pos: "CM", group: "MID", ovr: 86, club: "Real Madrid", nat: "CRO", base: 10, pac: 66, sho: 74, pas: 88, dri: 86, def: 70, phy: 62, news: "Midfield maestro with 88 Passing and outside-of-the-boot precision." },
      { id: 56, sofifaId: 231443, wiki: "Ousmane_Dembélé", name: "Ousmane Dembélé", pos: "RW", group: "FWD", ovr: 86, club: "Paris SG", nat: "FRA", base: 11, pac: 92, sho: 75, pas: 82, dri: 90, def: 40, phy: 56, news: "Ousmane Dembélé: explosive two-footed forward with elite pace, dribbling, and recent top-level honours." },
      { id: 57, sofifaId: 251854, wiki: "Pedri", name: "Pedri", pos: "CM", group: "MID", ovr: 86, club: "FC Barcelona", nat: "ESP", base: 11, pac: 77, sho: 69, pas: 84, dri: 88, def: 70, phy: 70, news: "Barcelona midfield orchestrator with 88 Dribbling and 84 Passing." },
      { id: 58, sofifaId: 241721, wiki: "Rafael_Leão", name: "Rafael Leao", pos: "LW", group: "FWD", ovr: 86, club: "AC Milan", nat: "POR", base: 12, pac: 94, sho: 78, pas: 79, dri: 89, def: 28, phy: 77, news: "94 Pace Serie A powerhouse winger who glides past full-backs." },
      { id: 59, sofifaId: 232580, wiki: "Gabriel_Magalhães", name: "Gabriel Magalhaes", pos: "CB", group: "DEF", ovr: 86, club: "Arsenal", nat: "BRA", base: 10, pac: 72, sho: 52, pas: 66, dri: 66, def: 86, phy: 84, news: "Dominant Premier League stopper and set-piece aerial threat." },
      { id: 60, sofifaId: 239837, wiki: "Alexis_Mac_Allister", name: "Alexis Mac Allister", pos: "CM", group: "MID", ovr: 86, club: "Liverpool", nat: "ARG", base: 10, pac: 68, sho: 81, pas: 85, dri: 84, def: 76, phy: 76, news: "World Cup winner controlling Liverpool's midfield with 85 Passing." },
      { id: 61, sofifaId: 199503, wiki: "Granit_Xhaka", name: "Granit Xhaka", pos: "CDM", group: "MID", ovr: 86, club: "Leverkusen", nat: "SUI", base: 9, pac: 62, sho: 76, pas: 85, dri: 79, def: 79, phy: 83, news: "Unbeaten Bundesliga champion midfield general with 85 Passing." },
      { id: 62, sofifaId: 213331, wiki: "Jonathan_Tah", name: "Jonathan Tah", pos: "CB", group: "DEF", ovr: 86, club: "Leverkusen", nat: "GER", base: 9, pac: 78, sho: 42, pas: 64, dri: 67, def: 86, phy: 85, news: "Physical center-back anchor with 86 Defending and 85 Physical." },
      { id: 63, sofifaId: 208128, wiki: "Hakan_Çalhanoğlu", name: "Hakan Calhanoglu", pos: "CDM", group: "MID", ovr: 86, club: "Inter Milan", nat: "TUR", base: 10, pac: 71, sho: 82, pas: 87, dri: 83, def: 80, phy: 74, news: "Deep-lying playmaker and set-piece master with 87 Passing." },
      { id: 64, sofifaId: 239580, wiki: "Gleison_Bremer", name: "Gleison Bremer", pos: "CB", group: "DEF", ovr: 86, club: "Juventus", nat: "BRA", base: 10, pac: 82, sho: 50, pas: 61, dri: 68, def: 86, phy: 85, news: "Rapid Serie A defender with 82 Pace and 86 Defending." },
      { id: 65, sofifaId: 230869, wiki: "Unai_Simón", name: "Unai Simon", pos: "GK", group: "GK", ovr: 86, club: "Athletic Club", nat: "ESP", base: 9, pac: 85, sho: 82, pas: 79, dri: 88, def: 52, phy: 85, news: "Euro 2024 champion goalkeeper with 88 Reflexes." },
      { id: 66, sofifaId: 167495, wiki: "Manuel_Neuer", name: "Manuel Neuer", pos: "GK", group: "GK", ovr: 86, club: "Bayern Munchen", nat: "GER", base: 9, pac: 84, sho: 84, pas: 90, dri: 85, def: 49, phy: 86, news: "Legendary sweeper-keeper with 90 Kicking distribution." },
      { id: 67, sofifaId: 165153, wiki: "Karim_Benzema", name: "Karim Benzema", pos: "ST", group: "FWD", ovr: 86, club: "Al-Ittihad", nat: "FRA", base: 10, pac: 76, sho: 86, pas: 81, dri: 85, def: 39, phy: 76, news: "Former Ballon d'Or winner with elite link-up play and 86 Shooting." },
      { id: 68, sofifaId: 257534, wiki: "Cole_Palmer", name: "Cole Palmer", pos: "CAM", group: "MID", ovr: 85, club: "Chelsea", nat: "ENG", base: 10, pac: 80, sho: 83, pas: 84, dri: 86, def: 50, phy: 66, news: "Premier League Young Player of the Season; ice-cold penalty and clutch scorer." },
      { id: 69, sofifaId: 247635, wiki: "Khvicha_Kvaratskhelia", name: "K. Kvaratskhelia", pos: "LW", group: "FWD", ovr: 85, club: "Napoli", nat: "GEO", base: 10, pac: 86, sho: 80, pas: 81, dri: 88, def: 45, phy: 72, news: "Two-footed Georgian winger with 88 Dribbling and unpredictable cut-ins." },
      { id: 71, sofifaId: 241486, wiki: "Jules_Koundé", name: "Jules Kounde", pos: "RB", group: "DEF", ovr: 85, club: "FC Barcelona", nat: "FRA", base: 9, pac: 84, sho: 45, pas: 74, dri: 79, def: 86, phy: 79, news: "Versatile right-back and center-back with 84 Pace and 86 Defending." },
      { id: 72, sofifaId: 233731, wiki: "Alexander_Isak", name: "Alexander Isak", pos: "ST", group: "FWD", ovr: 85, club: "Newcastle Utd", nat: "SWE", base: 9, pac: 85, sho: 85, pas: 73, dri: 86, def: 35, phy: 74, news: "Silky 6ft4 striker with 85 Pace, 85 Shooting, and 86 Dribbling." },
      { id: 73, sofifaId: 241084, wiki: "Luis_Díaz_(Colombian_footballer)", name: "Luis Diaz", pos: "LW", group: "FWD", ovr: 85, club: "Liverpool", nat: "COL", base: 9, pac: 90, sho: 80, pas: 76, dri: 87, def: 43, phy: 73, news: "Direct 90 Pace winger who stretches defenses relentlessly." },
      { id: 74, sofifaId: 224293, wiki: "Dani_Olmo", name: "Dani Olmo", pos: "CAM", group: "MID", ovr: 85, club: "FC Barcelona", nat: "ESP", base: 9, pac: 78, sho: 80, pas: 83, dri: 87, def: 52, phy: 62, news: "Euro 2024 Golden Boot winner; technical 87 Dribbling in tight spaces." },
      { id: 75, sofifaId: 256516, wiki: "Nico_Williams", name: "Nico Williams", pos: "LW", group: "FWD", ovr: 85, club: "Athletic Club", nat: "ESP", base: 9, pac: 93, sho: 76, pas: 78, dri: 87, def: 36, phy: 66, news: "Euro 2024 Final Man of the Match; blistering 93 Pace on the left wing." },
      { id: 76, sofifaId: 248243, wiki: "Eduardo_Camavinga", name: "Eduardo Camavinga", pos: "CM", group: "MID", ovr: 85, club: "Real Madrid", nat: "FRA", base: 9, pac: 80, sho: 68, pas: 81, dri: 84, def: 81, phy: 81, news: "Dynamic ball-winning midfielder with 80+ in Pace, Passing, Dribbling, Defense, Physical." },
      { id: 77, sofifaId: 241637, wiki: "Aurélien_Tchouaméni", name: "A. Tchouameni", pos: "CDM", group: "MID", ovr: 85, club: "Real Madrid", nat: "FRA", base: 9, pac: 73, sho: 71, pas: 79, dri: 79, def: 84, phy: 85, news: "Defensive shield with 84 Defending and 85 Physicality." },
      { id: 78, sofifaId: 246191, wiki: "Julián_Alvarez", name: "Julian Alvarez", pos: "ST", group: "FWD", ovr: 85, club: "Atletico Madrid", nat: "ARG", base: 9, pac: 85, sho: 84, pas: 80, dri: 85, def: 55, phy: 77, news: "High-pressing forward with 85 Pace, 84 Shooting, and 85 Dribbling." },
      { id: 79, sofifaId: 251517, wiki: "Joško_Gvardiol", name: "Josko Gvardiol", pos: "LB", group: "DEF", ovr: 85, club: "Manchester City", nat: "CRO", base: 9, pac: 79, sho: 65, pas: 75, dri: 79, def: 84, phy: 84, news: "Goalscoring left-back and center-back hybrid with 84 Defending." },
      { id: 80, sofifaId: 255253, wiki: "Vitinha_(footballer,_born_February_2000)", name: "Vitinha", pos: "CM", group: "MID", ovr: 85, club: "Paris SG", nat: "POR", base: 8, pac: 75, sho: 76, pas: 84, dri: 87, def: 75, phy: 68, news: "PSG midfield metronome with 87 Dribbling and 84 Passing." },
      { id: 82, sofifaId: 183898, wiki: "Ángel_Di_María", name: "Angel Di Maria", pos: "RW", group: "FWD", ovr: 85, club: "Benfica", nat: "ARG", base: 10, pac: 83, sho: 78, pas: 86, dri: 87, def: 44, phy: 67, news: "Elegant creator with elite crossing, left-footed finishing, and set-piece quality." },
      { id: 83, sofifaId: 155862, wiki: "Sergio_Ramos", name: "Sergio Ramos", pos: "CB", group: "DEF", ovr: 84, club: "Sevilla FC", nat: "ESP", base: 9, pac: 70, sho: 66, pas: 72, dri: 65, def: 84, phy: 82, news: "Commanding defender and set-piece threat with elite leadership." },
      { id: 84, sofifaId: 241651, wiki: "Viktor_Gyökeres", name: "Viktor Gyokeres", pos: "ST", group: "FWD", ovr: 86, club: "Arsenal", nat: "SWE", base: 12, pac: 81, sho: 87, pas: 72, dri: 78, def: 44, phy: 87, news: "EA SPORTS FC 27 / FIFA Index profile: 86 OVR with 87 Shooting and 87 Physicality." },
      { id: 85, sofifaId: 247827, wiki: "Michael_Olise", name: "Michael Olise", pos: "RW", group: "FWD", ovr: 90, club: "Bayern Munchen", nat: "FRA", base: 11, pac: 83, sho: 82, pas: 89, dri: 91, def: 47, phy: 69, news: "EA SPORTS FC 27 profile: 90 OVR, 89 Passing, and 91 Dribbling." },
      { id: 86, sofifaId: 272834, wiki: "João_Neves", name: "Joao Neves", pos: "CDM", group: "MID", ovr: 88, club: "Paris SG", nat: "POR", base: 11, pac: 72, sho: 75, pas: 84, dri: 87, def: 86, phy: 82, news: "EA SPORTS FC 27 profile: 88 OVR, 86 Defending, and 82 Physicality." },
      { id: 87, sofifaId: 235794, wiki: "Eberechi_Eze", name: "Eberechi Eze", pos: "CAM", group: "MID", ovr: 84, club: "Arsenal", nat: "ENG", base: 10, pac: 78, sho: 79, pas: 78, dri: 84, def: 48, phy: 68, news: "Current FC profile: creative CAM with 84 OVR and 84 Dribbling." },
      { id: 88, sofifaId: 253149, wiki: "Jeremie_Fringpong", name: "Jeremie Frimpong", pos: "RB", group: "DEF", ovr: 81, club: "Liverpool", nat: "NED", base: 10, pac: 94, sho: 61, pas: 72, dri: 83, def: 70, phy: 68, news: "Current FC profile: explosive full-back with 94 Pace and 83 Dribbling." },
      { id: 89, sofifaId: 260592, wiki: "Benjamin_Šeško", name: "Benjamin Sesko", pos: "ST", group: "FWD", ovr: 80, club: "RB Leipzig", nat: "SVN", base: 11, pac: 84, sho: 76, pas: 65, dri: 75, def: 49, phy: 79, news: "Current FC profile: tall striker with 84 Pace and 79 Physicality." },
      { id: 90, sofifaId: 259399, wiki: "Rasmus_Højlund", name: "Rasmus Hojlund", pos: "ST", group: "FWD", ovr: 78, club: "Manchester Utd", nat: "DEN", base: 10, pac: 84, sho: 77, pas: 62, dri: 75, def: 35, phy: 84, news: "Current FC profile: physical striker with 84 Pace and 84 Physicality." },
      { id: 91, sofifaId: 245367, wiki: "Xavi_Simons", name: "Xavi Simons", pos: "CAM", group: "MID", ovr: 81, club: "Tottenham", nat: "NED", base: 10, pac: 75, sho: 74, pas: 80, dri: 83, def: 60, phy: 69, news: "Current FC profile: versatile CAM with 83 Dribbling and 80 Passing." },
      { id: 92, sofifaId: 230899, wiki: "Ademola_Lookman", name: "Ademola Lookman", pos: "LW", group: "FWD", ovr: 83, club: "Atletico Madrid", nat: "NGA", base: 10, pac: 86, sho: 81, pas: 74, dri: 84, def: 37, phy: 72, news: "Current FC profile: 83 OVR with 86 Pace and 84 Dribbling." },
      { id: 93, sofifaId: 259307, wiki: "Malo_Gusto", name: "Malo Gusto", pos: "RB", group: "DEF", ovr: 79, club: "Chelsea", nat: "FRA", base: 8, pac: 84, sho: 52, pas: 74, dri: 78, def: 71, phy: 76, news: "Current FC profile: modern right-back with 84 Pace and 71 Defending." },
      { id: 94, sofifaId: 278046, wiki: "Pau_Cubarsí", name: "Pau Cubarsi", pos: "CB", group: "DEF", ovr: 86, club: "FC Barcelona", nat: "ESP", base: 8, pac: 78, sho: 46, pas: 85, dri: 77, def: 84, phy: 82, news: "Current FC profile: 86 OVR ball-playing defender with 85 Passing and 84 Defending." },
      { id: 95, sofifaId: 269136, wiki: "Kobbie_Mainoo", name: "Kobbie Mainoo", pos: "CM", group: "MID", ovr: 81, club: "Manchester Utd", nat: "ENG", base: 8, pac: 66, sho: 68, pas: 80, dri: 83, def: 77, phy: 76, news: "Current FC profile: calm midfielder with 83 Dribbling and 80 Passing." },
      { id: 96, sofifaId: 248793, wiki: "Mats_Wieffer", name: "Mats Wieffer", pos: "CDM", group: "MID", ovr: 79, club: "Brighton", nat: "NED", base: 7, pac: 67, sho: 66, pas: 77, dri: 74, def: 78, phy: 78, news: "Current FC profile: versatile midfielder/right-back with 78 Defending and Physicality." },
      { id: 98, sofifaId: 233419, wiki: "Raphinha", name: "Raphinha", pos: "LW", group: "FWD", ovr: 88, club: "FC Barcelona", nat: "BRA", base: 11, pac: 91, sho: 86, pas: 85, dri: 87, def: 54, phy: 76, news: "EA SPORTS FC 27 profile: 88 OVR, 91 Pace, and 87 Dribbling." },
      { id: 99, sofifaId: 271421, wiki: "Désiré_Doué", name: "Desire Doue", pos: "RW", group: "FWD", ovr: 86, club: "Paris SG", nat: "FRA", base: 10, pac: 83, sho: 80, pas: 79, dri: 89, def: 54, phy: 77, news: "Current FC profile: 86 OVR winger with 89 Dribbling and 77 Physicality." },
      { id: 100, sofifaId: 246420, wiki: "Jérémy_Doku", name: "Jeremy Doku", pos: "LW", group: "FWD", ovr: 84, club: "Manchester City", nat: "BEL", base: 10, pac: 93, sho: 68, pas: 73, dri: 85, def: 31, phy: 68, news: "Current FC profile: 93 Pace and 85 Dribbling with explosive one-v-one ability." },
      { id: 101, sofifaId: 264240, wiki: "Gavi", name: "Gavi", pos: "CM", group: "MID", ovr: 83, club: "FC Barcelona", nat: "ESP", base: 9, pac: 78, sho: 61, pas: 82, dri: 84, def: 78, phy: 73, news: "Relentless Barcelona midfielder with sharp pressing, close control, and competitive edge." },
      { id: 102, sofifaId: 252145, wiki: "Nuno_Mendes", name: "Nuno Mendes", pos: "LB", group: "DEF", ovr: 84, club: "Paris SG", nat: "POR", base: 10, pac: 90, sho: 61, pas: 78, dri: 82, def: 76, phy: 79, news: "Explosive left-back with recovery pace, powerful carries, and modern attacking range." },
    ];
    const REMOVED_PLAYER_IDS = new Set([70, 81, 97, 103]);

    // The auction pool is intentionally compact. The standalone Lineup
    // Builder uses this pool plus a curated legacy set so classic retired FIFA
    // players are available without affecting the live auction economy.
    function makeLegacyPlayer(id, name, pos, group, ovr, nat, club, sofifaId) {
      return { id, name, pos, group, ovr, nat, club, sofifaId, base: 0, pac: ovr, sho: ovr, pas: ovr, dri: ovr, def: ovr, phy: ovr, news: `${name} · legacy FIFA player` };
    }

    const LEGACY_PLAYERS_DB = [
      makeLegacyPlayer(1001, 'Pelé', 'ST', 'FWD', 95, 'BRA', 'Brazil Legends', 1211),
      makeLegacyPlayer(1002, 'Diego Maradona', 'CAM', 'MID', 95, 'ARG', 'Argentina Legends', 7986),
      makeLegacyPlayer(1003, 'Johan Cruyff', 'CF', 'FWD', 94, 'NED', 'Netherlands Legends', 1934),
      makeLegacyPlayer(1004, 'Zinedine Zidane', 'CAM', 'MID', 94, 'FRA', 'France Legends', 5479),
      makeLegacyPlayer(1005, 'Ronaldo Nazário', 'ST', 'FWD', 94, 'BRA', 'Brazil Legends', 37572),
      makeLegacyPlayer(1006, 'Ronaldinho', 'LW', 'FWD', 93, 'BRA', 'Brazil Legends', 28130),
      makeLegacyPlayer(1007, 'Thierry Henry', 'ST', 'FWD', 93, 'FRA', 'France Legends', 1212),
      makeLegacyPlayer(1008, 'Franz Beckenbauer', 'CB', 'DEF', 93, 'GER', 'Germany Legends', 3),
      makeLegacyPlayer(1009, 'Paolo Maldini', 'CB', 'DEF', 93, 'ITA', 'Italy Legends', 20590),
      makeLegacyPlayer(1010, 'Xavi', 'CM', 'MID', 92, 'ESP', 'Spain Legends', 10535),
      makeLegacyPlayer(1011, 'Andrés Iniesta', 'CM', 'MID', 92, 'ESP', 'Spain Legends', 19927),
      makeLegacyPlayer(1012, 'Kaká', 'CAM', 'MID', 91, 'BRA', 'Brazil Legends', 140601),
      makeLegacyPlayer(1013, 'David Beckham', 'RM', 'MID', 90, 'ENG', 'England Legends', 5400),
      makeLegacyPlayer(1014, 'Gianluigi Buffon', 'GK', 'GK', 93, 'ITA', 'Italy Legends', 1179),
      makeLegacyPlayer(1015, 'Iker Casillas', 'GK', 'GK', 92, 'ESP', 'Spain Legends', 5471),
      makeLegacyPlayer(1016, 'Roberto Carlos', 'LB', 'DEF', 91, 'BRA', 'Brazil Legends', 7518),
      makeLegacyPlayer(1018, 'Wayne Rooney', 'ST', 'FWD', 91, 'ENG', 'England Legends', 54050),
      makeLegacyPlayer(1019, 'Luis Figo', 'RW', 'FWD', 92, 'POR', 'Portugal Legends', 6027),
      makeLegacyPlayer(1020, 'Andrea Pirlo', 'CM', 'MID', 91, 'ITA', 'Italy Legends', 5476),
      makeLegacyPlayer(1021, 'Patrick Vieira', 'CDM', 'MID', 91, 'FRA', 'France Legends', 1463),
      makeLegacyPlayer(1022, 'Miroslav Klose', 'ST', 'FWD', 90, 'GER', 'Germany Legends', 1213)
    ];
    const LINEUP_PLAYER_POOL = [...PLAYERS_DB, ...LEGACY_PLAYERS_DB];

    const OWNER_COLORS = [
      { border: "#0284c7", badge: "#0369a1", text: "#38bdf8" },
      { border: "#dc2626", badge: "#b91c1c", text: "#f87171" },
      { border: "#16a34a", badge: "#15803d", text: "#4ade80" },
      { border: "#d97706", badge: "#b45309", text: "#fbbf24" },
      { border: "#0d9488", badge: "#0f766e", text: "#2dd4bf" },
      { border: "#ca8a04", badge: "#a16207", text: "#facc15" }
    ];

    // ============================================================================
    // EA SPORTS FC PLAYER PORTRAIT LOADER + PREFETCH CACHE
    // Keep every card on the same game-style portrait source. Mixing Wikipedia
    // photographs with game portraits was the reason some cards looked wrong.
    // ============================================================================
    const realPhotoCache = {};
    const pendingFetches = {};

    function getFallbackDataUri(p) {
      const initials = p.name.split(' ').map(s => s[0]).join('').slice(0, 2);
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 220"><rect width="200" height="220" fill="#171b22"/><text x="100" y="105" text-anchor="middle" fill="#f59e0b" font-family="monospace" font-weight="800" font-size="44">${initials}</text><text x="100" y="145" text-anchor="middle" fill="#9ca3af" font-family="sans-serif" font-weight="700" font-size="16">${p.club}</text><text x="100" y="175" text-anchor="middle" fill="#ffffff" font-family="monospace" font-weight="800" font-size="18">OVR ${p.ovr}</text></svg>`;
      return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
    }

    function getPlayerCardStats(p) {
      return p.group === 'GK'
        ? [['DIV', p.pac], ['HAN', p.sho], ['KIC', p.pas], ['REF', p.dri], ['SPD', p.def], ['POS', p.phy]]
        : [['PAC', p.pac], ['SHO', p.sho], ['PAS', p.pas], ['DRI', p.dri], ['DEF', p.def], ['PHY', p.phy]];
    }

    function getPlayerImageCandidates(p) {
      if (!p.sofifaId) return [];
      const id = String(p.sofifaId).padStart(6, '0');
      const sofifaIdPath = `${id.slice(0, 3)}/${id.slice(3)}`;
      const knownPortraits = p.sofifaId === 190871
        ? [
            // Neymar's FC25 portrait is not returned consistently by the
            // FIFA Index/SoFIFA endpoints, so keep the EA portrait as a
            // dedicated fallback for his card.
            'https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p190871.png',
            'https://www.fifarosters.com/assets/players/fifa25/faces/190871.png'
          ]
        : [];
      return [
        ...knownPortraits,
        `https://images.fifaindex.com/fc27/players/${p.sofifaId}.png`,
        `https://images.fifaindex.com/fc26/players/${p.sofifaId}.png`,
        `https://images.fifaindex.com/fc25/players/${p.sofifaId}.png`,
        // SoFIFA uses the same clean, front-facing game-card cutout style and
        // is a reliable fallback for players missing from FIFA Index.
        `https://cdn.sofifa.net/players/${sofifaIdPath}/26_120.png`,
        `https://cdn.sofifa.net/players/${sofifaIdPath}/25_120.png`,
        `https://cdn.sofifa.net/players/${sofifaIdPath}/24_120.png`
      ];
    }

    function probePlayerImage(url) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.referrerPolicy = 'no-referrer';
        img.onload = () => resolve(url);
        img.onerror = reject;
        img.src = url;
      });
    }

    async function fetchRealPlayerPhotoUrl(p) {
      if (realPhotoCache[p.id]) return realPhotoCache[p.id];
      if (pendingFetches[p.id]) return pendingFetches[p.id];
      const canonicalPlayer = PLAYERS_DB.find(player => player.id === p.id) || p;

      pendingFetches[p.id] = (async () => {
        for (const url of getPlayerImageCandidates(canonicalPlayer)) {
          try {
            const goodUrl = await probePlayerImage(url);
            realPhotoCache[p.id] = goodUrl;
            return goodUrl;
          } catch (e) {}
        }
        const fallback = getFallbackDataUri(p);
        realPhotoCache[p.id] = fallback;
        return fallback;
      })();

      return pendingFetches[p.id];
    }

    function preloadUpcomingPhotos(startIndex, count = 12) {
      if (!state.players || state.players.length === 0) return;
      for (let i = 0; i < count; i++) {
        const idx = (startIndex + i) % state.players.length;
        const pl = state.players[idx];
        if (pl && !realPhotoCache[pl.id]) {
          fetchRealPlayerPhotoUrl(pl).then((url) => {
            if (state.players[state.currentIndex]?.id === pl.id) {
              const activeImg = document.getElementById('card-real-img');
              if (activeImg && activeImg.src !== url) activeImg.src = url;
            }
            const dbImg = document.getElementById('db-img-' + pl.id);
            if (dbImg && dbImg.src !== url) dbImg.src = url;
          });
        }
      }
    }

    // ============================================================================
    // FISHER-YATES RANDOM SHUFFLE (SO HIGH & LOW RATINGS APPEAR IN RANDOM ORDER)
    // ============================================================================
    function shuffleArray(arr) {
      const copy = [...arr];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = copy[i];
        copy[i] = copy[j];
        copy[j] = temp;
      }
      return copy;
    }

    function reshuffleUnsoldLots() {
      stopTimer();
      state.currentBid = 0;
      state.currentBidder = null;

      const soldList = state.players.filter(p => p.status === 'SOLD');
      const unsoldList = shuffleArray(state.players.filter(p => p.status !== 'SOLD'));
      state.players = [...soldList, ...unsoldList];
      state.currentIndex = soldList.length < state.players.length ? soldList.length : 0;

      preloadUpcomingPhotos(state.currentIndex, 16);
      broadcastRoomState();
      renderAll();
      notify('Shuffled all remaining players into a new random auction order.');
    }

    // ============================================================================
    // APPLICATION STATE & MULTI-TAB ROOM SYNC
    // ============================================================================
    let state = {
      currentView: 'lobby',
      roomActive: false,
      lobbyOpen: false,
      localOwnerId: null,
      hostOwnerId: null,
      roomCode: '',
      roomMode: 'auction',
      roomSize: 4,
      soundEnabled: true,
      players: [],
      currentIndex: 0,
      currentBid: 0,
      currentBidder: null,
      passRequest: null,
      timerSeconds: 10,
      timerRunning: false,
      timerPaused: false,
      timerStartedAt: 0,
      timerPausedAt: 0,
      timerPausedMs: 0,
      auctionStarted: false,
      auctionComplete: false,
      selectedSquadOwner: 1,
      owners: {},
      bracket: {
        qf: [],
        sf: [],
        finalMatch: null,
        champion: null
      },
      gameEnded: false,
      explicitRoomExit: false,
      lineupBuilder: {
        activePlayer: 1,
        formations: { 1: '4-3-3', 2: '4-3-3' },
        slots: { 1: null, 2: null },
        teamNames: { 1: 'Player 1 FC', 2: 'Player 2 FC' },
        coachNames: { 1: 'Coach 1', 2: 'Coach 2' },
        coachPhotos: { 1: '', 2: '' },
        editMode: false,
        editingTeam: null,
        activeTeam: 1,
        activeSlotId: null,
        search: ''
      }
    };

    let timerInterval = null;
    let pendingAdvanceTimer = null;
    let databaseRotationTimer = null;
    let databaseRotationOffset = 0;
    let databaseRotationFilterKey = '';
    let databaseNewCardId = null;
    let audioCtx = null;
    let roomChannel = null;

    function rememberRoomSession() {
      if (!state.roomActive || !state.roomCode) return;
      try {
        sessionStorage.setItem('fc25_active_room', state.roomCode);
        sessionStorage.setItem('fc25_active_view', state.currentView || 'lobby');
        if (state.localOwnerId) sessionStorage.setItem('fc25_member_slot_' + state.roomCode, String(state.localOwnerId));
      } catch (e) {}
    }

    function clearRoomSession() {
      try {
        sessionStorage.removeItem('fc25_active_room');
        sessionStorage.removeItem('fc25_active_view');
        if (state.roomCode) sessionStorage.removeItem('fc25_member_slot_' + state.roomCode);
      } catch (e) {}
    }

    function showPlayerLeft(teamName) {
      if (!state.roomActive || state.gameEnded) return;
      state.gameEnded = true;
      stopTimer();
      const copy = document.getElementById('leave-game-copy');
      if (copy) copy.textContent = `${teamName || 'The next player'} left the game. The room has ended.`;
      document.getElementById('leave-game-modal')?.classList.remove('hidden');
    }

    function exitRoomAfterPlayerLeft() {
      document.getElementById('leave-game-modal')?.classList.add('hidden');
      goHome(true);
    }

    function announcePlayerLeft() {
      if (!state.roomActive || !state.localOwnerId || state.explicitRoomExit) return;
      const teamName = state.owners[state.localOwnerId]?.name || `Team ${state.localOwnerId}`;
      const message = { type: 'PLAYER_LEFT', ownerId: state.localOwnerId, teamName, roomCode: state.roomCode, at: Date.now() };
      try { roomChannel?.postMessage(message); } catch (e) {}
      try { localStorage.setItem('fc25_left_' + state.roomCode, JSON.stringify(message)); } catch (e) {}
    }

    function handleRoomMessage(message) {
      if (!message || message.roomCode !== state.roomCode) return;
      if (message.type === 'PLAYER_LEFT' && Number(message.ownerId) !== Number(state.localOwnerId)) {
        showPlayerLeft(message.teamName);
      }
    }

    function setupBroadcastChannel() {
      try {
        if ('BroadcastChannel' in window) {
          if (roomChannel) roomChannel.close();
          roomChannel = new BroadcastChannel('fc25_room_' + state.roomCode);
          roomChannel.onmessage = (ev) => {
            handleRoomMessage(ev.data);
            if (ev.data && ev.data.type === 'SYNC_STATE') {
              const incoming = ev.data.payload;
              if (!incoming || !Array.isArray(incoming.players) || !incoming.owners) return;
              state.roomActive = true;
              state.roomCode = incoming.roomCode || state.roomCode;
              state.roomMode = incoming.roomMode || 'auction';
              state.roomSize = incoming.roomSize;
              state.hostOwnerId = incoming.hostOwnerId || 1;
              state.players = incoming.players.filter(p => !REMOVED_PLAYER_IDS.has(p.id));
              state.currentIndex = incoming.currentIndex;
              state.currentBid = incoming.currentBid;
              state.currentBidder = incoming.currentBidder;
              state.passRequest = incoming.passRequest || null;
              state.timerSeconds = incoming.timerSeconds;
              state.timerRunning = Boolean(incoming.timerRunning);
              state.timerPaused = Boolean(incoming.timerPaused);
              state.timerStartedAt = incoming.timerStartedAt || 0;
              state.timerPausedAt = incoming.timerPausedAt || 0;
              state.timerPausedMs = incoming.timerPausedMs || 0;
              state.auctionStarted = Boolean(incoming.auctionStarted);
              state.auctionComplete = Boolean(incoming.auctionComplete);
              state.owners = incoming.owners;
              state.bracket = incoming.bracket;
              if (incoming.lineupBuilder) state.lineupBuilder = incoming.lineupBuilder;
              preloadUpcomingPhotos(state.currentIndex, 10);
              if (state.roomMode === 'lineup' && state.auctionStarted) {
                switchView('lineup');
              } else if (state.auctionComplete) {
                switchView('squads');
              } else if (state.auctionStarted) {
                switchView('auction');
              } else {
                renderAll();
              }
            }
          };
        }
      } catch (e) {}
    }

    function broadcastRoomState() {
      if (!state.roomActive || !state.roomCode) return;
      try {
        const snapshot = {
          roomCode: state.roomCode,
          roomSize: state.roomSize,
          roomMode: state.roomMode,
          hostOwnerId: state.hostOwnerId,
          players: state.players,
          currentIndex: state.currentIndex,
          currentBid: state.currentBid,
          currentBidder: state.currentBidder,
          passRequest: state.passRequest,
          timerSeconds: state.timerSeconds,
          timerRunning: state.timerRunning,
          timerPaused: state.timerPaused,
          timerStartedAt: state.timerStartedAt,
          timerPausedAt: state.timerPausedAt,
          timerPausedMs: state.timerPausedMs,
          auctionStarted: state.auctionStarted,
          auctionComplete: state.auctionComplete,
          owners: state.owners,
          bracket: state.bracket,
          lineupBuilder: state.lineupBuilder
        };
        rememberRoomSession();
        localStorage.setItem('fc25_room_' + state.roomCode, JSON.stringify(snapshot));
        if (roomChannel) {
          roomChannel.postMessage({ type: 'SYNC_STATE', payload: snapshot });
        }
      } catch (e) {}
    }

    // ============================================================================
    // WEB AUDIO SOUND EFFECTS
    // ============================================================================
    function playSound(kind) {
      if (!state.soundEnabled) return;
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        if (!audioCtx) audioCtx = new AudioContext();
        if (audioCtx.state === 'suspended') audioCtx.resume();

        const now = audioCtx.currentTime;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);

        if (kind === 'bid') {
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(520, now);
          osc.frequency.exponentialRampToValueAtTime(760, now + 0.1);
          gain.gain.setValueAtTime(0.15, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
          osc.start(now);
          osc.stop(now + 0.16);
        } else if (kind === 'tick') {
          osc.type = 'sine';
          osc.frequency.setValueAtTime(state.timerSeconds <= 3 ? 820 : 440, now);
          gain.gain.setValueAtTime(0.06, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
          osc.start(now);
          osc.stop(now + 0.06);
        } else if (kind === 'sold') {
          osc.type = 'square';
          osc.frequency.setValueAtTime(340, now);
          osc.frequency.setValueAtTime(680, now + 0.09);
          gain.gain.setValueAtTime(0.18, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
          osc.start(now);
          osc.stop(now + 0.35);
        }
      } catch (e) {}
    }

    function toggleSound() {
      state.soundEnabled = !state.soundEnabled;
      document.getElementById('btn-sfx').textContent = state.soundEnabled ? 'Audio: ON' : 'Audio: OFF';
    }

    // ============================================================================
    // ROOM INITIALIZATION & CONFIGURATION
    // ============================================================================
    function initRoomState(preserveNames = false) {
      stopTimer();
      // Shuffle the full player pool randomly so ratings and legends appear in mixed order
      state.players = shuffleArray(PLAYERS_DB).map(p => ({
        ...p,
        status: 'AVAILABLE',
        soldTo: null,
        soldPrice: 0,
        inXI: false
      }));
      state.currentIndex = 0;
      state.currentBid = 0;
      state.currentBidder = null;
      state.passRequest = null;
      state.timerStartedAt = 0;
      state.timerPausedAt = 0;
      state.timerPausedMs = 0;
      state.auctionStarted = false;
      state.auctionComplete = false;

      const defaultNames = [
        "Owner 1 (Madrid FC)",
        "Owner 2 (City Blues)",
        "Owner 3 (Munich Red)",
        "Owner 4 (Catalonia XI)",
        "Owner 5 (London Athletic)",
        "Owner 6 (Milan Internazionale)"
      ];

      const newOwners = {};
      for (let i = 1; i <= state.roomSize; i++) {
        const existingName = preserveNames && state.owners[i] ? state.owners[i].name : defaultNames[i - 1];
        newOwners[i] = {
          id: i,
          name: existingName,
          budget: 300.0,
          roster: [],
          formation: '4-3-3',
          lineup: {}
        };
      }
      state.owners = newOwners;
      state.selectedSquadOwner = 1;
      state.bracket = { qf: [], sf: [], finalMatch: null, champion: null };

      preloadUpcomingPhotos(0, 20);
      if (state.roomActive) {
        setupBroadcastChannel();
        broadcastRoomState();
      }
      renderAll();
    }

    function setRoomSize(size) {
      if (![2, 4].includes(size)) return;
      state.roomSize = size;
      document.getElementById('btn-mode-2').className = size === 2
        ? 'room-choice active py-3 px-3 text-left text-xs font-bold border rounded-lg'
        : 'room-choice py-3 px-3 text-left text-xs font-bold border rounded-lg bg-[#171b22] text-gray-300 border-[#2e3646]';
      document.getElementById('btn-mode-4').className = size === 4
        ? 'room-choice active py-3 px-3 text-left text-xs font-bold border rounded-lg'
        : 'room-choice py-3 px-3 text-left text-xs font-bold border rounded-lg bg-[#171b22] text-gray-300 border-[#2e3646]';

      document.getElementById('lobby-bracket-desc').textContent = size === 4
        ? '4-player knockout: two semi-finals feed into a grand final. Share the room code with your friends so they can join.'
        : '2-player final: two club owners compete for the championship. Share the room code with one friend to join.';

      initRoomState(true);
    }

    function generateNewRoomCode() {
      state.roomCode = createUniqueRoomId();
      document.getElementById('input-room-code').value = state.roomCode;
      document.getElementById('room-code-display').textContent = 'ROOM: ' + state.roomCode;
      setupBroadcastChannel();
      broadcastRoomState();
      notify('Generated new Room Code: ' + state.roomCode);
    }

    function setRoomMode(mode) {
      if (!['auction', 'lineup'].includes(mode) || state.roomActive) return;
      state.roomMode = mode;
      if (mode === 'lineup') state.roomSize = 2;
      const auctionButton = document.getElementById('btn-mode-auction');
      const lineupButton = document.getElementById('btn-mode-lineup');
      auctionButton?.classList.toggle('active', mode === 'auction');
      lineupButton?.classList.toggle('active', mode === 'lineup');
      auctionButton?.classList.toggle('bg-[#171b22]', mode !== 'auction');
      lineupButton?.classList.toggle('bg-[#171b22]', mode !== 'lineup');
      document.getElementById('btn-mode-2')?.classList.toggle('hidden', mode === 'lineup');
      document.getElementById('btn-mode-4')?.classList.toggle('hidden', mode === 'lineup');
      document.getElementById('lobby-bracket-desc').textContent = mode === 'lineup'
        ? 'Lineup Builder PVP: two players take turns choosing unique players and editing only their own lineup.'
        : state.roomSize === 4
          ? '4-player knockout: two semi-finals feed into a grand final. Share the room code with your friends so they can join.'
          : '2-player final: two club owners compete for the championship. Share the room code with one friend to join.';
      const startButton = document.getElementById('btn-start-auction');
      if (startButton) startButton.textContent = mode === 'lineup' ? 'Start Lineup Builder' : 'Start Auction Now';
      initRoomState(true);
      renderAll();
    }

    function normalizeRoomCode(value) {
      return String(value || '')
        .replace(/[\u200B-\u200D\uFEFF]/g, '')
        .trim()
        .toUpperCase()
        .replace(/^ROOM\s*:\s*/i, '')
        .replace(/\s+/g, '');
    }

    function isValidRoomCode(code) {
      return /^FC-\d{4}$/.test(code);
    }

    async function writeRoomCodeToClipboard(code) {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(code);
        return true;
      }

      const helper = document.createElement('textarea');
      helper.value = code;
      helper.setAttribute('readonly', '');
      helper.style.position = 'fixed';
      helper.style.opacity = '0';
      helper.style.pointerEvents = 'none';
      document.body.appendChild(helper);
      helper.select();
      helper.setSelectionRange(0, helper.value.length);
      const copied = document.execCommand('copy');
      helper.remove();
      if (!copied) throw new Error('Clipboard permission denied');
      return true;
    }

    async function copyRoomCode() {
      const code = normalizeRoomCode(state.roomCode || document.getElementById('input-room-code').value);
      if (!isValidRoomCode(code)) {
        notify('Create a room first to generate a copyable ID.');
        return;
      }
      document.getElementById('input-room-code').value = code;
      try {
        await writeRoomCodeToClipboard(code);
        notify('Room ID copied: ' + code);
      } catch (e) {
        const input = document.getElementById('input-room-code');
        input.focus();
        input.select();
        notify('Copy was blocked. The room ID is selected — press Ctrl/Cmd+C.');
      }
    }

    function showJoinRoom() {
      document.getElementById('join-room-panel').classList.remove('hidden');
      document.getElementById('join-room-code').focus();
    }

    function hideJoinRoom() {
      document.getElementById('join-room-panel').classList.add('hidden');
    }

    function copyCreatedRoomId() {
      document.getElementById('input-room-code').value = state.roomCode;
      document.getElementById('lobby-room-id').textContent = state.roomCode;
      copyRoomCode();
    }

    function focusCreateRoom() {
      state.lobbyOpen = true;
      switchView('lobby');
      document.getElementById('input-room-code').focus();
    }

    function goHome(skipLeaveAnnouncement = false) {
      if (!skipLeaveAnnouncement) announcePlayerLeft();
      state.explicitRoomExit = true;
      if (roomChannel) {
        roomChannel.close();
        roomChannel = null;
      }
      clearRoomSession();
      state.roomActive = false;
      state.lobbyOpen = false;
      state.gameEnded = false;
      state.currentView = 'lobby';
      history.replaceState(null, '', window.location.pathname);
      renderAll();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function focusJoinRoom() {
      state.lobbyOpen = true;
      switchView('lobby');
      showJoinRoom();
    }

    function joinRoomById() {
      const code = normalizeRoomCode(document.getElementById('join-room-code').value);
      if (!code) {
        notify('Enter a room ID to join.');
        return;
      }
      if (!isValidRoomCode(code)) {
        notify('Use a valid room ID like FC-4092.');
        return;
      }
      document.getElementById('join-room-code').value = code;
      joinExistingRoom(code);
    }

    function createUniqueRoomId() {
      let code = '';
      do {
        code = 'FC-' + Math.floor(1000 + Math.random() * 9000);
      } while (localStorage.getItem('fc25_room_' + code));
      return code;
    }

    function createRoom() {
      const codeInput = createUniqueRoomId();
      state.roomCode = codeInput;
      state.roomActive = true;
      state.hostOwnerId = 1;
      state.localOwnerId = 1;
      state.explicitRoomExit = false;
      state.gameEnded = false;
      state.auctionStarted = false;
      if (state.roomMode === 'lineup') {
        state.roomSize = 2;
        state.lineupBuilder = {
          activePlayer: 1,
          formations: { 1: '4-3-3', 2: '4-3-3' },
          slots: { 1: cloneLineupSlots('4-3-3'), 2: cloneLineupSlots('4-3-3') },
          teamNames: { 1: 'Player 1 FC', 2: 'Player 2 FC' },
          coachNames: { 1: 'Coach 1', 2: 'Coach 2' },
          coachPhotos: { 1: '', 2: '' },
          editMode: false,
          editingTeam: null,
          activeTeam: 1,
          activeSlotId: null,
          search: ''
        };
      }
      try { localStorage.setItem('fc25_slot_' + state.roomCode + '_1', 'claimed'); } catch (e) {}
      document.getElementById('room-code-display').textContent = 'ROOM: ' + state.roomCode;
      document.getElementById('input-room-code').value = state.roomCode;
      setupBroadcastChannel();
      rememberRoomSession();
      broadcastRoomState();
      document.getElementById('created-room-id').textContent = state.roomCode;
      document.getElementById('room-created-strip').classList.remove('hidden');
      document.getElementById('lobby-room-id').textContent = state.roomCode;
      document.getElementById('room-share-lobby').classList.remove('hidden');
      switchView('lobby');
      history.replaceState(null, '', '#' + encodeURIComponent(state.roomCode));
      notify('Room ' + state.roomCode + ' created. Share the code with your friend.');
    }

    function createOrSyncRoom() { createRoom(); }

    function isRoomHost() {
      return Boolean(state.roomActive && state.localOwnerId && state.localOwnerId === state.hostOwnerId);
    }

    function getClaimedRoomMemberCount() {
      if (!state.roomActive || !state.roomCode) return 0;
      let count = 0;
      try {
        for (let ownerId = 1; ownerId <= state.roomSize; ownerId++) {
          if (localStorage.getItem(`fc25_slot_${state.roomCode}_${ownerId}`)) count += 1;
        }
      } catch (e) {
        // Keep the start guard safe if storage is unavailable.
        return 0;
      }
      return count;
    }

    function showRoomStartBlocked() {
      const modal = document.getElementById('room-start-blocked-modal');
      if (modal) modal.classList.remove('hidden');
    }

    function closeRoomStartBlocked() {
      document.getElementById('room-start-blocked-modal')?.classList.add('hidden');
    }

    function startAuction() {
      if (!isRoomHost()) {
        notify('Only the room creator can start the auction.');
        return;
      }
      if (state.auctionStarted) return;
      if (getClaimedRoomMemberCount() < 2) {
        showRoomStartBlocked();
        return;
      }
      state.auctionStarted = true;
      if (state.roomMode === 'lineup') {
        broadcastRoomState();
        switchView('lineup');
        notify('Lineup Builder started. Player 1 picks first.');
        return;
      }
      state.currentBid = 0;
      state.currentBidder = null;
      startOrReset10sTimer();
      broadcastRoomState();
      switchView('auction');
      notify('Auction started for everyone in the room.');
    }

    function joinExistingRoom(codeValue) {
      const codeInput = normalizeRoomCode(codeValue || document.getElementById('input-room-code').value);
      if (!codeInput) return;
      try {
        const saved = localStorage.getItem('fc25_room_' + codeInput);
        if (saved) {
          const parsed = JSON.parse(saved);
          state.roomActive = true;
          state.roomCode = parsed.roomCode;
          state.roomMode = parsed.roomMode || 'auction';
          state.roomSize = parsed.roomSize;
          state.hostOwnerId = parsed.hostOwnerId || 1;
          state.players = parsed.players.filter(p => !REMOVED_PLAYER_IDS.has(p.id));
          state.currentIndex = parsed.currentIndex;
          state.currentBid = parsed.currentBid;
          state.currentBidder = parsed.currentBidder;
          state.passRequest = parsed.passRequest || null;
          state.timerSeconds = parsed.timerSeconds ?? 10;
          state.timerRunning = Boolean(parsed.timerRunning);
          state.timerPaused = Boolean(parsed.timerPaused);
          state.timerStartedAt = parsed.timerStartedAt || 0;
          state.timerPausedAt = parsed.timerPausedAt || 0;
          state.timerPausedMs = parsed.timerPausedMs || 0;
          state.auctionStarted = Boolean(parsed.auctionStarted);
          state.auctionComplete = Boolean(parsed.auctionComplete);
          state.owners = parsed.owners;
          state.localOwnerId = claimRoomSlot(state.roomCode, state.roomSize);
          state.explicitRoomExit = false;
          state.gameEnded = false;
          state.bracket = parsed.bracket || { qf: [], sf: [], finalMatch: null, champion: null };
          state.lineupBuilder = parsed.lineupBuilder || state.lineupBuilder;
          document.getElementById('room-code-display').textContent = 'ROOM: ' + state.roomCode;
          document.getElementById('created-room-id').textContent = state.roomCode;
          document.getElementById('lobby-room-id').textContent = state.roomCode;
          document.getElementById('room-share-lobby').classList.remove('hidden');
          document.getElementById('room-created-strip').classList.add('hidden');
          hideJoinRoom();
          preloadUpcomingPhotos(state.currentIndex, 15);
          setupBroadcastChannel();
          renderAll();
          let savedView = null;
          try { savedView = sessionStorage.getItem('fc25_active_view'); } catch (e) {}
          const restoredView = savedView === 'tournament' && state.auctionComplete ? 'tournament'
            : savedView === 'squads' && state.auctionComplete ? 'squads'
            : state.auctionComplete ? 'squads'
            : state.auctionStarted ? 'auction' : 'lobby';
          switchView(state.roomMode === 'lineup' && state.auctionStarted ? 'lineup' : restoredView);
          notify('Synced with Room ' + state.roomCode);
          return;
        }
      } catch (e) {}
      notify('Room not found. Check the code and try again.');
    }

    function updateOwnerName(ownerId, newName) {
      if (state.localOwnerId !== ownerId) {
        notify('You can only edit your own club name.');
        renderAll();
        return;
      }
      if (state.owners[ownerId] && newName.trim()) {
        state.owners[ownerId].name = newName.trim();
        broadcastRoomState();
        renderAll();
      }
    }

    function claimRoomSlot(roomCode, roomSize) {
      const key = 'fc25_member_slot_' + roomCode;
      try {
        const existing = Number(sessionStorage.getItem(key));
        if (existing >= 1 && existing <= roomSize) return existing;
        for (let i = 1; i <= roomSize; i++) {
          const slotKey = 'fc25_slot_' + roomCode + '_' + i;
          if (!localStorage.getItem(slotKey)) {
            localStorage.setItem(slotKey, 'claimed');
            sessionStorage.setItem(key, String(i));
            return i;
          }
        }
      } catch (e) {}
      return roomSize > 1 ? 2 : 1;
    }

    // ============================================================================
    // 10-SECOND COUNTDOWN & BIDDING LOGIC
    // ============================================================================
    function startOrReset10sTimer() {
      clearInterval(timerInterval);
      state.timerSeconds = 10;
      state.timerRunning = true;
      state.timerPaused = false;
      state.timerStartedAt = Date.now();
      state.timerPausedAt = 0;
      state.timerPausedMs = 0;
      renderTimerBar();
      broadcastRoomState();

      // Check frequently, but only display/play a tick when a whole second has
      // actually elapsed. This prevents a fast-looking countdown caused by
      // timer drift while still keeping the two clients in sync.
      timerInterval = setInterval(() => {
        if (state.timerPaused) return;
        const elapsedMs = Date.now() - state.timerStartedAt - state.timerPausedMs;
        const remaining = Math.max(0, 10 - Math.floor(elapsedMs / 1000));
        if (remaining !== state.timerSeconds) {
          state.timerSeconds = remaining;
          if (remaining > 0) playSound('tick');
          renderTimerBar();
          broadcastRoomState();
        }

        if (remaining <= 0) {
          clearInterval(timerInterval);
          state.timerRunning = false;
          state.timerStartedAt = 0;
          renderTimerBar();
          broadcastRoomState();
          expireCurrentLot();
        }
      }, 200);
    }

    function stopTimer() {
      clearInterval(timerInterval);
      state.timerSeconds = 10;
      state.timerRunning = false;
      state.timerPaused = false;
      state.timerStartedAt = 0;
      state.timerPausedAt = 0;
      state.timerPausedMs = 0;
      renderTimerBar();
    }

    function togglePauseTimer() {
      if (!state.timerRunning) return;
      state.timerPaused = !state.timerPaused;
      if (state.timerPaused) {
        state.timerPausedAt = Date.now();
      } else if (state.timerPausedAt) {
        state.timerPausedMs += Date.now() - state.timerPausedAt;
        state.timerPausedAt = 0;
      }
      document.getElementById('btn-pause-clock').textContent = state.timerPaused ? 'Resume Timer' : 'Pause Timer';
      broadcastRoomState();
    }

    function requestPass() {
      if (state.auctionComplete) return;
      if (state.currentBidder) {
        notify('A player with an active bid cannot be passed. Use Let Them Take It.');
        return;
      }
      if (!state.localOwnerId || state.roomSize < 2) return;
      if (state.passRequest && state.passRequest.targetIndex === state.currentIndex) {
        notify('Waiting for another owner to confirm the pass.');
        return;
      }
      state.passRequest = {
        requesterId: Number(state.localOwnerId),
        targetIndex: state.currentIndex,
        playerName: state.players[state.currentIndex]?.name || 'this player',
        requestedAt: Date.now()
      };
      broadcastRoomState();
      renderAuctionView();
      notify('Pass request sent. The other owner must confirm it.');
    }

    function respondToPass(approved) {
      const request = state.passRequest;
      if (!request || request.targetIndex !== state.currentIndex) return;
      if (Number(state.localOwnerId) === Number(request.requesterId)) return;

      state.passRequest = null;
      if (!approved) {
        broadcastRoomState();
        renderAuctionView();
        notify('Pass declined. The countdown continues.');
        return;
      }

      stopTimer();
      state.currentBid = 0;
      state.currentBidder = null;
      broadcastRoomState();
      renderAuctionView();
      notify(request.playerName + ' was passed by both owners.');
      advanceToNextUnsoldPlayer(request.targetIndex);
    }

    function acceptCurrentBid(ownerId) {
      if (Number(ownerId) !== Number(state.localOwnerId)) {
        notify('Only the other team can accept the current bid.');
        return;
      }
      if (!state.currentBidder || Number(state.currentBidder) === Number(ownerId)) return;
      state.passRequest = null;
      sellCurrentPlayer();
    }

    function renderPassRequestModal() {
      const modal = document.getElementById('pass-request-modal');
      if (!modal) return;
      const request = state.passRequest;
      const valid = request && request.targetIndex === state.currentIndex && !state.currentBidder && !state.auctionComplete;
      const isResponder = valid && Number(state.localOwnerId) !== Number(request.requesterId);
      modal.classList.toggle('hidden', !isResponder);
      if (isResponder) {
        const requester = state.owners[request.requesterId]?.name || 'The other owner';
        document.getElementById('pass-request-title').textContent = 'Confirm pass for ' + request.playerName + '?';
        document.getElementById('pass-request-copy').textContent = requester + ' wants to pass this player. Choose Yes to skip the player for both teams, or No to keep the countdown running.';
      }
    }

    function expireCurrentLot() {
      if (state.auctionComplete) return;
      const p = state.players[state.currentIndex];
      if (!p) return;

      // A bid at zero seconds wins normally; an untouched lot is simply passed.
      if (state.currentBidder) {
        sellCurrentPlayer();
        return;
      }

      state.currentBid = 0;
      state.currentBidder = null;
      state.passRequest = null;
      const statusLine = document.getElementById('auction-status-line');
      if (statusLine) {
        statusLine.innerHTML = `<span class="text-[#f59e0b] font-bold">NO SALE:</span> ${p.name} received no bids.`;
      }
      broadcastRoomState();
      notify('No bids for ' + p.name + '. Moving to the next player.');
      clearTimeout(pendingAdvanceTimer);
      const expiredIndex = state.currentIndex;
      pendingAdvanceTimer = setTimeout(() => {
        pendingAdvanceTimer = null;
        if (state.currentIndex !== expiredIndex || state.timerRunning) return;
        advanceToNextUnsoldPlayer(expiredIndex);
      }, 700);
    }

    function renderTimerBar() {
      const digitsEl = document.getElementById('timer-digits');
      const boxEl = document.getElementById('timer-main-box');
      const seqEl = document.getElementById('timer-sequence-bars');
      if (!digitsEl || !seqEl) return;

      digitsEl.textContent = state.timerSeconds;
      if (state.timerRunning && state.timerSeconds <= 3) {
        boxEl.className = 'w-20 h-14 bg-[#2a1215] border-2 border-[#ef4444] rounded flex flex-col items-center justify-center';
        digitsEl.className = 'font-mono-num text-3xl font-extrabold text-[#f87171] leading-none';
      } else {
        boxEl.className = 'w-20 h-14 bg-[#0b0d10] border-2 border-[#d97706] rounded flex flex-col items-center justify-center';
        digitsEl.className = 'font-mono-num text-3xl font-extrabold text-[#f59e0b] leading-none';
      }

      let barsHtml = '';
      for (let s = 10; s >= 1; s--) {
        const active = s <= state.timerSeconds;
        const bg = active
          ? (s <= 3 ? 'bg-[#dc2626] text-white border-[#ef4444]' : 'bg-[#d97706] text-black border-[#f59e0b]')
          : 'bg-[#0b0d10] text-gray-600 border-[#242936]';
        barsHtml += `<div class="w-6 h-8 border rounded flex items-center justify-center font-mono-num text-xs font-extrabold ${bg}">${s}</div>`;
      }
      seqEl.innerHTML = barsHtml;

      const pauseBtn = document.getElementById('btn-pause-clock');
      const prevBtn = document.getElementById('btn-prev-player');
      const nextBtn = document.getElementById('btn-next-player');
      const passBtn = document.getElementById('btn-pass-player');
      if (pauseBtn) pauseBtn.disabled = !state.timerRunning;
      if (prevBtn) prevBtn.disabled = state.timerRunning;
      if (nextBtn) nextBtn.disabled = state.timerRunning;
      if (passBtn) passBtn.disabled = Boolean(state.currentBidder) || state.auctionComplete;
    }

    function bidIncrement(ownerId, inc) {
      if (Number(ownerId) !== Number(state.localOwnerId)) {
        notify('You can only bid for your own team.');
        return;
      }
      if (state.auctionComplete) {
        notify('The auction is complete. Build your lineup now.');
        return;
      }
      const p = state.players[state.currentIndex];
      if (!p || p.status === 'SOLD') {
        notify('Player already sold. Advance to next lot.');
        return;
      }
      const nextAmt = state.currentBid === 0
        ? (inc === 0 ? p.base : p.base + inc)
        : state.currentBid + (inc === 0 ? 1 : inc);
      placeBid(ownerId, nextAmt);
    }

    function bidCustomAmount(ownerId) {
      if (Number(ownerId) !== Number(state.localOwnerId)) {
        notify('You can only bid for your own team.');
        return;
      }
      const input = document.getElementById('custom-bid-owner-' + ownerId);
      if (!input) return;
      const val = parseFloat(input.value);
      if (isNaN(val) || val <= 0) {
        notify('Enter a valid bid amount in EUR Millions (e.g. 50).');
        return;
      }
      placeBid(ownerId, Math.round(val * 10) / 10);
      input.value = '';
    }

    function placeBid(ownerId, amount) {
      if (Number(ownerId) !== Number(state.localOwnerId)) {
        notify('You can only bid for your own team.');
        return;
      }
      if (state.auctionComplete) {
        notify('The auction is complete. Build your lineup now.');
        return;
      }
      const p = state.players[state.currentIndex];
      if (!p || p.status === 'SOLD') return;
      const owner = state.owners[ownerId];
      if (!owner) return;

      if (owner.roster.length >= 16) {
        notify(owner.name + ' already has the maximum 16 players (11 Starters + 5 Extras).');
        return;
      }
      if (amount < p.base) {
        notify('Minimum opening bid for ' + p.name + ' is EUR ' + p.base + '.0M.');
        return;
      }
      if (state.currentBid > 0 && amount <= state.currentBid) {
        notify('Bid must exceed current highest bid of EUR ' + state.currentBid.toFixed(1) + 'M.');
        return;
      }
      if (amount > owner.budget) {
        notify(owner.name + ' only has EUR ' + owner.budget.toFixed(1) + 'M remaining.');
        return;
      }

      state.currentBid = amount;
      state.currentBidder = ownerId;
      state.passRequest = null;
      playSound('bid');
      startOrReset10sTimer();
      broadcastRoomState();
      renderAuctionView();

      document.getElementById('auction-status-line').innerHTML =
        `<span class="text-white font-bold">${owner.name}</span> bids <span class="text-[#f59e0b] font-mono-num font-bold">EUR ${amount.toFixed(1)}M</span> for ${p.name}. 10s countdown active.`;
    }

    function sellCurrentPlayer() {
      if (state.auctionComplete) return;
      const p = state.players[state.currentIndex];
      if (!p || !state.currentBidder) return;

      const winner = state.owners[state.currentBidder];
      const price = state.currentBid;
      stopTimer();
      playSound('sold');

      p.status = 'SOLD';
      p.soldTo = winner.id;
      p.soldPrice = price;
      p.inXI = winner.roster.filter(x => x.inXI).length < 11;

      winner.budget = Math.max(0, Math.round((winner.budget - price) * 10) / 10);
      winner.roster.push(p);

      notify('SOLD: ' + p.name + ' to ' + winner.name + ' for EUR ' + price.toFixed(1) + 'M');
      document.getElementById('auction-status-line').innerHTML =
        `<span class="text-[#10b981] font-bold">SOLD:</span> ${p.name} (${p.ovr}) joined <span class="text-white font-bold">${winner.name}</span> for <span class="font-mono-num font-bold">EUR ${price.toFixed(1)}M</span>.`;

      state.currentBid = 0;
      state.currentBidder = null;
      state.passRequest = null;
      const auctionFinished = allOwnersHaveMinimumSquad();
      state.auctionComplete = auctionFinished;
      broadcastRoomState();
      renderAll();

      if (auctionFinished) {
        notify('Auction complete — every owner has the required 16 players. Build your lineups next.');
        setTimeout(() => switchView('squads'), 650);
        return;
      }

      clearTimeout(pendingAdvanceTimer);
      const soldIndex = state.currentIndex;
      pendingAdvanceTimer = setTimeout(() => {
        pendingAdvanceTimer = null;
        // Ignore an old delayed callback if another action already changed lots.
        if (state.currentIndex !== soldIndex || state.timerRunning) return;
        advanceToNextUnsoldPlayer(soldIndex);
      }, 1100);
    }

    function skipCurrentPlayer() {
      if (state.auctionComplete) return;
      if (state.currentBidder) {
        notify('A player with an active bid cannot be passed. Use Let Them Take It.');
        return;
      }
      const p = state.players[state.currentIndex];
      if (!p) return;
      clearTimeout(pendingAdvanceTimer);
      pendingAdvanceTimer = null;
      stopTimer();
      state.currentBid = 0;
      state.currentBidder = null;
      state.passRequest = null;
      advanceToNextUnsoldPlayer();
    }

    function advanceToNextUnsoldPlayer(expectedIndex = null) {
      if (state.timerRunning) return;
      if (expectedIndex !== null && state.currentIndex !== expectedIndex) return;
      if (allOwnersHaveMinimumSquad()) {
        state.auctionComplete = true;
        stopTimer();
        broadcastRoomState();
        switchView('squads');
        return;
      }
      const total = state.players.length;
      for (let i = 1; i <= total; i++) {
        const idx = (state.currentIndex + i) % total;
        if (state.players[idx].status !== 'SOLD') {
          state.currentIndex = idx;
          state.currentBid = 0;
          state.currentBidder = null;
          state.passRequest = null;
          startOrReset10sTimer();
          preloadUpcomingPhotos(state.currentIndex, 10);
          broadcastRoomState();
          renderAll();
          return;
        }
      }
      renderAll();
      notify('All players have been processed. Proceed to Squads or Knockout Predictor.');
    }

    function allOwnersHaveMinimumSquad() {
      return Object.keys(state.owners).length === state.roomSize &&
        Object.values(state.owners).every(owner => owner.roster.length >= 16);
    }

    function stepLot(delta) {
      if (state.timerRunning) {
        notify('Finish the active bid countdown before changing players.');
        return;
      }
      stopTimer();
      clearTimeout(pendingAdvanceTimer);
      pendingAdvanceTimer = null;
      state.currentBid = 0;
      state.currentBidder = null;
      state.currentIndex = (state.currentIndex + delta + state.players.length) % state.players.length;
      preloadUpcomingPhotos(state.currentIndex, 10);
      renderAll();
    }

    function selectLotFromDatabase(idx) {
      const p = state.players[idx];
      if (p) showPlayerDetails(p.id);
    }

    function showPlayerDetails(playerId) {
      const p = state.players.find(player => player.id === Number(playerId));
      const panel = document.getElementById('db-detail-panel');
      const content = document.getElementById('db-detail-content');
      if (!p || !panel || !content) return;

      panel.classList.remove('hidden');
      const cachedUrl = realPhotoCache[p.id] || getFallbackDataUri(p);
      const cardStats = getPlayerCardStats(p);
      content.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-5 items-start">
          <div class="fifa-grid-card max-w-[220px]">
            <div class="fifa-grid-photo h-[250px]">
              <img id="db-detail-img" src="${cachedUrl}" alt="${p.name}" referrerpolicy="no-referrer" onerror="this.src='${getFallbackDataUri(p)}'" />
              <div class="absolute top-3 left-3 text-center"><div class="font-mono-num text-4xl font-extrabold leading-none">${p.ovr}</div><div class="text-[10px] font-extrabold uppercase mt-1">${p.pos}</div></div>
              <div class="absolute top-3 right-3 px-2 py-1 bg-black/25 rounded text-[10px] font-bold">${p.nat}</div>
            </div>
            <div class="p-3"><div class="text-base font-extrabold truncate">${p.name}</div><div class="text-[11px] font-bold opacity-75 truncate">${p.club}</div></div>
          </div>
          <div class="space-y-4">
            <div class="flex flex-wrap items-center gap-2">
              <span class="px-2.5 py-1 bg-[#d0b986] text-[#17140e] rounded text-xs font-extrabold">${p.ovr} OVR</span>
              <span class="px-2.5 py-1 bg-[#171b22] border border-[#2e3646] rounded text-xs font-bold text-gray-200">${p.pos} · ${p.group}</span>
              <span class="px-2.5 py-1 bg-[#171b22] border border-[#2e3646] rounded text-xs font-bold text-gray-200">${p.nat}</span>
              <span class="px-2.5 py-1 bg-[#171b22] border border-[#2e3646] rounded text-xs font-bold ${p.status === 'SOLD' ? 'text-[#4ade80]' : 'text-[#fbbf24]'}">${p.status === 'SOLD' ? `SOLD · EUR ${p.soldPrice}M` : `BASE · EUR ${p.base}M`}</span>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
              ${cardStats.map(([label,value]) => `<div class="p-3 bg-[#0b0d10] border border-[#2e3646] rounded-lg"><div class="text-[10px] uppercase tracking-wider text-gray-500">${label}</div><div class="font-mono-num text-xl font-extrabold text-[#d0b986] mt-1">${value}</div></div>`).join('')}
            </div>
            <div class="p-3 bg-[#171b22] border border-[#2e3646] rounded-lg"><div class="text-[10px] uppercase tracking-wider text-[#d0b986] font-extrabold">Scouting report</div><p class="text-xs text-gray-300 leading-relaxed mt-1">${p.news || `${p.name} · ${p.club}`}</p></div>
          </div>
        </div>
      `;

      if (!realPhotoCache[p.id]) {
        fetchRealPlayerPhotoUrl(p).then(url => {
          const img = document.getElementById('db-detail-img');
          if (img) img.src = url;
        });
      }
      panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function closePlayerDetails() {
      const panel = document.getElementById('db-detail-panel');
      if (panel) panel.classList.add('hidden');
    }

    // ============================================================================
    // AUTO-FILL ALL SQUADS FOR QUICK TESTING
    // ============================================================================
    function autoDraftRemaining() {
      stopTimer();
      const avail = state.players.filter(p => p.status !== 'SOLD');
      let ownerTurn = 1;

      for (const p of avail) {
        let assigned = false;
        for (let tries = 0; tries < state.roomSize; tries++) {
          const cid = ((ownerTurn - 1 + tries) % state.roomSize) + 1;
          const o = state.owners[cid];
          const targetCount = 16;
          if (o.roster.length < targetCount && o.budget >= p.base) {
            p.status = 'SOLD';
            p.soldTo = cid;
            p.soldPrice = p.base;
            p.inXI = o.roster.filter(x => x.inXI).length < 11;
            o.budget = Math.round((o.budget - p.base) * 10) / 10;
            o.roster.push(p);
            ownerTurn = (cid % state.roomSize) + 1;
            assigned = true;
            break;
          }
        }
        if (!assigned) break;
      }

      autoPickAllOwnersBestXI();
      state.auctionComplete = allOwnersHaveMinimumSquad();
      broadcastRoomState();
      renderAll();
      notify('All teams drafted from the player pool.');
    }

    function autoFillAllSquadsAndGoToBracket() {
      autoDraftRemaining();
      switchView('tournament');
      simulateEntireTournament();
    }

    // ============================================================================
    // RENDER FUNCTIONS: LOBBY & AUCTION
    // ============================================================================
    function renderLobbyView() {
      const isHome = state.currentView === 'lobby';
      document.getElementById('view-lobby').classList.toggle('hidden', !isHome || (!state.roomActive && !state.lobbyOpen));
      document.getElementById('landing-hero').classList.toggle('hidden', state.roomActive || !isHome);
      document.getElementById('landing-content').classList.toggle('hidden', state.roomActive || !isHome);
      document.getElementById('room-entry-panel').classList.toggle('hidden', state.roomActive);
      document.getElementById('room-players-panel').classList.toggle('hidden', !state.roomActive);
      document.getElementById('room-share-lobby').classList.toggle('hidden', !state.roomActive);
      document.getElementById('room-actions').classList.toggle('hidden', !state.roomActive);
      document.getElementById('btn-reset-room').classList.toggle('hidden', !isRoomHost());
      document.querySelectorAll('.post-room-nav').forEach(el => el.classList.toggle('hidden', !state.roomActive));
      ['tab-auction', 'tab-squads', 'tab-tournament'].forEach(id => document.getElementById(id)?.classList.toggle('hidden', !state.roomActive || state.roomMode === 'lineup'));
      document.getElementById('room-mode-title').textContent = state.roomMode === 'lineup' ? 'Lineup Builder players' : 'Players in this room';
      document.getElementById('lobby-owner-count-label').textContent = state.roomSize + ' Active Owners';
      const grid = document.getElementById('lobby-owners-grid');
      let html = '';
      for (let i = 1; i <= state.roomSize; i++) {
        const o = state.owners[i];
        const col = OWNER_COLORS[i - 1];
        const canEdit = state.localOwnerId === i;
        html += `
          <div class="p-3 bg-[#0b0d10] border rounded space-y-2" style="border-color: ${col.border}">
            <div class="flex items-center justify-between">
              <span class="text-xs font-extrabold uppercase" style="color: ${col.text}">SLOT #${i}</span>
              <span class="font-mono-num text-xs text-gray-400">${state.roomMode === 'lineup' ? 'Lineup PVP' : `Budget: EUR ${o.budget.toFixed(1)}M`}</span>
            </div>
            <div class="flex items-center justify-between gap-2">
              <input type="text" value="${o.name}" ${canEdit ? '' : 'disabled'} onchange="updateOwnerName(${i}, this.value)" class="w-full px-2.5 py-1.5 bg-[#12151b] border border-[#2e3646] rounded text-xs font-bold text-white disabled:opacity-60" />
              <span class="shrink-0 text-[10px] ${canEdit ? 'text-[#d0b986]' : 'text-gray-500'}">${canEdit ? 'YOUR CLUB' : 'LOCKED'}</span>
            </div>
            <div class="text-[11px] text-gray-400 flex justify-between">
              <span>Players Signed: <strong class="text-white font-mono-num">${o.roster.length} / 16</strong></span>
              <span>Playing XI: <strong class="text-[#10b981] font-mono-num">${o.roster.filter(x => x.inXI).length} / 11</strong></span>
            </div>
          </div>
        `;
      }
      grid.innerHTML = html;
      const startButton = document.getElementById('btn-start-auction');
      if (startButton) {
        const host = isRoomHost();
        startButton.disabled = state.auctionStarted || !host;
        startButton.textContent = state.auctionStarted ? (state.roomMode === 'lineup' ? 'Lineup Started' : 'Auction Started') : (host ? (state.roomMode === 'lineup' ? 'Start Lineup Builder' : 'Start Auction Now') : 'Waiting for Host');
        startButton.classList.toggle('opacity-50', state.auctionStarted || !host);
        startButton.classList.toggle('cursor-not-allowed', state.auctionStarted || !host);
      }
    }

    function renderAuctionView() {
      const p = state.players[state.currentIndex];
      if (!p) return;

      const totalLots = state.players.length;
      document.getElementById('nav-lot-counter').textContent = (state.currentIndex + 1) + '/' + totalLots;
      document.getElementById('lot-index-label').textContent = `LOT #${state.currentIndex + 1} / ${totalLots} (${p.status})`;
      document.getElementById('lot-base-label').textContent = `Base: EUR ${p.base.toFixed(1)}M`;

      document.getElementById('card-ovr').textContent = p.ovr;
      document.getElementById('card-pos').textContent = p.pos;
      document.getElementById('card-nation').textContent = p.nat;
      document.getElementById('card-club').textContent = p.club;
      document.getElementById('card-name').textContent = p.name;
      document.getElementById('card-tier-note').textContent = `EA SPORTS FC 27 Base Rating | Base EUR ${p.base}M`;
      document.getElementById('player-news-text').textContent = p.news || `${p.name} (${p.ovr} OVR, ${p.club}) enters the randomized transfer lot.`;

      // Real Player Photo Resolution
      const imgEl = document.getElementById('card-real-img');
      if (realPhotoCache[p.id]) {
        imgEl.src = realPhotoCache[p.id];
      } else {
        imgEl.src = getFallbackDataUri(p);
        fetchRealPlayerPhotoUrl(p).then(url => {
          if (state.players[state.currentIndex]?.id === p.id) {
            imgEl.src = url;
          }
        });
      }
      imgEl.onerror = () => {
        if (!imgEl.dataset.triedEa) {
          imgEl.dataset.triedEa = "1";
          const candidates = getPlayerImageCandidates(p);
          imgEl.src = candidates[1] || candidates[2] || getFallbackDataUri(p);
        } else {
          imgEl.src = getFallbackDataUri(p);
        }
      };

      const stats = p.group === 'GK'
        ? [['DIV', p.pac], ['HAN', p.sho], ['KIC', p.pas], ['REF', p.dri], ['SPD', p.def], ['POS', p.phy]]
        : [['PAC', p.pac], ['DRI', p.dri], ['SHO', p.sho], ['DEF', p.def], ['PAS', p.pas], ['PHY', p.phy]];
      document.getElementById('card-attributes').innerHTML = stats.map(([k, v]) => `
        <div class="flex justify-between border-b border-black/15 pb-0.5">
          <span>${k}</span>
          <span class="font-extrabold">${v}</span>
        </div>
      `).join('');

      // Top Status Bar
      const tagEl = document.getElementById('auction-state-tag');
      const amtEl = document.getElementById('live-bid-amount');
      const ownEl = document.getElementById('live-bid-owner');

      if (p.status === 'SOLD') {
        tagEl.textContent = 'SOLD';
        tagEl.className = 'px-3 py-1.5 bg-[#16a34a] text-white text-xs font-extrabold uppercase rounded';
        amtEl.textContent = `EUR ${p.soldPrice.toFixed(1)}M`;
        ownEl.textContent = `Signed by ${state.owners[p.soldTo]?.name || 'Owner'}`;
      } else if (state.currentBidder) {
        tagEl.textContent = 'LIVE 10S TIMER';
        tagEl.className = 'px-3 py-1.5 bg-[#d97706] text-black text-xs font-extrabold uppercase rounded';
        amtEl.textContent = `EUR ${state.currentBid.toFixed(1)}M`;
        ownEl.textContent = `Highest: ${state.owners[state.currentBidder].name}`;
      } else {
        tagEl.textContent = 'OPEN FOR BIDS';
        tagEl.className = 'px-3 py-1.5 bg-[#171b22] border border-[#2e3646] text-gray-300 text-xs font-bold uppercase rounded';
        amtEl.textContent = `EUR ${p.base.toFixed(1)}M`;
        ownEl.textContent = 'Opening Base Price';
      }

      const soldTotal = state.players.filter(x => x.status === 'SOLD').length;
      document.getElementById('count-sold').textContent = soldTotal;
      document.getElementById('count-avail').textContent = totalLots - soldTotal;

      // Render Owner Bidding Consoles
      const nextMin = state.currentBid === 0 ? p.base : state.currentBid + 1;
      const bidGrid = document.getElementById('owners-bid-grid');
      let consolesHtml = '';

      for (let i = 1; i <= state.roomSize; i++) {
        const o = state.owners[i];
        const col = OWNER_COLORS[i - 1];
        const isLeading = state.currentBidder === i;
        const canBid = Number(state.localOwnerId) === i;
        const canAcceptBid = Boolean(state.currentBidder) && Number(state.localOwnerId) === i && !isLeading;
        // Show the complete purchased roster in the live room, not only the
        // first six players.
        const previewPlayers = o.roster;
        const teamPreview = previewPlayers.length
          ? previewPlayers.map(x => {
              const cached = realPhotoCache[x.id] || getFallbackDataUri(x);
              if (!realPhotoCache[x.id]) {
                fetchRealPlayerPhotoUrl(x).then(url => {
                  const el = document.getElementById(`auction-team-img-${i}-${x.id}`);
                  if (el) el.src = url;
                });
              }
              return `<div class="w-full min-w-0 text-center">
                <div class="w-10 h-10 mx-auto rounded-full overflow-hidden border border-[#3b382f] bg-[#11100e]"><img id="auction-team-img-${i}-${x.id}" src="${cached}" alt="${x.name}" class="w-full h-full object-cover object-top" onerror="this.src='${getFallbackDataUri(x)}'" /></div>
                <div class="text-[9px] text-gray-300 truncate mt-1">${x.name.split(' ').slice(-1)[0]}</div>
              </div>`;
            }).join('')
          : '<div class="text-[11px] text-gray-500 py-2">No players signed yet</div>';

        consolesHtml += `
          <div class="panel bid-console ${isLeading ? 'leading' : ''} p-4 space-y-3" style="border-color: ${isLeading ? col.border : '#303949'}; border-width: ${isLeading ? '2px' : '1px'}">
            <div class="flex items-center justify-between border-b border-[#242936] pb-2">
              <div>
                <div class="flex items-center gap-2"><span class="text-[10px] font-mono-num font-extrabold px-1.5 py-0.5 rounded" style="background: ${col.badge}; color: #111">OWNER ${i}</span><div class="text-xs font-extrabold text-white truncate max-w-[160px]">${o.name}</div></div>
                <div class="text-[11px] ${canBid ? 'text-[#d0b986]' : 'text-gray-500'} font-semibold">${canBid ? 'YOUR TEAM · BIDDING ENABLED' : 'READ ONLY · TEAM OWNER ONLY'}</div>
                <div class="text-[11px] text-gray-400 font-mono-num">${o.roster.length}/16 signed · ${o.roster.filter(x => x.inXI).length}/11 XI</div>
              </div>
              <div class="text-right">
                <div class="text-[9px] uppercase tracking-wider text-gray-500">Budget left</div>
                <div class="font-mono-num text-lg font-extrabold" style="color: ${col.text}">EUR ${o.budget.toFixed(1)}M</div>
                ${isLeading ? `<span class="text-[10px] font-extrabold uppercase px-1.5 py-0.5 bg-[#d97706] text-black rounded">HIGHEST BIDDER</span>` : `<span class="text-[10px] text-gray-500">Available Budget</span>`}
              </div>
            </div>

            <div class="border-b border-[#242936] pb-2">
              <div class="text-[10px] uppercase tracking-wider text-gray-500 mb-1.5">Squad preview</div>
              <div class="grid grid-cols-4 sm:grid-cols-5 gap-2 pb-1">${teamPreview}</div>
            </div>

            ${canBid ? `<div class="p-3 bg-[#0b0d10] border border-[#303949] rounded-xl">
              <div class="flex items-center justify-between mb-2"><span class="text-[10px] uppercase tracking-wider text-gray-500">Next valid bid</span><span class="font-mono-num text-xl font-extrabold text-[#f59e0b]">EUR ${nextMin.toFixed(1)}M</span></div>
              <button onclick="bidIncrement(${i}, 0)" class="bid-primary w-full" aria-label="Bid EUR ${nextMin.toFixed(1)} million for ${p.name}">
                BID EUR ${nextMin.toFixed(1)}M
              </button>
            </div>

            <div class="grid grid-cols-3 gap-2">
              <button onclick="bidIncrement(${i}, 2)" class="bid-step">+2M</button>
              <button onclick="bidIncrement(${i}, 5)" class="bid-step">+5M</button>
              <button onclick="bidIncrement(${i}, 10)" class="bid-step">+10M</button>
            </div>

            <div>
              <label for="custom-bid-owner-${i}" class="block text-[10px] uppercase tracking-wider text-gray-500 mb-1.5">Custom bid · EUR millions</label>
              <div class="flex gap-2">
              <input id="custom-bid-owner-${i}" type="number" min="1" max="300" step="0.1" placeholder="e.g. 50" class="bid-custom flex-1 px-3 text-sm font-mono-num text-white" />
              <button onclick="bidCustomAmount(${i})" class="px-4 bid-step text-xs">
                BID EXACT
              </button>
              </div>
            </div>` : `<div class="p-4 bg-[#0b0d10] border border-[#242936] rounded-xl text-center"><div class="text-[10px] uppercase tracking-wider text-gray-500">Bidding locked</div><div class="text-xs text-gray-300 mt-1">Only ${o.name} can bid for this team.</div><div class="text-[10px] text-gray-500 mt-2">You can watch this team’s budget and roster.</div></div>`}
            ${canAcceptBid ? `<button onclick="acceptCurrentBid(${i})" class="w-full px-3 py-2 bg-[#16a34a] hover:bg-[#15803d] text-white text-xs font-extrabold rounded">LET ${state.owners[state.currentBidder]?.name || 'THEM'} TAKE IT · EUR ${state.currentBid.toFixed(1)}M</button>` : ''}

          </div>
        `;
      }
      bidGrid.innerHTML = consolesHtml;
      renderTimerBar();
      renderPassRequestModal();
    }

    // ============================================================================
    // VIEW 3: SQUAD BUILDER (11 PLAYING XI + 5 EXTRAS)
    // ============================================================================
    function selectSquadOwnerTab(ownerId) {
      state.selectedSquadOwner = ownerId;
      renderSquadsView();
    }

    function changeSquadOwner(ownerId) {
      const parsedOwnerId = Number(ownerId);
      if (!state.owners[parsedOwnerId]) return;
      selectSquadOwnerTab(parsedOwnerId);
    }

    const FORMATIONS = {
      '4-3-3': [
        { id: 'gk', label: 'GK', x: 50, y: 91 },
        { id: 'lb', label: 'LB', x: 15, y: 70 }, { id: 'lcb', label: 'CB', x: 38, y: 72 }, { id: 'rcb', label: 'CB', x: 62, y: 72 }, { id: 'rb', label: 'RB', x: 85, y: 70 },
        { id: 'lcm', label: 'CM', x: 27, y: 49 }, { id: 'cm', label: 'CM', x: 50, y: 45 }, { id: 'rcm', label: 'CM', x: 73, y: 49 },
        { id: 'lw', label: 'LW', x: 18, y: 22 }, { id: 'st', label: 'ST', x: 50, y: 15 }, { id: 'rw', label: 'RW', x: 82, y: 22 }
      ],
      '4-4-2': [
        { id: 'gk', label: 'GK', x: 50, y: 91 },
        { id: 'lb', label: 'LB', x: 15, y: 70 }, { id: 'lcb', label: 'CB', x: 38, y: 72 }, { id: 'rcb', label: 'CB', x: 62, y: 72 }, { id: 'rb', label: 'RB', x: 85, y: 70 },
        { id: 'lm', label: 'LM', x: 15, y: 47 }, { id: 'lcm', label: 'CM', x: 38, y: 51 }, { id: 'rcm', label: 'CM', x: 62, y: 51 }, { id: 'rm', label: 'RM', x: 85, y: 47 },
        { id: 'lst', label: 'ST', x: 37, y: 18 }, { id: 'rst', label: 'ST', x: 63, y: 18 }
      ],
      '3-5-2': [
        { id: 'gk', label: 'GK', x: 50, y: 91 },
        { id: 'lcb', label: 'CB', x: 25, y: 72 }, { id: 'cb', label: 'CB', x: 50, y: 75 }, { id: 'rcb', label: 'CB', x: 75, y: 72 },
        { id: 'lm', label: 'LM', x: 10, y: 48 }, { id: 'lcm', label: 'CM', x: 30, y: 54 }, { id: 'cm', label: 'CM', x: 50, y: 48 }, { id: 'rcm', label: 'CM', x: 70, y: 54 }, { id: 'rm', label: 'RM', x: 90, y: 48 },
        { id: 'lst', label: 'ST', x: 37, y: 18 }, { id: 'rst', label: 'ST', x: 63, y: 18 }
      ],
      '4-2-3-1': [
        { id: 'gk', label: 'GK', x: 50, y: 91 },
        { id: 'lb', label: 'LB', x: 15, y: 70 }, { id: 'lcb', label: 'CB', x: 38, y: 72 }, { id: 'rcb', label: 'CB', x: 62, y: 72 }, { id: 'rb', label: 'RB', x: 85, y: 70 },
        { id: 'lcdm', label: 'CDM', x: 38, y: 53 }, { id: 'rcdm', label: 'CDM', x: 62, y: 53 },
        { id: 'lam', label: 'CAM', x: 22, y: 30 }, { id: 'cam', label: 'CAM', x: 50, y: 27 }, { id: 'ram', label: 'CAM', x: 78, y: 30 },
        { id: 'st', label: 'ST', x: 50, y: 12 }
      ]
    };

    const LINEUP_POSITION_OPTIONS = ['GK', 'LB', 'CB', 'RB', 'CDM', 'CM', 'CAM', 'LM', 'RM', 'LW', 'ST', 'RW'];

    function cloneLineupSlots(formation) {
      return (FORMATIONS[formation] || FORMATIONS['4-3-3']).map(slot => ({ ...slot }));
    }

    function getLineupBuilderSlots(team) {
      const builder = state.lineupBuilder;
      if (!builder.slots[team]) builder.slots[team] = cloneLineupSlots(builder.formations[team] || '4-3-3');
      return builder.slots[team];
    }

    function lineupTargetGroup(position) {
      if (position === 'GK') return 'GK';
      if (['LB', 'CB', 'RB'].includes(position)) return 'DEF';
      if (['CDM', 'CM', 'CAM', 'LM', 'RM'].includes(position)) return 'MID';
      return 'FWD';
    }

    function getUsedLineupPlayerIds() {
      return new Set([...(state.lineupBuilder.slots[1] || []), ...(state.lineupBuilder.slots[2] || [])]
        .map(slot => slot.playerId).filter(Boolean));
    }

    function changeLineupBuilderFormation(team, formation) {
      if (!FORMATIONS[formation]) return;
      if (state.roomActive && Number(state.localOwnerId) !== Number(team)) {
        notify('You can only edit your own lineup.');
        return;
      }
      const oldSlots = getLineupBuilderSlots(team);
      const playerIds = oldSlots.map(slot => slot.playerId).filter(Boolean);
      state.lineupBuilder.formations[team] = formation;
      state.lineupBuilder.slots[team] = cloneLineupSlots(formation).map((slot, index) => ({ ...slot, playerId: playerIds[index] || null }));
      state.lineupBuilder.activeSlotId = null;
      broadcastRoomState();
      renderLineupBuilder();
    }

    function toggleLineupEditMode() {
      const team = Number(arguments[0] || state.lineupBuilder.activePlayer);
      if (state.roomActive && Number(state.localOwnerId) !== team) {
        notify('You can only edit your own lineup.');
        return;
      }
      state.lineupBuilder.editMode = !(state.lineupBuilder.editMode && state.lineupBuilder.editingTeam === team);
      state.lineupBuilder.editingTeam = state.lineupBuilder.editMode ? team : null;
      state.lineupBuilder.activeSlotId = null;
      renderLineupBuilder();
    }

    function resetLineupBuilder() {
      state.lineupBuilder = {
        activePlayer: 1,
        formations: { 1: '4-3-3', 2: '4-3-3' },
        slots: { 1: cloneLineupSlots('4-3-3'), 2: cloneLineupSlots('4-3-3') },
        teamNames: { 1: 'Player 1 FC', 2: 'Player 2 FC' },
        coachNames: { 1: 'Coach 1', 2: 'Coach 2' },
        coachPhotos: { 1: '', 2: '' },
        editMode: false,
        editingTeam: null,
        activeTeam: 1,
        activeSlotId: null,
        search: ''
      };
      const search = document.getElementById('lineup-search');
      if (search) search.value = '';
      renderLineupBuilder();
      notify('Lineup Builder reset. Player 1 starts.');
    }

    function updateLineupSlotPosition(team, slotId, position) {
      if (state.roomActive && Number(state.localOwnerId) !== Number(team)) return;
      const slot = getLineupBuilderSlots(team).find(item => item.id === slotId);
      if (!slot || !LINEUP_POSITION_OPTIONS.includes(position)) return;
      slot.label = position;
      slot.playerId = null;
      broadcastRoomState();
      renderLineupBuilder();
    }

    function addLineupBuilderSlot(team) {
      if (state.roomActive && Number(state.localOwnerId) !== Number(team)) return;
      const slots = getLineupBuilderSlots(team);
      if (slots.length >= 11) {
        notify('A lineup can have a maximum of 11 players.');
        return;
      }
      const index = slots.length;
      slots.push({ id: `custom-${Date.now()}-${index}`, label: 'CM', x: 15 + ((index * 23) % 70), y: 18 + ((index * 17) % 68), playerId: null });
      broadcastRoomState();
      renderLineupBuilder();
    }

    function removeLineupBuilderSlot(team, slotId) {
      if (state.roomActive && Number(state.localOwnerId) !== Number(team)) return;
      const slots = getLineupBuilderSlots(team);
      if (slots.length <= 1) return;
      state.lineupBuilder.slots[team] = slots.filter(slot => slot.id !== slotId);
      if (state.lineupBuilder.activeSlotId === slotId) state.lineupBuilder.activeSlotId = null;
      broadcastRoomState();
      renderLineupBuilder();
    }

    function updateLineupIdentity(team, kind, value) {
      if (state.roomActive && Number(state.localOwnerId) !== Number(team)) {
        notify('You can only edit your own team identity.');
        return;
      }
      const builder = state.lineupBuilder;
      builder.teamNames ||= { 1: 'Player 1 FC', 2: 'Player 2 FC' };
      builder.coachNames ||= { 1: 'Coach 1', 2: 'Coach 2' };
      builder.coachPhotos ||= { 1: '', 2: '' };
      if (kind === 'team') builder.teamNames[team] = String(value || '').trim() || `Player ${team} FC`;
      if (kind === 'coach') builder.coachNames[team] = String(value || '').trim() || `Coach ${team}`;
      if (kind === 'photo') builder.coachPhotos[team] = String(value || '').trim();
      broadcastRoomState();
      renderLineupBuilder();
    }

    function selectLineupBuilderSlot(team, slotId) {
      if (state.lineupBuilder.editMode) return;
      if (state.roomActive && Number(state.localOwnerId) !== Number(team)) {
        notify('You can only edit your own lineup.');
        return;
      }
      if (Number(team) !== Number(state.lineupBuilder.activePlayer)) {
        notify(`It is Player ${state.lineupBuilder.activePlayer}'s turn.`);
        return;
      }
      state.lineupBuilder.activeTeam = Number(team);
      state.lineupBuilder.activeSlotId = slotId;
      state.lineupBuilder.search = '';
      const search = document.getElementById('lineup-search');
      if (search) search.value = '';
      renderLineupBuilder();
    }

    function setLineupSearch(value) {
      state.lineupBuilder.search = String(value || '').toLowerCase();
      renderLineupPicker();
    }

    function closeLineupPicker() {
      state.lineupBuilder.activeSlotId = null;
      state.lineupBuilder.search = '';
      const search = document.getElementById('lineup-search');
      if (search) search.value = '';
      document.getElementById('lineup-picker-panel')?.classList.add('hidden');
    }

    function chooseLineupBuilderPlayer(playerId) {
      const builder = state.lineupBuilder;
      const team = state.roomActive ? Number(state.localOwnerId) : Number(builder.activePlayer);
      if (state.roomActive && team !== Number(builder.activePlayer)) {
        notify(`Waiting for Player ${builder.activePlayer}'s pick.`);
        return;
      }
      const slotId = builder.activeSlotId;
      if (!slotId) {
        notify('Choose a pitch position first.');
        return;
      }
      const player = LINEUP_PLAYER_POOL.find(item => item.id === Number(playerId));
      const ownSlots = getLineupBuilderSlots(team);
      const otherTeam = team === 1 ? 2 : 1;
      const usedByOther = getLineupBuilderSlots(otherTeam).some(slot => slot.playerId === player?.id);
      if (!player || usedByOther) {
        notify('That player has already been selected. Choose another player.');
        return;
      }
      const previous = ownSlots.find(slot => slot.playerId === player.id);
      if (previous && previous.id !== slotId) previous.playerId = null;
      const target = ownSlots.find(slot => slot.id === slotId);
      if (!target) return;
      const displaced = target.playerId;
      if (displaced && displaced !== player.id) {
        // The displaced player remains available for the next pick.
        target.playerId = null;
      }
      target.playerId = player.id;
      builder.activePlayer = team === 1 ? 2 : 1;
      builder.activeTeam = builder.activePlayer;
      builder.activeSlotId = null;
      builder.search = '';
      document.getElementById('lineup-picker-panel')?.classList.add('hidden');
      broadcastRoomState();
      renderLineupBuilder();
      notify(`${player.name} selected. Player ${builder.activePlayer}'s turn.`);
    }

    function dragLineupBuilderSlot(event, team, slotId) {
      if (!state.lineupBuilder.editMode || Number(state.lineupBuilder.editingTeam) !== Number(team)) {
        event.preventDefault();
        return;
      }
      event.dataTransfer.setData('text/plain', JSON.stringify({ team: Number(team), slotId }));
      event.dataTransfer.effectAllowed = 'move';
    }

    function dropLineupBuilderSlot(event, team, targetSlotId) {
      event.preventDefault();
      if (!state.lineupBuilder.editMode || Number(state.lineupBuilder.editingTeam) !== Number(team)) return;
      let payload;
      try { payload = JSON.parse(event.dataTransfer?.getData('text/plain') || ''); } catch (e) { return; }
      if (!payload || Number(payload.team) !== Number(team) || payload.slotId === targetSlotId) return;
      const slots = getLineupBuilderSlots(team);
      const from = slots.find(slot => slot.id === payload.slotId);
      const to = slots.find(slot => slot.id === targetSlotId);
      if (!from || !to) return;
      [from.x, to.x] = [to.x, from.x];
      [from.y, to.y] = [to.y, from.y];
      broadcastRoomState();
      renderLineupBuilder();
    }

    function dropLineupBuilderAtPosition(event, team) {
      event.preventDefault();
      const builder = state.lineupBuilder;
      if (!builder.editMode || Number(builder.editingTeam) !== Number(team)) return;
      let payload;
      try { payload = JSON.parse(event.dataTransfer?.getData('text/plain') || ''); } catch (e) { return; }
      if (!payload || Number(payload.team) !== Number(team)) return;
      const slot = getLineupBuilderSlots(team).find(item => item.id === payload.slotId);
      if (!slot) return;
      const rect = event.currentTarget.getBoundingClientRect();
      slot.x = Math.max(6, Math.min(94, ((event.clientX - rect.left) / rect.width) * 100));
      slot.y = Math.max(7, Math.min(93, ((event.clientY - rect.top) / rect.height) * 100));
      broadcastRoomState();
      renderLineupBuilder();
    }

    function renderLineupTeam(team) {
      const builder = state.lineupBuilder;
      const slots = getLineupBuilderSlots(team);
      const formation = builder.formations[team] || '4-3-3';
      const canEditTeam = !state.roomActive || Number(state.localOwnerId) === Number(team);
      const active = Number(builder.activePlayer) === Number(team);
      const editing = builder.editMode && builder.editingTeam === Number(team);
      const slotMarkup = slots.map(slot => {
        const player = LINEUP_PLAYER_POOL.find(item => item.id === slot.playerId);
        const selected = builder.activeSlotId === slot.id && active;
        if (player && !realPhotoCache[player.id]) {
          const playerIdAtRender = player.id;
          fetchRealPlayerPhotoUrl(player).then(url => {
            const currentSlot = getLineupBuilderSlots(team).find(item => item.id === slot.id);
            const image = document.getElementById(`lineup-builder-img-${team}-${slot.id}`);
            // A slot may have changed while the network request was pending.
            // Never let the previous player's portrait overwrite the new one.
            if (currentSlot?.playerId === playerIdAtRender && image) image.src = url;
          });
        }
        const slotBody = editing
          ? `<select onclick="event.stopPropagation()" onchange="updateLineupSlotPosition(${team}, '${slot.id}', this.value)" class="w-full bg-[#0b0d10] border border-[#2e3646] rounded px-1 py-1 text-[10px] text-white">${LINEUP_POSITION_OPTIONS.map(pos => `<option value="${pos}" ${pos === slot.label ? 'selected' : ''}>${pos}</option>`).join('')}</select><button onclick="event.stopPropagation(); removeLineupBuilderSlot(${team}, '${slot.id}')" class="text-[9px] text-red-300 mt-1">Remove</button>`
          : player
            ? `<img id="lineup-builder-img-${team}-${slot.id}" src="${realPhotoCache[player.id] || getFallbackDataUri(player)}" alt="${player.name}" class="w-8 h-8 mx-auto rounded-full object-cover object-top border border-[#d0b986]" onerror="this.src='${getFallbackDataUri(player)}'" /><div class="text-[10px] font-extrabold text-[#f59e0b]">${player.ovr} · ${player.pos}</div><div class="text-[10px] font-bold text-white truncate">${player.name}</div>`
            : `<div class="text-[10px] font-bold text-gray-300">${slot.label}</div><div class="text-[9px] text-gray-500">Choose player</div>`;
        return `<div role="button" tabindex="0" draggable="${editing}" ondragstart="dragLineupBuilderSlot(event, ${team}, '${slot.id}')" ondragover="${editing ? 'event.preventDefault()' : ''}" ondrop="${editing ? `dropLineupBuilderSlot(event, ${team}, '${slot.id}')` : ''}" onclick="selectLineupBuilderSlot(${team}, '${slot.id}')" onkeydown="if(event.key==='Enter'||event.key===' ') selectLineupBuilderSlot(${team}, '${slot.id}')" class="lineup-builder-slot absolute -translate-x-1/2 -translate-y-1/2 w-[92px] px-1 py-2 rounded-lg border text-center ${selected ? 'border-[#f59e0b] bg-[#4f360a]' : player ? 'border-[#d0b986] bg-[#0b0d10]' : 'border-dashed border-[#8b7650] bg-[#072313]/80'}" style="left:${slot.x}%;top:${slot.y}%">${slotBody}</div>`;
      }).join('');
      const teamName = builder.teamNames?.[team] || `Player ${team} FC`;
      const coachName = builder.coachNames?.[team] || `Coach ${team}`;
      const photo = builder.coachPhotos?.[team] || getFallbackDataUri({ name: coachName, club: teamName, ovr: 0 });
      return `<div class="flex items-center justify-between gap-2"><div class="flex items-center gap-2"><img src="${photo}" alt="${coachName}" class="w-10 h-10 rounded-full object-cover border border-[#d0b986]" onerror="this.src='${getFallbackDataUri({ name: coachName, club: teamName, ovr: 0 })}'" /><div><div class="eyebrow">Player ${team}</div><h3 class="text-base font-bold text-white">${active ? 'Picking now' : 'Lineup'}</h3></div></div><span class="text-[10px] font-mono-num ${active ? 'text-[#4ade80]' : 'text-gray-500'}">${slots.filter(slot => slot.playerId).length}/${slots.length} filled</span></div>
        ${canEditTeam ? `<div class="grid grid-cols-1 sm:grid-cols-3 gap-2"><input value="${teamName}" onchange="updateLineupIdentity(${team}, 'team', this.value)" placeholder="Team name" class="px-2 py-2 bg-[#0b0d10] border border-[#2e3646] rounded text-[10px] text-white" /><input value="${coachName}" onchange="updateLineupIdentity(${team}, 'coach', this.value)" placeholder="Coach name" class="px-2 py-2 bg-[#0b0d10] border border-[#2e3646] rounded text-[10px] text-white" /><input value="${builder.coachPhotos?.[team] || ''}" onchange="updateLineupIdentity(${team}, 'photo', this.value)" placeholder="Coach photo URL" class="px-2 py-2 bg-[#0b0d10] border border-[#2e3646] rounded text-[10px] text-white" /></div>` : `<div class="text-[10px] text-gray-400">${teamName} · ${coachName}</div>`}
        ${canEditTeam ? `<div class="flex flex-wrap gap-2"><select onchange="changeLineupBuilderFormation(${team}, this.value)" class="flex-1 min-w-[120px] px-2 py-2 bg-[#0b0d10] border border-[#2e3646] rounded text-xs text-white">${Object.keys(FORMATIONS).map(name => `<option value="${name}" ${name === formation ? 'selected' : ''}>${name}</option>`).join('')}</select><button onclick="toggleLineupEditMode(${team})" class="px-3 py-2 bg-[#171b22] border border-[#2e3646] rounded text-[10px] font-bold text-gray-200">${editing ? 'Done editing' : 'Edit formation'}</button></div>` : ''}
        ${editing ? `<div class="flex gap-2"><button onclick="addLineupBuilderSlot(${team})" class="px-3 py-1.5 bg-[#b2935e] text-[#17140e] rounded text-[10px] font-extrabold">+ Add position</button><span class="text-[10px] text-gray-500 self-center">Drag slots to reposition them.</span></div>` : ''}
        <div class="pitch-grid relative h-[620px] overflow-hidden" ${editing ? 'ondragover="event.preventDefault()" ondrop="dropLineupBuilderAtPosition(event, ' + team + ')"' : ''}><div class="absolute inset-x-1/4 top-1/2 border-t border-white/20"></div>${slotMarkup}</div>`;
    }

    function renderLineupPicker() {
      const builder = state.lineupBuilder;
      const title = document.getElementById('lineup-picker-title');
      const count = document.getElementById('lineup-picker-count');
      const listEl = document.getElementById('lineup-picker-list');
      if (!title || !count || !listEl) return;
      const slot = builder.activeSlotId && getLineupBuilderSlots(builder.activePlayer).find(item => item.id === builder.activeSlotId);
      if (!slot) {
        document.getElementById('lineup-picker-panel')?.classList.add('hidden');
        title.textContent = 'Choose a pitch slot';
        count.textContent = 'Tap an empty position on the active player’s pitch.';
        listEl.innerHTML = '<div class="text-xs text-gray-500 py-8 text-center">Your player list will appear here.</div>';
        return;
      }
      document.getElementById('lineup-picker-panel')?.classList.remove('hidden');
      const targetGroup = lineupTargetGroup(slot.label);
      const used = getUsedLineupPlayerIds();
      const query = builder.search;
      const players = LINEUP_PLAYER_POOL.filter(player => {
        if (used.has(player.id)) return false;
        if (player.group !== targetGroup) return false;
        if (!query) return true;
        return `${player.name} ${player.club} ${player.pos} ${player.nat}`.toLowerCase().includes(query);
      });
      title.textContent = `Player ${builder.activePlayer}: choose ${slot.label}`;
      count.textContent = `${players.length} available ${targetGroup === 'GK' ? 'goalkeepers' : targetGroup.toLowerCase() + ' players'}`;
      listEl.innerHTML = players.length ? players.map(player => {
        const imageId = `lineup-pick-img-${player.id}`;
        const src = realPhotoCache[player.id] || getFallbackDataUri(player);
        if (!realPhotoCache[player.id]) fetchRealPlayerPhotoUrl(player).then(url => { const img = document.getElementById(imageId); if (img) img.src = url; });
        return `<button type="button" onclick="chooseLineupBuilderPlayer(${player.id})" class="w-full flex items-center gap-2 p-2 rounded border border-[#242936] bg-[#0b0d10] hover:border-[#d0b986] text-left"><img id="${imageId}" src="${src}" alt="${player.name}" class="w-10 h-12 object-cover object-top rounded border border-[#3b382f]" /><span class="min-w-0"><span class="block text-xs font-bold text-white truncate">${player.name}</span><span class="block text-[10px] text-gray-400">${player.pos} · ${player.club}</span><span class="block text-[10px] font-mono-num font-extrabold text-[#f59e0b]">${player.ovr} OVR</span></span></button>`;
      }).join('') : '<div class="text-xs text-gray-500 py-8 text-center">No available players match this position or search.</div>';
    }

    function renderLineupBuilder() {
      const team1 = document.getElementById('lineup-team-1');
      const team2 = document.getElementById('lineup-team-2');
      if (!team1 || !team2) return;
      const builder = state.lineupBuilder;
      getLineupBuilderSlots(1);
      getLineupBuilderSlots(2);
      team1.innerHTML = renderLineupTeam(1);
      team2.innerHTML = renderLineupTeam(2);
      const banner = document.getElementById('lineup-turn-banner');
      if (banner) banner.textContent = `Player ${builder.activePlayer}'s turn — select a ${builder.activeSlotId ? 'player' : 'pitch position'}`;
      renderLineupPicker();
    }

    function getFormationSlots(owner) {
      return FORMATIONS[owner.formation || '4-3-3'];
    }

    // FIFA/EA FC style position penalty. The database OVR is the player's
    // natural-position rating; the value below is what the player contributes
    // in a particular formation slot. A goalkeeper in an outfield slot (or an
    // outfield player in goal) is therefore heavily penalized.
    const POSITION_PENALTIES = {
      GK: { GK: 0, DEF: 55, MID: 60, FWD: 65 },
      DEF: { GK: 55, DEF: 0, MID: 16, FWD: 30 },
      MID: { GK: 60, DEF: 15, MID: 0, FWD: 12 },
      FWD: { GK: 65, DEF: 30, MID: 12, FWD: 0 }
    };

    function getPositionAdjustedRating(player, targetPosition) {
      if (!player) return 0;
      const target = String(targetPosition || player.pos || player.group).toUpperCase();
      if (target === player.pos) return player.ovr;
      const targetGroup = target === 'GK' ? 'GK' : ['LB', 'CB', 'RB'].includes(target) ? 'DEF' : ['CDM', 'CM', 'CAM', 'LM', 'RM'].includes(target) ? 'MID' : 'FWD';
      let penalty = POSITION_PENALTIES[player.group]?.[targetGroup] ?? 25;
      // Adjacent positions are playable, but still lose a few points.
      if (player.group === targetGroup) {
        const adjacent = (player.group === 'DEF' && target !== 'CB' && player.pos !== target) ||
          (player.group === 'MID' && player.pos !== target) ||
          (player.group === 'FWD' && player.pos !== target);
        if (adjacent) penalty += targetGroup === 'FWD' ? 3 : 4;
      }
      return Math.max(1, Math.round(player.ovr - penalty));
    }

    function getLineupRating(owner, player) {
      const slot = getFormationSlots(owner).find(s => owner.lineup?.[s.id] === player.id);
      return getPositionAdjustedRating(player, slot?.label || player.pos);
    }

    function ensureLineup(owner) {
      if (!owner.lineup) owner.lineup = {};
      if (!owner.formation) owner.formation = '4-3-3';
      const rosterIds = new Set(owner.roster.map(p => p.id));
      Object.keys(owner.lineup).forEach(slot => {
        if (!rosterIds.has(owner.lineup[slot])) delete owner.lineup[slot];
      });
      if (Object.keys(owner.lineup).length === 0) {
        owner.roster.filter(p => p.inXI).slice(0, 11).forEach((p, i) => {
          const slot = getFormationSlots(owner)[i];
          if (slot) owner.lineup[slot.id] = p.id;
        });
      }
    }

    function syncLineupXI(owner) {
      const placed = new Set(Object.values(owner.lineup || {}));
      owner.roster.forEach(p => { p.inXI = placed.has(p.id); });
    }

    function changeFormation(formation) {
      const owner = state.owners[state.selectedSquadOwner];
      if (!owner || !FORMATIONS[formation]) return;
      if (Number(state.localOwnerId) !== Number(owner.id)) {
        notify('You can only edit your own team lineup.');
        renderSquadsView();
        return;
      }
      ensureLineup(owner);
      owner.formation = formation;
      const validSlots = new Set(FORMATIONS[formation].map(slot => slot.id));
      const currentPlayers = Object.values(owner.lineup);
      owner.lineup = {};
      currentPlayers.slice(0, 11).forEach((playerId, i) => {
        const slot = FORMATIONS[formation][i];
        if (slot && validSlots.has(slot.id)) owner.lineup[slot.id] = playerId;
      });
      syncLineupXI(owner);
      broadcastRoomState();
      renderSquadsView();
    }

    function dragLineupPlayer(event, ownerId, playerId) {
      if (Number(state.localOwnerId) !== Number(ownerId)) {
        event.preventDefault();
        notify('You can only edit your own team lineup.');
        return;
      }
      event.dataTransfer.setData('text/plain', JSON.stringify({ ownerId, playerId }));
      event.dataTransfer.effectAllowed = 'move';
      state.pendingLineupPlayer = { ownerId: Number(ownerId), playerId: Number(playerId) };
    }

    function selectLineupPlayer(ownerId, playerId) {
      if (Number(state.localOwnerId) !== Number(ownerId)) return;
      state.pendingLineupPlayer = { ownerId: Number(ownerId), playerId: Number(playerId) };
      notify('Player selected — click a pitch slot to place them.');
    }

    function dropPlayerOnSlot(event, ownerId, slotId) {
      event.preventDefault();
      if (Number(state.localOwnerId) !== Number(ownerId)) {
        notify('You can only edit your own team lineup.');
        return;
      }
      let payload;
      try { payload = JSON.parse(event.dataTransfer?.getData('text/plain') || ''); } catch (e) { payload = state.pendingLineupPlayer; }
      if (!payload) payload = state.pendingLineupPlayer;
      if (!payload || Number(payload.ownerId) !== Number(ownerId)) {
        notify('Choose a player from this owner’s roster.');
        return;
      }
      const owner = state.owners[ownerId];
      if (!owner || !owner.roster.some(p => p.id === Number(payload.playerId))) return;
      ensureLineup(owner);
      const previousSlot = Object.keys(owner.lineup).find(key => owner.lineup[key] === Number(payload.playerId));
      const displaced = owner.lineup[slotId];
      if (previousSlot && previousSlot !== slotId) {
        if (displaced && displaced !== Number(payload.playerId)) owner.lineup[previousSlot] = displaced;
        else delete owner.lineup[previousSlot];
      }
      owner.lineup[slotId] = Number(payload.playerId);
      state.pendingLineupPlayer = null;
      syncLineupXI(owner);
      broadcastRoomState();
      renderSquadsView();
    }

    function autoPickBestXIForOwner(ownerId) {
      const o = state.owners[ownerId];
      if (!o) return;
      o.roster.forEach(p => p.inXI = false);
      const sorted = [...o.roster].sort((a, b) => b.ovr - a.ovr);
      const chosen = new Set();

      const gk = sorted.find(p => p.group === 'GK');
      if (gk) chosen.add(gk.id);

      const targets = { DEF: 4, MID: 3, FWD: 3 };
      ['DEF', 'MID', 'FWD'].forEach(g => {
        sorted.filter(p => p.group === g && !chosen.has(p.id)).slice(0, targets[g]).forEach(p => chosen.add(p.id));
      });

      for (const p of sorted) {
        if (chosen.size >= 11) break;
        chosen.add(p.id);
      }
      o.roster.forEach(p => p.inXI = chosen.has(p.id));
      broadcastRoomState();
      renderSquadsView();
    }

    function autoPickAllOwnersBestXI() {
      for (let i = 1; i <= state.roomSize; i++) {
        autoPickBestXIForOwner(i);
      }
    }

    function renderSquadsView() {
      const tabsEl = document.getElementById('squad-owner-tabs');
      let tabsHtml = '';
      for (let i = 1; i <= state.roomSize; i++) {
        const o = state.owners[i];
        const active = state.selectedSquadOwner === i;
        tabsHtml += `
          <button onclick="selectSquadOwnerTab(${i})" class="px-3.5 py-2 text-xs font-bold border rounded ${active ? 'bg-[#d97706] text-black border-[#f59e0b]' : 'bg-[#12151b] text-gray-300 border-[#242936] hover:text-white'}">
            ${o.name} (${o.roster.length}/16)
          </button>
        `;
      }
      tabsEl.innerHTML = tabsHtml;

      const owner = state.owners[state.selectedSquadOwner] || state.owners[1];
      if (!owner) return;
      const ownerSelect = document.getElementById('squad-owner-select');
      ownerSelect.innerHTML = Array.from({ length: state.roomSize }, (_, index) => {
        const team = state.owners[index + 1];
        return `<option value="${team.id}">${team.name}</option>`;
      }).join('');
      ownerSelect.value = String(owner.id);
      const canEdit = Number(state.localOwnerId) === Number(owner.id);
      ensureLineup(owner);
      const xi = owner.roster.filter(p => p.inXI);
      const extras = owner.roster.filter(p => !p.inXI);
      const avgOvr = xi.length > 0 ? (xi.reduce((s, p) => s + getLineupRating(owner, p), 0) / xi.length).toFixed(1) : '0.0';

      document.getElementById('active-squad-title').textContent = owner.name + (canEdit ? ' Tactical Lineup' : ' Tactical Lineup · View Only');
      document.getElementById('active-squad-meta').textContent = `Budget Left: EUR ${owner.budget.toFixed(1)}M | Avg XI Adjusted Rating: ${avgOvr}`;
      document.getElementById('active-squad-counts').textContent = `Squad: ${owner.roster.length}/16 | XI: ${xi.length}/11`;
      const formationSelect = document.getElementById('formation-select');
      formationSelect.value = owner.formation || '4-3-3';
      formationSelect.disabled = !canEdit;

      const pitchEl = document.getElementById('active-squad-pitch');
      pitchEl.innerHTML = `<div class="absolute inset-x-1/4 top-1/2 border-t border-white/20"></div>` + getFormationSlots(owner).map(slot => {
        const playerId = owner.lineup[slot.id];
        const p = owner.roster.find(x => x.id === playerId);
        if (p && !realPhotoCache[p.id]) {
          fetchRealPlayerPhotoUrl(p).then(url => {
            const el = document.getElementById(`lineup-player-img-${owner.id}-${slot.id}`);
            if (el) el.src = url;
          });
        }
        return `<div class="lineup-slot ${p ? 'filled' : ''}" style="left:${slot.x}%;top:${slot.y}%" ${canEdit ? `ondragover="event.preventDefault(); event.dataTransfer.dropEffect='move'" ondrop="dropPlayerOnSlot(event, ${owner.id}, '${slot.id}')" onclick="dropPlayerOnSlot(event, ${owner.id}, '${slot.id}')"` : ''}>
          ${p ? `<div class="flex flex-col items-center gap-0.5"><img id="lineup-player-img-${owner.id}-${slot.id}" src="${realPhotoCache[p.id] || getFallbackDataUri(p)}" alt="${p.name}" class="lineup-slot-photo" onerror="this.src='${getFallbackDataUri(p)}'" /><div class="font-mono-num text-[10px] font-extrabold text-[#f59e0b]" title="Natural ${p.ovr} · ${slot.label} adjusted rating">${getLineupRating(owner, p)} · ${p.pos}</div><div class="text-[11px] font-bold text-white truncate max-w-[82px]">${p.name.split(' ').pop()}</div></div>` : `<div class="text-[10px] font-bold text-gray-300">${slot.label}<br><span class="font-normal text-gray-500">Drop player</span></div>`}
        </div>`;
      }).join('');

      const tableEl = document.getElementById('active-squad-table');
      if (owner.roster.length === 0) {
        tableEl.innerHTML = `<div class="text-xs text-gray-500 py-6 text-center">No players signed yet for ${owner.name}.</div>`;
      } else {
        tableEl.innerHTML = owner.roster.map(p => {
          const cached = realPhotoCache[p.id] || getFallbackDataUri(p);
          if (!realPhotoCache[p.id]) {
            fetchRealPlayerPhotoUrl(p).then(url => {
              const el = document.getElementById(`squad-player-img-${owner.id}-${p.id}`);
              if (el) el.src = url;
            });
          }
          return `
            <div draggable="${canEdit ? 'true' : 'false'}" ${canEdit ? `ondragstart="dragLineupPlayer(event, ${owner.id}, ${p.id})" onclick="selectLineupPlayer(${owner.id}, ${p.id})"` : ''} class="${canEdit ? 'lineup-player' : ''} squad-roster-card flex items-center justify-between gap-2 p-2 rounded border ${p.inXI ? 'bg-[#171b22] border-[#d97706]' : 'bg-[#0b0d10] border-[#242936] opacity-75'}">
              <div class="flex items-center gap-2 min-w-0">
                <div class="w-12 h-16 shrink-0 rounded overflow-hidden border border-[#3b382f] bg-[#24221d]"><img id="squad-player-img-${owner.id}-${p.id}" src="${cached}" alt="${p.name}" class="w-full h-full object-cover object-top" onerror="this.src='${getFallbackDataUri(p)}'" /></div>
                <div class="min-w-0">
                  <div class="flex items-center gap-1.5"><span class="font-mono-num text-xs font-extrabold px-1.5 py-0.5 rounded ${p.inXI ? 'bg-[#d97706] text-black' : 'bg-[#1f242d] text-gray-300'}">${p.inXI ? getLineupRating(owner, p) : p.ovr}</span><span class="text-[10px] font-bold text-gray-400">${p.pos} · ${p.nat}</span></div>
                  <div class="text-xs font-bold text-white truncate mt-1">${p.name}</div>
                  <div class="text-[10px] text-gray-400 truncate">${p.club}</div>
                  <div class="text-[10px] text-gray-500 font-mono-num mt-1">EUR ${p.soldPrice.toFixed(1)}M</div>
                </div>
              </div>
              <span class="shrink-0 text-[9px] font-mono-num font-bold px-1.5 py-1 rounded ${p.inXI ? 'bg-[#16a34a]/20 text-[#4ade80] border border-[#16a34a]/40' : 'bg-[#171b22] text-gray-400'}">
                ${p.inXI ? 'XI' : 'BENCH'}
              </span>
            </div>
          `;
        }).join('');
      }
    }

    // ============================================================================
    // VIEW 4: KNOCKOUT TOURNAMENT PREDICTION & SIMULATION (SF1, SF2, FINAL)
    // ============================================================================
    function calculateTeamMetrics(ownerId) {
      const o = state.owners[ownerId];
      if (!o || o.roster.length === 0) {
        return { power: 70.0, att: 70, mid: 70, def: 70, gk: 70, bench: 70, count: 0 };
      }
      if (o.roster.filter(x => x.inXI).length === 0) {
        autoPickBestXIForOwner(ownerId);
      }
      ensureLineup(o);
      const xi = o.roster.filter(x => x.inXI);
      const subs = o.roster.filter(x => !x.inXI);

      const slotFor = (player) => getFormationSlots(o).find(slot => o.lineup?.[slot.id] === player.id);
      const groupAvg = (grp, defVal) => {
        const items = xi.filter(x => x.group === grp);
        return items.length > 0 ? items.reduce((s, x) => s + getPositionAdjustedRating(x, slotFor(x)?.label || x.pos), 0) / items.length : defVal;
      };

      const xiAvg = xi.length > 0 ? xi.reduce((s, x) => s + getPositionAdjustedRating(x, slotFor(x)?.label || x.pos), 0) / xi.length : 75;
      const att = groupAvg('FWD', xiAvg - 2);
      const mid = groupAvg('MID', xiAvg - 2);
      const def = groupAvg('DEF', xiAvg - 2);
      const gk = groupAvg('GK', 78);
      const bench = subs.length > 0 ? subs.reduce((s, x) => s + x.ovr, 0) / subs.length : 75;

      let balanceBonus = 0;
      if (xi.some(x => x.group === 'GK')) balanceBonus += 1.5;
      if (xi.filter(x => x.group === 'DEF').length >= 3) balanceBonus += 1.5;
      if (xi.filter(x => x.group === 'MID').length >= 2) balanceBonus += 1.5;
      if (xi.filter(x => x.group === 'FWD').length >= 2) balanceBonus += 1.5;

      const power = (xiAvg * 0.55) + (att * 0.15) + (mid * 0.12) + (def * 0.10) + (gk * 0.05) + (bench * 0.03) + balanceBonus;
      return {
        power: Math.round(power * 10) / 10,
        att: Math.round(att * 10) / 10,
        mid: Math.round(mid * 10) / 10,
        def: Math.round(def * 10) / 10,
        gk: Math.round(gk * 10) / 10,
        bench: Math.round(bench * 10) / 10,
        count: xi.length
      };
    }

    function simulateSingleMatch(idA, idB, stageTitle) {
      const mA = calculateTeamMetrics(idA);
      const mB = calculateTeamMetrics(idB);
      const oA = state.owners[idA];
      const oB = state.owners[idB];

      const diff = mA.power - mB.power;
      const winProbA = Math.min(88, Math.max(12, Math.round(50 + diff * 3.5)));
      const winProbB = 100 - winProbA;

      let goalsA = Math.max(0, Math.round(1.5 + (diff * 0.16) + (Math.random() * 1.4 - 0.5)));
      let goalsB = Math.max(0, Math.round(1.5 - (diff * 0.16) + (Math.random() * 1.4 - 0.5)));

      let note = "Full Time (90')";
      if (goalsA === goalsB) {
        note = "After Extra Time (120')";
        if (mA.power >= mB.power) goalsA += 1;
        else goalsB += 1;
      }

      const pickScorerName = (ownerObj) => {
        const list = ownerObj.roster.filter(x => x.inXI);
        if (list.length === 0) return "Squad Player";
        const attackers = list.filter(x => x.group === 'FWD' || x.group === 'MID');
        const pool = attackers.length > 0 ? attackers : list;
        return pool[Math.floor(Math.random() * pool.length)].name;
      };

      const logs = [];
      for (let i = 0; i < goalsA; i++) {
        logs.push(`${Math.floor(12 + i * 27)}' Goal for ${oA.name}: ${pickScorerName(oA)}`);
      }
      for (let i = 0; i < goalsB; i++) {
        logs.push(`${Math.floor(19 + i * 29)}' Goal for ${oB.name}: ${pickScorerName(oB)}`);
      }

      const winnerId = goalsA > goalsB ? idA : idB;
      return {
        stageTitle,
        idA,
        idB,
        nameA: oA.name,
        nameB: oB.name,
        powerA: mA.power,
        powerB: mB.power,
        winProbA,
        winProbB,
        goalsA,
        goalsB,
        note,
        winnerId,
        winnerName: state.owners[winnerId].name,
        logs
      };
    }

    function simulateEntireTournament() {
      if (state.roomSize === 2) {
        const fin = simulateSingleMatch(1, 2, "CHAMPIONSHIP FINAL (TEAM 1 VS TEAM 2)");
        state.bracket = { qf: [], sf: [], finalMatch: fin, champion: fin.winnerName };
      } else if (state.roomSize === 4) {
        const sf1 = simulateSingleMatch(1, 2, "SEMI-FINAL 1 (TEAM 1 VS TEAM 2)");
        const sf2 = simulateSingleMatch(3, 4, "SEMI-FINAL 2 (TEAM 3 VS TEAM 4)");
        const fin = simulateSingleMatch(sf1.winnerId, sf2.winnerId, "GRAND FINAL (SF1 WINNER VS SF2 WINNER)");
        state.bracket = {
          qf: [],
          sf: [sf1, sf2],
          finalMatch: fin,
          champion: fin.winnerName
        };
      } else {
        const m1 = simulateSingleMatch(1, 2, "ROUND 1 MATCH A (TEAM 1 VS TEAM 2)");
        const m2 = simulateSingleMatch(3, 4, "ROUND 1 MATCH B (TEAM 3 VS TEAM 4)");
        const m3 = simulateSingleMatch(5, 6, "ROUND 1 MATCH C (TEAM 5 VS TEAM 6)");
        const sf = simulateSingleMatch(m1.winnerId, m2.winnerId, "SEMI-FINAL (WINNER 1V2 VS WINNER 3V4)");
        const fin = simulateSingleMatch(sf.winnerId, m3.winnerId, "GRAND FINAL (SEMI-FINAL WINNER VS WINNER 5V6)");
        state.bracket = {
          qf: [m1, m2, m3],
          sf: [sf],
          finalMatch: fin,
          champion: fin.winnerName
        };
      }
      playSound('sold');
      broadcastRoomState();
      renderTournamentView();
      notify('Tournament simulation complete. Champion: ' + state.bracket.champion);
    }

    function renderMatchCard(m) {
      return `
        <div class="panel p-4 space-y-3">
          <div class="flex items-center justify-between border-b border-[#242936] pb-2">
            <span class="text-xs font-extrabold uppercase tracking-wider text-[#f59e0b]">${m.stageTitle}</span>
            <span class="font-mono-num text-[11px] text-gray-400">${m.note}</span>
          </div>

          <div class="space-y-1">
            <div class="flex justify-between text-[11px] font-mono-num font-bold">
              <span class="text-[#38bdf8]">${m.nameA} Prediction: ${m.winProbA}%</span>
              <span class="text-[#f87171]">${m.nameB} Prediction: ${m.winProbB}%</span>
            </div>
            <div class="w-full h-2.5 bg-[#0b0d10] border border-[#242936] rounded overflow-hidden flex">
              <div class="h-full bg-[#0284c7]" style="width: ${m.winProbA}%"></div>
              <div class="h-full bg-[#dc2626]" style="width: ${m.winProbB}%"></div>
            </div>
          </div>

          <div class="grid grid-cols-3 items-center bg-[#0b0d10] border border-[#242936] p-3 rounded text-center">
            <div class="text-left">
              <div class="text-xs sm:text-sm font-bold text-white truncate">${m.nameA}</div>
              <div class="text-[11px] font-mono-num text-gray-400">Rating Power: ${m.powerA}</div>
            </div>
            <div class="font-mono-num text-2xl sm:text-3xl font-extrabold text-white">
              ${m.goalsA} : ${m.goalsB}
            </div>
            <div class="text-right">
              <div class="text-xs sm:text-sm font-bold text-white truncate">${m.nameB}</div>
              <div class="text-[11px] font-mono-num text-gray-400">Rating Power: ${m.powerB}</div>
            </div>
          </div>

          <div class="flex items-center justify-between text-xs pt-1">
            <div class="text-gray-400 space-y-0.5">
              ${m.logs.map(l => `<div>${l}</div>`).join('')}
            </div>
            <div class="px-2.5 py-1 bg-[#16a34a]/20 border border-[#16a34a]/50 text-[#4ade80] font-bold rounded text-right">
              Advances: ${m.winnerName}
            </div>
          </div>
        </div>
      `;
    }

    function renderTournamentView() {
      const powerGrid = document.getElementById('tournament-power-cards');
      let pHtml = '';
      for (let i = 1; i <= state.roomSize; i++) {
        const o = state.owners[i];
        const m = calculateTeamMetrics(i);
        pHtml += `
          <div class="panel p-3 space-y-1">
            <div class="text-xs font-bold text-white truncate">${o.name}</div>
            <div class="font-mono-num text-lg font-extrabold text-[#f59e0b]">Power: ${m.power}</div>
            <div class="text-[11px] text-gray-400 font-mono-num">ATT ${m.att} | MID ${m.mid} | DEF ${m.def}</div>
          </div>
        `;
      }
      powerGrid.innerHTML = pHtml;

      const container = document.getElementById('tournament-brackets-container');
      if (!state.bracket.finalMatch) {
        container.innerHTML = `
          <div class="panel p-8 text-center space-y-3">
            <div class="text-base font-bold text-white">Knockout Bracket Ready for Prediction & Simulation</div>
            <p class="text-xs text-gray-400 max-w-xl mx-auto">
              ${state.roomSize === 2
                ? 'The championship match is ready: Owner 1 vs Owner 2.'
                : state.roomSize === 4
                ? 'Semi-Final 1 pairs Owner 1 vs Owner 2. Semi-Final 2 pairs Owner 3 vs Owner 4. The winners advance to the Grand Final.'
                : ''}
            </p>
            <button onclick="simulateEntireTournament()" class="px-5 py-2.5 bg-[#d97706] hover:bg-[#b45309] text-black font-extrabold text-xs rounded">
              Run Knockout Predictions & Crown Winner
            </button>
          </div>
        `;
        return;
      }

      let bHtml = '';
      if (state.bracket.qf && state.bracket.qf.length > 0) {
        bHtml += `
          <div class="space-y-2">
            <h3 class="text-xs font-extrabold uppercase tracking-wider text-gray-400">Stage 1: Opening Round Matches (1v2, 3v4, 5v6)</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              ${state.bracket.qf.map(renderMatchCard).join('')}
            </div>
          </div>
        `;
      }

      bHtml += `
        <div class="space-y-2">
          <h3 class="text-xs font-extrabold uppercase tracking-wider text-gray-400">Semi-Final Stage</h3>
          <div class="grid grid-cols-1 md:grid-cols-${state.bracket.sf.length} gap-3">
            ${state.bracket.sf.map(renderMatchCard).join('')}
          </div>
        </div>

        <div class="space-y-2">
          <h3 class="text-xs font-extrabold uppercase tracking-wider text-[#f59e0b]">Championship Grand Final</h3>
          ${renderMatchCard(state.bracket.finalMatch)}
        </div>

        <div class="panel p-5 bg-[#121c16] border-2 border-[#16a34a] text-center space-y-1">
          <div class="text-xs font-extrabold uppercase tracking-widest text-[#4ade80]">TOURNAMENT WINNER</div>
          <div class="text-2xl font-extrabold text-white">${state.bracket.champion}</div>
          <div class="text-xs text-gray-300">Won the Knockout Bracket based on EA Sports FC 25 squad ratings and tactical chemistry.</div>
        </div>
      `;
      container.innerHTML = bHtml;
    }

    // ============================================================================
    // VIEW 5: 100-PLAYER CARD DATABASE
    // ============================================================================
    function renderPlayerGridCard(p, imagePrefix, enters = false) {
      const cachedUrl = realPhotoCache[p.id] || getFallbackDataUri(p);
      const cardStats = getPlayerCardStats(p);
      const imageId = `${imagePrefix}-img-${p.id}`;
      if (!realPhotoCache[p.id]) {
        fetchRealPlayerPhotoUrl(p).then(url => {
          const el = document.getElementById(imageId);
          if (el) el.src = url;
        });
      }
      return `
        <div onclick="showPlayerDetails(${p.id})" class="fifa-grid-card database-grid-card ${enters ? 'database-grid-card-enter' : ''} cursor-pointer" role="button" tabindex="0" onkeydown="if(event.key==='Enter'||event.key===' ') showPlayerDetails(${p.id})">
          <div class="fifa-grid-photo">
            <img id="${imageId}" src="${cachedUrl}" alt="${p.name}" referrerpolicy="no-referrer" onerror="this.src='${getFallbackDataUri(p)}'" />
            <div class="absolute top-3 left-3 text-center"><div class="font-mono-num text-3xl font-extrabold leading-none">${p.ovr}</div><div class="text-[10px] font-extrabold uppercase mt-1">${p.pos}</div></div>
            <div class="absolute top-3 right-3 px-2 py-1 bg-black/25 rounded text-[10px] font-bold">${p.nat}</div>
          </div>
          <div class="p-3">
            <div class="text-base font-extrabold truncate">${p.name}</div>
            <div class="text-[11px] font-bold opacity-75 truncate">${p.club}</div>
            <div class="grid grid-cols-3 gap-1 mt-3 pt-2 border-t border-black/25 text-[10px] font-mono-num font-bold text-center">${cardStats.map(([label,value]) => `<span>${label} ${value}</span>`).join('')}</div>
            <div class="text-[10px] font-mono-num font-extrabold mt-3 ${p.status === 'SOLD' ? 'text-[#075d42]' : 'text-[#4e3400]'}">${p.status === 'SOLD' ? `SOLD · EUR ${p.soldPrice}M` : `BASE · EUR ${p.base}M`}</div>
          </div>
        </div>
      `;
    }

    function renderDatabaseView() {
      const q = (document.getElementById('db-search')?.value || '').toLowerCase();
      const pos = document.getElementById('db-pos')?.value || 'ALL';
      const st = document.getElementById('db-status')?.value || 'ALL';
      const filterKey = `${q}|${pos}|${st}`;
      if (filterKey !== databaseRotationFilterKey) {
        databaseRotationFilterKey = filterKey;
        databaseRotationOffset = 0;
      }

      const list = state.players.filter((p, idx) => {
        p._idx = idx;
        if (q && !p.name.toLowerCase().includes(q) && !p.club.toLowerCase().includes(q) && !p.pos.toLowerCase().includes(q)) return false;
        if (pos !== 'ALL' && p.group !== pos) return false;
        if (st === 'AVAILABLE' && p.status === 'SOLD') return false;
        if (st === 'SOLD' && p.status !== 'SOLD') return false;
        return true;
      });

      const featuredCount = Math.min(5, state.players.length);
      const featuredPlayers = featuredCount > 0
        ? Array.from({ length: featuredCount }, (_, i) => state.players[(databaseRotationOffset + i) % state.players.length])
        : [];
      const rotationLabel = document.getElementById('db-rotation-label');
      if (rotationLabel) rotationLabel.textContent = `Showing all ${list.length} matching players`;
      const featuredGrid = document.getElementById('landing-featured-grid');
      if (featuredGrid) featuredGrid.innerHTML = featuredPlayers.map(p => renderPlayerGridCard(p, 'home-player')).join('');
      const databaseGrid = document.getElementById('db-grid');
      if (databaseGrid) databaseGrid.innerHTML = list.map(p => renderPlayerGridCard(p, 'db-player', p.id === databaseNewCardId)).join('');
      databaseNewCardId = null;

      if (!databaseRotationTimer) {
        scheduleDatabaseRotation();
      }
    }

    function scheduleDatabaseRotation() {
      clearTimeout(databaseRotationTimer);
      databaseRotationTimer = setTimeout(() => {
        databaseRotationTimer = null;
        const search = (document.getElementById('db-search')?.value || '').toLowerCase();
        const position = document.getElementById('db-pos')?.value || 'ALL';
        const status = document.getElementById('db-status')?.value || 'ALL';
        const matchingPlayers = state.players.filter(p => {
          if (search && !p.name.toLowerCase().includes(search) && !p.club.toLowerCase().includes(search) && !p.pos.toLowerCase().includes(search)) return false;
          if (position !== 'ALL' && p.group !== position) return false;
          if (status === 'AVAILABLE' && p.status === 'SOLD') return false;
          if (status === 'SOLD' && p.status !== 'SOLD') return false;
          return true;
        });

        if ((state.currentView === 'database' || state.currentView === 'lobby') && matchingPlayers.length > 0) {
          databaseRotationOffset = (databaseRotationOffset + 1) % matchingPlayers.length;
          databaseNewCardId = matchingPlayers[(databaseRotationOffset + 4) % matchingPlayers.length]?.id || null;
          const grid = document.getElementById('db-grid');
          const featuredGrid = document.getElementById('landing-featured-grid');
          if (grid && state.currentView === 'database') {
            grid.classList.add('database-grid-fading');
            setTimeout(() => {
              renderDatabaseView();
              grid.classList.remove('database-grid-fading');
            }, 280);
          } else if (featuredGrid) {
            renderDatabaseView();
          } else {
            renderDatabaseView();
          }
        }
        scheduleDatabaseRotation();
      }, 5000 + Math.floor(Math.random() * 3001));
    }

    // ============================================================================
    // NAVIGATION & UTILITIES
    // ============================================================================
    function switchView(view) {
      if (view === 'lineup' && state.roomActive && state.roomMode === 'lineup' && !state.auctionStarted) {
        notify(isRoomHost() ? 'Start the Lineup Builder from the room lobby first.' : 'Waiting for the room creator to start the Lineup Builder.');
        return;
      }
      if (view === 'auction' && state.roomActive && !state.auctionStarted) {
        if (isRoomHost()) {
          notify('Start the auction from the lobby so everyone joins together.');
        } else {
          notify('Waiting for the room creator to start the auction.');
        }
        return;
      }
      if (view === 'squads' && state.roomActive && !state.auctionComplete) {
        notify('Complete the auction with at least 16 players for every owner first.');
        return;
      }
      state.currentView = view;
      rememberRoomSession();
      ['lobby', 'auction', 'squads', 'tournament', 'database', 'lineup'].forEach(v => {
        document.getElementById('view-' + v).classList.toggle('hidden', v !== view);
        const btn = document.getElementById('tab-' + v);
        if (btn) {
          const navClass = v === 'database' || v === 'lineup' ? '' : 'post-room-nav ';
          btn.className = navClass + (v === view
            ? 'px-3 py-1.5 text-xs font-bold rounded bg-[#b2935e] text-[#17140e]'
            : 'px-3 py-1.5 text-xs font-bold rounded text-gray-300 hover:text-white');
        }
      });
      renderAll();
    }

    function renderAll() {
      renderLobbyView();
      renderAuctionView();
      renderSquadsView();
      renderTournamentView();
      renderDatabaseView();
      renderLineupBuilder();
    }

    function notify(msg) {
      const box = document.getElementById('toast-box');
      if (!box) return;
      const item = document.createElement('div');
      item.className = 'px-3.5 py-2 bg-[#132238] border border-[#4f8cff] text-xs font-bold text-white rounded-lg shadow-lg';
      item.textContent = msg;
      box.appendChild(item);
      setTimeout(() => item.remove(), 2800);
    }

    function openResetModal() {
      if (!isRoomHost()) {
        notify('Only the room creator can restart the room.');
        return;
      }
      document.getElementById('reset-modal').classList.remove('hidden');
    }

    function closeResetModal() {
      document.getElementById('reset-modal').classList.add('hidden');
    }

    function confirmResetRoom() {
      if (!isRoomHost()) {
        closeResetModal();
        notify('Only the room creator can restart the room.');
        return;
      }
      closeResetModal();
      initRoomState(true);
      state.roomActive = true;
      state.lobbyOpen = true;
      state.hostOwnerId = 1;
      state.localOwnerId = 1;
      state.auctionStarted = false;
      broadcastRoomState();
      renderAll();
      notify('Room reset complete. Player pool reshuffled and owners restored to EUR 300.0M.');
    }

    function isReloadNavigation() {
      const navigation = performance.getEntriesByType?.('navigation')?.[0];
      return navigation?.type === 'reload' || performance.navigation?.type === 1;
    }

    window.addEventListener('storage', (event) => {
      if (!event.key || !event.key.startsWith('fc25_left_') || !event.newValue) return;
      try { handleRoomMessage(JSON.parse(event.newValue)); } catch (e) {}
    });

    // A normal refresh is intentionally silent: the room is restored below.
    // Closing the tab or navigating away announces the owner's team to peers.
    window.addEventListener('beforeunload', () => {
      if (!isReloadNavigation() && state.roomActive && !state.explicitRoomExit) announcePlayerLeft();
    });

    window.onload = () => {
      initRoomState(false);
      let activeRoom = '';
      try { activeRoom = normalizeRoomCode(sessionStorage.getItem('fc25_active_room')); } catch (e) {}
      if (isValidRoomCode(activeRoom)) joinExistingRoom(activeRoom);
      document.getElementById('join-room-code')?.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') joinRoomById();
      });
    };

