import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

const LOGO = 'https://le-cdn.website-editor.net/s/42ae64c6c51b42deaa92ed40b139c583/dms3rep/multi/opt/MIO_NAABUCCO_WHITE_LOGO-dbae7412-1920w.png'

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

        <button
          className={`navbar__burger ${open ? 'navbar__burger--active' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Menü öffnen"
        >
          <span/><span/><span/>
        </button>
      </div>
    </header>
  )
}
