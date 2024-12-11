import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import RoutesMainApp from './routes/RoutesMainApp'

ReactDOM.render(
  <BrowserRouter basename="/electric-cars">
    <RoutesMainApp />
  </BrowserRouter>,
  document.getElementById('root'),
)
