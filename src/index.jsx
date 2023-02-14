// React Framework //
import React from 'react'
import ReactDOM from 'react-dom'

// CSS //
import './utils/style/main.css'

import App from './App'
ReactDOM.render(
  <React.StrictMode>
    <div className="contenu">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)
