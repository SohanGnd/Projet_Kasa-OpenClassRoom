import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className="error">
      <div className="error_content">
        <h1 className="error_number">404</h1>
        <p className="error_text">
          Oups! La page que vous demandez n'existe pas.
        </p>
      </div>
      <Link to="/" className="error_link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}

export default Error
