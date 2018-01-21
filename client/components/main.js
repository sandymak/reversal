import React, {Component} from 'react'

// Components
import GameContainer from './GameContainer.js'

class Main extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <div>
          <GameContainer />
      </div>
    )
  }
}

export default Main
