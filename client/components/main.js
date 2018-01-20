import React, {Component} from 'react'

// Component
import Scoreboard from './Scoreboard.js'
import Arrows from './Arrows.js'
import GameContainer from './GameContainer.js'

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
          <GameContainer currentScore={currentScore} />
      </div>
    )
  }
}

export default Main
