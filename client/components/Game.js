import React, {Component} from 'react'

// Redux Store
import { connect } from 'react-redux';
import { setArrDir, setKeyStroke } from '../store/reducers/arrowInfo'
import { addScore, minusScore } from '../store/reducers/scoreboard'

// Component
import Scoreboard from './Scoreboard.js'
import Arrows from './Arrows.js'

// utils
import { startGame } from '../utils'
import { regularMode} from '../store/utils/gameplay';


// keyStroke directions
const directions = {
  '37': 'left',
  '38': 'top',
  '39': 'right',
  '40': 'bottom'
}

class Game extends Component {
  constructor() {
    super()
    this.state = {}
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    if (this.props.autoPlay) {
      startGame();
    }
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
    document.removeEventListener('keydown', this.handleKeyDown.bind(this));
  }

  handleKeyDown = (event) => {
    const {gameMode, keyStroke} = this.props;
    console.log(`You pressed ${directions[event.keyCode]}`);

    switch (gameMode) {
      case 'regular':
        return regularMode(event, keyStroke)

      default:
        return regularMode(event, keyStroke)
    }
  }

  render() {
    // const { gameStatus, remainingSeconds} = this.state;
    const { arrowDir, arrowClr, score } = this.props;

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
        <Scoreboard currentScore={score}/>
        <br />
        <hr />
        <br />
        <Arrows arrowDir={arrowDir} arrowClr={arrowClr} />

      </div>
      </div>
    )
  }
}

function mapStateToProps (storeState) {
  return {
    arrowDir: storeState.arrowInfo.arrowDir,
    arrowClr: storeState.arrowInfo.arrowClr,
    keyStroke: storeState.arrowInfo.keyStroke,
    gameMode: storeState.arrowInfo.gameMode,
    score: storeState.scoreboard.score,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    updateArrDir: () => dispatch(setArrDir()),
    updateKeyStroke: () => dispatch(setKeyStroke()),
    increaseScore: () => dispatch(addScore()),
    decreaseScore: () => dispatch(minusScore()),
  }
}

const ConnectedGame = connect(mapStateToProps, mapDispatchToProps)(Game)

export default ConnectedGame
