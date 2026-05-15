import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'
import logo from '../assets/logo.webp'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className={`navbar navbar--solid ${open ? 'navbar--open' : ''}`}>
      <div className="navbar__inner">

        <Link to="/" className="navbar__logo">
          <img src={logo} alt="Mio Naabucco" />
        </Link>

        <nav className={`navbar__nav ${open ? 'navbar__nav--visible' : ''}`}>
          <NavLink to="/" end>Willkommen</NavLink>
          <NavLink to="/speisekarte">Speisekarte</NavLink>
          <NavLink to="/kontakt">Kontakt</NavLink>
          <NavLink to="/anfahrt">Anfahrt</NavLink>

          <a href="tel:+499435307373" className="navbar__cta btn btn-primary">
            <span>☎ Jetzt Bestellen</span>
          </a>
        </nav>

        <button className="navbar__burger" onClick={() => setOpen(!open)}>
          ☰
        </button>

      </div>
    </header>
  )
}
