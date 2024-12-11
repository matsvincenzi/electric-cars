import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import RoutesMainApp from './routes/routes.jsx'

import GlobalStyled from './styles/globalstyle.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyled />
      <RoutesMainApp />
    </BrowserRouter>
  </React.StrictMode>,
)
