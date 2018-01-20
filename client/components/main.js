import React, {Component} from 'react'

// Component
import Scoreboard from './Scoreboard.js'
import Arrows from './Arrows.js'

class Main extends Component {
  constructor() {
    super()
    this.state = {
      currentScore: '0'
    }
  }

  render() {
    let {currentScore} = this.state;

    return (
      <div>
        <h1>Reversal</h1>
        <Scoreboard currentScore={currentScore} />
        <br />
        <Arrows />
      </div>
    )
  }
}

export default Main
