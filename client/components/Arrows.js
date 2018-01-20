import React, {Component} from 'react'


class Arrows extends Component {
  constructor() {
    super()
    this.state = {
      currentScore: 0
    }
  }

  render() {
    let {currentScore} = this.state;

    return (
      <div>
        <div>
          <a href="#">
            <span className="left" />
          </a>
        </div>

        <div>
          <a href="#">
            <span className="top" />
          </a>
        </div>

        <div>
          <a href="#">
            <span className="bottom" />
          </a>
        </div>

        <div>
          <a href="#">
            <span className="right" />
          </a>
        </div>
      </div>
    )
  }
}

export default Arrows
