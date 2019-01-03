import React from 'react';
import Game from '../game/game';

class MainPage extends React.Component {

  render() {
    return (
      <div>
        <h1>Debugger Defense</h1>
        <Game />
        <footer>
          Copyright &copy; 2019
        </footer>
      </div>
    );
  }
}

export default MainPage;