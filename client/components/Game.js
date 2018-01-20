import React, {Component} from 'react'

// Component
import Scoreboard from './Scoreboard.js'
import Arrows from './Arrows.js'

class Game extends Component {
  constructor() {
    super()
    this.state = {
      gameStatus: 'new', // new, playing, won, lost
      remainingSeconds: 5,
      currentScore: 0
    }
  }

  componentDidMount() {
    if (this.props.autoPlay) {
      this.startGame();
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  startGame = () => {
    this.setState({ gameStatus: 'playing'}, () => {
      this.intervalId = setInterval(() => {
        this.setState(prevState => {
          const newRemainingSeconds = prevState.remainingSeconds -1;
          if (newRemainingSeconds === 0) {
            clearInterval(this.intervalId);
            return {gameStatus: 'lost', remainingSeconds: 0};
          }
          return {remainingSeconds: newRemainingSeconds}
        });
      }, 1000);
    });
  };

  render() {
    const { gameStatus, remainingSeconds } = this.state;
    return (
      <div className="game">
        <div className="help">
          Type the reversed direction of the arrow shown on screen
        </div>
        <div className="nav">
        {gameStatus === 'new' &&
          <button onClick={this.startGame}>Start</button>
        }

        {gameStatus === 'playing' &&
          <div className="timer-value">{remainingSeconds}</div>
        }

        {['won', 'lost'].includes(gameStatus) &&
          <button onClick={this.props.onPlayAgain}>
            Play Again
          </button>
        }
        <Scoreboard currentScore={this.state.currentScore}/>
        <br />
        <hr />
        <Arrows />

      </div>
      </div>
    )
  }
}

export default Game
