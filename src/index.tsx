import ReactDOM from 'react-dom/client'
import React from 'react'

import reportWebVitals from './reportWebVitals'
import './styles/index.scss'
import App from 'routes'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

reportWebVitals()
