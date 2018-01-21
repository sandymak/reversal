import React from 'react'
import {Route, Switch, Router} from 'react-router-dom'
import history from './history'
import Main from './components/Main.js'

const Routes = () => {
  return (
    <Router history={history}>
      <div>
        <Main />
          <Switch>
          <Route path="/home" component={Main} />
          </Switch>
      </div>
    </Router>
  )
}

export default Routes
