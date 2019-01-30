# Debugger Defense
[Play online!](https://debuggerdefense.herokuapp.com/#/)

Debugger Defense is a competitive typing game. Bugs crawl across the screen in the hopes of infiltrating your final product, so squash them by typing out their associated words! You have all the time in the world, but that's just the problem... they never stop coming! Commit yourself to the endless fight, and make your mark on the leaderboard.

Created by: [Sarah Kat Peters](https://github.com/kat-onyx), [Skylar Prill](https://github.com/L412/), [Peter Yao](https://github.com/peteryao7), [Peter Zeng](https://github.com/pzengpzeng)

<p align="center" >
 <img src="https://github.com/peteryao7/debugger-defense/blob/master/frontend/public/game/debugger-defense-gameplay.png" width="600" />
</p>

# Technologies
* MERN Stack — MongoDB, Express.js, React.js, Node.js
* HTML's Canvas Element
* JavaScript
* Redux.js

# Core Features
### Fresh Gameplay
Debugger Defense is a new game every time you play. With Object Oriented Programming, we were able to make each Bug its own class, and thus kept track of local state and initialized each Bug to a different speed, starting position, and word. Our dictionary parsing tool and progressively steepening difficulty metrics make sure that you receive a varied dose of words, both short and long!

##### Bug Constructor
```javascript
class Bug {
  constructor(difficulty, gameStartTime) {
    this.word = getRandomWord(difficulty);
    this.speed = Math.random() * (2000 - 500) + 500;
    this.radius = 45;
    this.difficulty = difficulty;
    
    let xPos, yPos;

    if (Math.random() > 0.5) {
      xPos = 5;
      yPos = Math.random() * (600 - 150);
    } else {
      xPos = Math.random() * (600 - 150);
      yPos = 5;
    }
    
    this.position = [xPos, yPos];
    
    // vectors to destination
    this.xDiff = 970 - this.position[0];
    this.yDiff = 570 - this.position[1];
  }
```

### Iteractive Typing
It's all about typing. By chaining an event listener to the window, we allow the user to type madly at their keyboard without having to worry about clicking on a specific enemy. In order to keep the gameplay smooth across browsers and machines, we relied on the window's `requestAnimationFrame()` method to properly calibrate frame rendering and avoid jerky animations or skipping gameplay.

##### Event Listener for Typing
```javascript
parse() {
    window.addEventListener("keydown", event => {
      for (let i = 0; i < this.bugs.length; i++) {
        for (let j = 0; j < this.bugs[i].word.length; j++) {
          if (this.bugs[i].word.charAt(j) === "_") {
            continue;
          } else if (event.key === this.bugs[i].word.charAt(j)) {
            this.bugs[i].word = this.bugs[i].word.replace(
              this.bugs[i].word.charAt(j),
              "_"
            );
            break;
          } else {
            break;
          }
        }
      }
    });
  }
```

##### `requestAnimationFrame()` Loop
```javascript 
animate() {
  this.detectCollision();
  this.detectFullSpelling();
  this.incrementDifficulty();
  this.draw(this.ctx);
  this.step();

  requestAnimationFrame(this.animate.bind(this));
}
```

### Leaderboard
To keep users coming back, it's important to give them benchmarks against which to compete. By using asynchronous axios requests to the back-end, and by organizing the fetched data into the appropriate order, Debugger Defense keeps a current list of the top typing athletes. It updates as soon as you finish your game, so place yourself among the greats!

##### Formatting Scores with JavaScript XML
```javascript 
formatScores() {
  let counter = 0;
  const formatted = this.props.scores.map(score => {
      counter += 1;
      return (
        <li key={score.date} className="leaderboard-single-score">
          {this.counterColor(counter)}
          <div className="score-info">
            <br/>
            {score.username} 
            <br/> 
            {score.score} points
            <br/> 
            {score.secondsElapsed} seconds
            <div/>
          </div>
        </li>
        )
  })
  
  return formatted;
}
```
