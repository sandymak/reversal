import React, {Component} from 'react'

// Redux Store
import { connect } from 'react-redux';

// Component
import Scoreboard from './Scoreboard.js'
import Arrows from './Arrows.js'

// utils
import { regularMode } from '../store/utils/gameplay';
import { startGame } from '../store/utils/timer';


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
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  componentWillUnmount() {
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
    const { arrowDir, arrowClr, score, gameStatus, remainingSeconds } = this.props;

    return (
      <div className="game">
        <div className="help">
          Type the direction of the arrow shown on screen
        </div>
        <div className="nav">
        {gameStatus && gameStatus === 'new' &&
          <button onClick={startGame}>Start</button>
        }

        {remainingSeconds && gameStatus === 'playing' &&
          <div className="timer-value">{remainingSeconds}</div>
        }

        {remainingSeconds === 0 && gameStatus === 'game-over' &&
          <div
          className = "game-over"
          style={{width: '100', height: '100'}}>
          {`Your score is ${score}`}
        </div>}

        {['game-over', 'lost'].includes(gameStatus) &&
          <button onClick={startGame}>
            Play Again
          </button>
        }
        <br />
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
    remainingSeconds: storeState.countDown.remainingSeconds,
    gameStatus: storeState.countDown.gameStatus,
  }
}

const ConnectedGame = connect(mapStateToProps)(Game)

export default ConnectedGame
