import React from 'react';
import Game from '../game/game';
import PlayerScoreContainer from '../player_score/player_score_container';
import LeaderBoardContainer from '../leaderboard/leaderboard_container';

class MainPage extends React.Component {

  render() {
    return (
      <div>
        <div>
          <Game />
          <PlayerScoreContainer />
        </div>
        <div>
          <LeaderBoardContainer />
        </div>
        <footer>
          Copyright &copy; 2019
        </footer>
      </div>
    );
  }
}

export default MainPage;