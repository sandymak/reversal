import React, {Component} from 'react'

// Component
// import Scoreboard from './Scoreboard.js'

class Game extends Component {
  constructor() {
    super()
    this.state = {
      : 0
    }
  }

  render() {
    let {} = this.state;

    return (
      <div className="game">
        <div className="help">
          Type the reversed direction of the arrow shown on screen
        </div>
        <div className="arrow-">
        </div>
        <div className=""
        <Scoreboard currentScore={}/>
      </div>
    )
  }
}

export default Game

<div className="game">
        <div className="help">
          Pick 4 numbers that sum to the target in 15 seconds
        </div>
        <div className="target">42</div>
        <div className="challenge-numbers">
          <div className="number">8</div>
          <div className="number">5</div>
          <div className="number">12</div>
          <div className="number">13</div>
          <div className="number">5</div>
          <div className="number">16</div>
        </div>
        <div className="footer">
          <div className="timer-value">15</div>
          <button>Start</button>
        </div>
      </div>