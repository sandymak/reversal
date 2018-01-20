import React, {Component} from 'react'

import Game from './Game';

class GameContainer extends Component {
  constructor() {
    super()
    this.state = {
      gameId: 1,
    };
  }

  resetGame = () =>
    this.setState(prevState => ({
      gameId: prevState.gameId + 1,
    }));

  render() {
    return (
      <Game
        key={this.state.gameId}
        autoPlay={this.state.gameId > 1}
        onPlayAgain={this.resetGame}
      />
    );
  }
}

  export default GameContainer
