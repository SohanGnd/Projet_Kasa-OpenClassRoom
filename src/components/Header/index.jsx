import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.png'

function Header() {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <img src={Logo} alt="Logo" className="navbar_img" />
      </NavLink>
      <div className="navbar_links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'navbar_links--active' : 'navbar_links--inactive'
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/About"
          className={({ isActive }) =>
            isActive ? 'navbar_links--active' : 'navbar_links--inactive'
          }
        >
          A propos
        </NavLink>
      </div>
    </nav>
  )
}

export default Header
