import React from 'react';
import GameContainer from '../game/game_container';
import LeaderBoardContainer from '../leaderboard/leaderboard_container';

class MainPage extends React.Component {
  
  render() {
    return (
      <div className="main-outer-container">
        <div className="game-box">
          <GameContainer />
        </div>

          <LeaderBoardContainer />
      </div>
    );
  }
}

export default MainPage;