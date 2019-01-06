import React from 'react';
import GameContainer from '../game/game_container';
import PlayerScoreContainer from '../player_score/player_score_container';
import LeaderBoardContainer from '../leaderboard/leaderboard_container';

class MainPage extends React.Component {
  
  render() {
    // debugger
    return (
      <div className="main-outer-container">
        <div className="main-inner-container">
          <div className="game-player-score-box">
            <div className="game-container"><GameContainer /></div>
            <div className="player-score-container"><PlayerScoreContainer /></div>
          </div>
          <div className="leaderboard-container">
            <LeaderBoardContainer />
          </div>
        </div>
        <footer className="footer">
          Copyright &copy; 2019
        </footer>
      </div>
    );
  }
}

export default MainPage;