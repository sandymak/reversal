import React from 'react'
import {Link, withRouter} from 'react-router-dom'

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
const Main = (props) => {
  const {children} = props

  return (
    <div>
      <h1>Reversal</h1>
      <nav>
          <Link to="/home">Home</Link>
      </nav>
      <hr />
      {children}
    </div>
  )
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(Main)
