import React from "react";

const Splashscreen = (props) => {
  return (
    <div className="splash-screen">
      <div className="instructions">
        <h1>Time to squash some bugs!</h1>
        <p>Endless in number, the bugs will appear from the top and left side of your screen. 
          In order to stay alive, you must type out the bug's word before it reaches its destination: the _____ at the bottom-right!
          Beware, however! You have just adopted an endless fight, and the bugs don't get easier. </p>
        <p>Think you're one of the greats? Sign in to make your mark on the leaderboard!</p>
      </div>
      <div className="start-button" onClick={() => props.startPlaying()}>
         <div className="start-button-text">Click to Start</div>
      </div>
    </div >
  )
}

export default Splashscreen;