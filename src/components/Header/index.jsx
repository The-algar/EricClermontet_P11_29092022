import { Link, NavLink } from 'react-router-dom'
import KasaLogo from '../../assets/home-logo.svg'
import './Header.css'

function Header() {
  return (
    <nav className="navContainer" >
      <Link to="/">
        <img className="homeLogo" src={KasaLogo} alt=""/>
      </Link>
      <div className="navLink">
        <NavLink exact path="true" to="/" activeClassName="isActive">
          Accueil</NavLink>
        <NavLink to="/About" activeClassName="isActive">A Propos</NavLink>
      </div>
    </nav>
  )
}

export default Header