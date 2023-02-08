import { React } from 'react'
import logoFooter from '../../assets/logofooter.png'

function Footer() {
  const effectiveYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <img src={logoFooter} alt="" className="footer_logo" />
      <p className="footer_text">
        &copy;
        {effectiveYear} Kasa. All rights reserved A
      </p>
    </footer>
  )
}

export default Footer
