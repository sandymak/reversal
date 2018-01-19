import React from 'react'
import {Route, Switch, Router} from 'react-router-dom'
import history from './history'
import {Main, Home} from './components'

/**
 * COMPONENT
 */
const Routes = () => {
  return (
    <Router history={history}>
      <Main>
        <Switch>
          <Route component={Home} />
        </Switch>
      </Main>
    </Router>
  )
}

export default Routes
