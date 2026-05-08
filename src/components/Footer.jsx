import { Link } from 'react-router-dom'
import './Footer.css'

const LOGO = 'https://le-cdn.website-editor.net/s/42ae64c6c51b42deaa92ed40b139c583/dms3rep/multi/opt/MIO_NAABUCCO_WHITE_LOGO-dbae7412-1920w.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top container">
        <div className="footer__brand">
          <img src={LOGO} alt="Mio Naabucco" />
          <p>Authentische italienische Küche<br/>seit über 23 Jahren in Schwarzenfeld.</p>
          <div className="footer__social">
            <a href="https://www.facebook.com/profile.php/?id=186364548061324" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://g.co/kgs/Xfi9KQi" target="_blank" rel="noreferrer" aria-label="Google Maps">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            </a>
          </div>
        </div>

        <div className="footer__links">
          <h4>Navigation</h4>
          <Link to="/">Willkommen</Link>
          <Link to="/speisekarte">Speisekarte</Link>
          <Link to="/kontakt">Kontakt & Öffnungszeiten</Link>
          <Link to="/anfahrt">Anfahrt</Link>
        </div>

        <div className="footer__contact">
          <h4>Kontakt</h4>
          <p>Badeanger 18<br/>92521 Schwarzenfeld</p>
          <a href="tel:+499435307373">09435 / 30 73 73</a>
          <a href="mailto:mio-naabucco@outlook.de">mio-naabucco@outlook.de</a>
          <div className="footer__badge">
            <span>★★★★½</span>
            <span>4,6 · 574 Google-Bewertungen</span>
          </div>
        </div>
      </div>

      <div className="footer__bottom container">
        <p>© {new Date().getFullYear()} Pizzeria Mio Naabucco. Alle Rechte vorbehalten.</p>
        <Link to="/impressum">Impressum & Datenschutz</Link>
      </div>
    </footer>
  )
}
