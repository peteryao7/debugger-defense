# Debugger Defense

[link to live site]

## Background and Overview

Debugger Defense is a typing game that incorporates gameplay elements from Typing Ninja Hunter on a game map similar to that of a tower defense game, such as Bloons Tower Defense. The game is built primarily with the MERN stack.

Enemies traverse a path through the map and have words or phrases under them; if an enemy reaches the end of the path with letters still under them, the player will lose a life. The goal of the game is to kill enemies by typing their respective phrases before they reach the other end of the map and achieve the highest score before the player runs out of lives. The game increases in difficulty with enemies that travel through the map faster and have longer phrases to type out. We are also planning to implement a global high score board where players can compete for the highest score.

## Functionality and MVP
- [ ] User authorization: sign up and log in
- [ ] Game parses user typing input and compares against bug words
- [ ] Import dictionary, create logic to randomly select words based on game-difficulty 
- [ ] Animation: map correctly displays bug movement and death (map render?)
- [ ] Gameplay: game starts, and bugs (word lengths) get progressively more difficult until end, scoring and lives system
- [ ] Saving of user’s high score to database and global high score board
- [ ] Implementation of multiplayer (websockets)
- [ ] Production README
- [ ] Deploy to Heroku

## Technologies and Technical Challenges

### Technologies:
MERN Stack:
- MongoDB
- Express
- React
- Node.js

### Other Technologies
- Websocket API (for multiplayer)

### Technical Challenges:
- Animation: bug movement
- Map creation
- Websockets/multiplayer
- Live parsing of user input
- Difficulty scaling and making sure animations align with user input (keeping track of all possible words that can be squashed)

## Things Accomplished Over the Weekend
- Preparatory MERN Twitter project
- Proposal README and workflow organization

## Group Members and Work Breakdown (per individual)
Kat Peters, Skylar Prill, Peter Yao, Peter Zeng

### Day One (Wed, Jan 2)
- Build database and file structure (Peter and Peter)
- User Authentication (Peter and Peter)
- Organize Map and Game Design (Skylar)
- Investigate (multiplayer) websockets (Kat)--Compile documentation

### Day Two
- Finalize map (Skylar)
- Asset animation (bug crawling) (Peter Z and Kat)
- Back-end Bug class (Kat and Peter Z)
- Dictionary parsing and difficulty logic (Peter Y)

### Day Three
- Develop asset animation across map (Peter Z and Kat)
- Implement user input interaction (Peter Y and Skylar)

### Day Four
- Finalize asset animation across map (Peter Z and Kat)
- Finalize user input interaction (Peter Y and Skylar)
- Achieve working gameplay (All team members)

### Day Five
- Extending game logic (scores, lives) (Peter Y)
- Implement scoreboard and ranking (Peter Z)
- Develop multiplayer functionality (Kat and Skylar)
 
### Day Six
- Finalize styling (CSS and animation art) (Peter and Peter)
- Finalize multiplayer functionality (Kat and Skylar)

### Day Seven
- Finish testing and debugging (all team members)
- Refine CSS and design (all team members)
- Polish Production README
