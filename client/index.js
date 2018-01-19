import React from 'react'
import ReactDOM from 'react-dom'

import Routes from './routes'

// establishes socket connection
import './socket'

ReactDOM.render(
    <Routes />,
  document.getElementById('app')
)
