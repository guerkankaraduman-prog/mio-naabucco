import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'
import logo from '../assets/logo.webp'

const LOGO = logo

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  const isHome = pathname === '/'

  return (
    <header className={`navbar ${scrolled || !isHome ? 'navbar--solid' : ''} ${open ? 'navbar--open' : ''}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">
          <img src={LOGO} alt="Mio Naabucco" />
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
      </div>
    </header>
  )
}
