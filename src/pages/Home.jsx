import { Link } from 'react-router-dom'
import './Home.css'

import logo from '../assets/logo.webp'

const LOGO = logo

const GALLERY = [
  {
    url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1920&q=80&auto=format&fit=crop',
    label: 'Unsere Pizzen',
    sublabel: 'Handgemacht & frisch belegt'
  },
  {
    url: 'https://images.unsplash.com/photo-1551183053-bf91798d2d87?w=1920&q=80&auto=format&fit=crop',
    label: 'Pasta',
    sublabel: 'Al dente – nach Art des Hauses'
  },
  {
    url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1920&q=80&auto=format&fit=crop',
    label: 'Insalate',
    sublabel: 'Frische Zutaten, täglich zubereitet'
  },
  {
    url: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=1920&q=80&auto=format&fit=crop',
    label: 'Dolci',
    sublabel: 'Hausgemachtes Tiramisù & mehr'
  },
  {
    url: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?w=1920&q=80&auto=format&fit=crop',
    label: 'Meeresfrüchte',
    sublabel: 'Calamari, Scampi & Muscheln'
  },
  {
    url: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=1920&q=80&auto=format&fit=crop',
    label: 'Rigatoni',
    sublabel: 'Al Forno & alle Variationen'
  },
]

const HIGHLIGHTS = [
  { icon: '🍕', title: 'Über 37 Pizzavariationen', body: 'Von der klassischen Margherita bis zur hausgemachten Mio Naabucco — für jeden Geschmack die perfekte Pizza.' },
  { icon: '🍝', title: 'Handgefertigte Pasta', body: 'Spaghetti, Rigatoni, Tagliatelle, Gnocchi und Lasagne in unzähligen Kombinationen.' },
  { icon: '🐟', title: 'Fischspezialitäten', body: 'Frische Meeresfrüchte, Calamari vom Grill und Scampi direkt auf Ihren Tisch.' },
  { icon: '🥗', title: 'Frische Salate & Vorspeisen', body: 'Leichte Antipasti, Bruschetta und mediterrane Salate für jeden Anlass.' },
]

export default function Home() {
  return (
    <div className="home">

      {/* ── HERO ── */}
      <section className="hero noise">
        <div className="hero__bg" />
        <div className="hero__overlay" />
        <div className="hero__content">
          <img src={LOGO} alt="Mio Naabucco" className="hero__logo fade-up fade-up-1" />
          <div className="hero__divider fade-up fade-up-2">
            <span className="ornament"><span>✦</span></span>
          </div>
          <p className="label fade-up fade-up-2">Ristorante · Pizzeria · Schwarzenfeld</p>
          <h1 className="display-1 fade-up fade-up-3">
            Authentisch.<br />
            <em>Italienisch.</em><br />
            Unvergleichlich.
          </h1>
          <p className="hero__sub body-lg fade-up fade-up-4">
            Seit über 23 Jahren bereiten wir für Sie frische Pizza, Pasta und<br/>
            italienische Spezialitäten im Herzen von Schwarzenfeld zu.
          </p>
          <div className="hero__actions fade-up fade-up-5">
            <a href="tel:+499435307373" className="btn btn-primary">
              <span>☎ &nbsp;Jetzt Bestellen – 09435 307373</span>
            </a>
            <Link to="/speisekarte" className="btn">
              <span>Zur Speisekarte</span>
            </Link>
          </div>
          <div className="hero__takeaway fade-up fade-up-5">
            <span className="label">🥡 Nur Abholung · Kein Lieferservice</span>
          </div>
        </div>
        <div className="hero__scroll">
          <span />
        </div>
      </section>

      {/* ── STRIP ── */}
      <div className="strip">
        <div className="strip__inner container">
          <span>★★★★½</span>
          <span>4,6 Sterne bei Google</span>
          <span className="strip__dot">·</span>
          <span>574 Bewertungen</span>
          <span className="strip__dot">·</span>
          <span>Über 23 Jahre Erfahrung</span>
          <span className="strip__dot">·</span>
          <span>Frische Zutaten täglich</span>
        </div>
      </div>

      {/* ── INTRO ── */}
      <section className="section-lg intro container">
        <div className="intro__text">
          <p className="label">Herzlich Willkommen</p>
          <h2 className="display-2" style={{ marginTop: '.8rem' }}>
            Cucina italiana<br /><em>come a casa</em>
          </h2>
          <p className="body-lg" style={{ color: 'var(--text-muted)', marginTop: '1.5rem' }}>
            Im Pizzeria Mio Naabucco erwartet Sie ein Stück echtes Italien mitten in der Oberpfalz.
            Unser erfahrenes Team bereitet täglich frische Speisen nach traditionellen Rezepten zu —
            von handgemachter Pizza aus dem Steinofen bis zu hausgemachtem Tiramisù.
          </p>
          <p className="body-lg" style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>
            Genießen Sie unsere Spezialitäten zum Mitnehmen und bringen Sie ein Stück
            la dolce vita direkt zu sich nach Hause.
          </p>
          <div style={{ marginTop: '2.2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/speisekarte" className="btn">
              <span>Speisekarte ansehen</span>
            </Link>
            <Link to="/kontakt" className="btn" style={{ borderColor: 'var(--border-light)', color: 'var(--text-muted)' }}>
              <span>Öffnungszeiten</span>
            </Link>
          </div>
        </div>
        <div className="intro__visual">
          <div className="intro__img-stack">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80&auto=format&fit=crop"
              alt="Pizzeria Mio Naabucco"
              loading="lazy"
            />
            <div className="intro__badge">
              <span className="label">Seit</span>
              <span className="intro__badge-year">23+</span>
              <span className="label">Jahren</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS ── */}
      <section className="section highlights">
        <div className="container">
          <p className="label" style={{ textAlign: 'center' }}>Was uns auszeichnet</p>
          <h2 className="heading-1" style={{ textAlign: 'center', marginTop: '.6rem' }}>
            Unsere Küche
          </h2>
          <div className="ornament" style={{ margin: '2rem 0' }}><span>✦</span></div>
          <div className="highlights__grid">
            {HIGHLIGHTS.map((h) => (
              <div key={h.title} className="highlight-card">
                <div className="highlight-card__icon">{h.icon}</div>
                <h3 className="heading-2">{h.title}</h3>
                <p style={{ color: 'var(--text-muted)', marginTop: '.75rem' }}>{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="section gallery-section">
        <div className="container">
          <p className="label" style={{ textAlign: 'center' }}>Unsere Gerichte</p>
          <h2 className="heading-1" style={{ textAlign: 'center', marginTop: '.6rem' }}>
            Aus unserer Küche
          </h2>
          <div className="ornament" style={{ margin: '2rem 0' }}><span>✦</span></div>
        </div>
        <div className="gallery-grid">
          {GALLERY.map((item) => (
            <Link to="/speisekarte" key={item.label} className="gallery-item">
              <img src={item.url} alt={item.label} loading="lazy" />
              <div className="gallery-item__overlay">
                <h3 className="heading-2">{item.label}</h3>
                <p className="label" style={{ color: 'var(--gold-light)', marginTop: '.4rem' }}>
                  {item.sublabel}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="section testimonials">
        <div className="container">
          <div className="testimonials__inner">
            <div className="testimonials__stars">★★★★★</div>
            <blockquote className="testimonials__quote display-2">
              „Die beste Pizza weit und breit —<br/><em>ein Stammlokal seit Jahren."</em>
            </blockquote>
            <p className="label" style={{ marginTop: '1.5rem', color: 'var(--text-muted)' }}>
              Gast-Bewertung · Google Maps
            </p>
            <div className="testimonials__cta" style={{ marginTop: '2.5rem' }}>
              <a href="https://g.co/kgs/Xfi9KQi" target="_blank" rel="noreferrer" className="btn">
                <span>Alle Bewertungen lesen</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── OPENING HOURS CTA ── */}
      <section className="section hours-cta">
        <div className="container">
          <div className="hours-cta__inner">
            <div className="hours-cta__info">
              <p className="label">Öffnungszeiten</p>
              <h2 className="heading-1" style={{ marginTop: '.6rem' }}>Wann wir<br/>für Sie da sind</h2>
              <div className="hours-table">
                <div><span>Montag</span><span className="hours-table__closed">Ruhetag</span></div>
                <div><span>Di – Fr</span><span>11:30 – 14:00 · 17:00 – 22:00</span></div>
                <div><span>Samstag</span><span>11:30 – 22:30</span></div>
                <div><span>Sonntag</span><span>11:30 – 22:00</span></div>
              </div>
              <div className="hours-cta__note">
                <span>🥡</span>
                <span>Alle Speisen werden frisch für Sie zur Abholung zubereitet. Kein Lieferservice.</span>
              </div>
            </div>
            <div className="hours-cta__order">
              <p className="label">Bestellung aufgeben</p>
              <h3 className="display-2 gold-text" style={{ marginTop: '.5rem', fontSize: 'clamp(1.8rem,3.5vw,3rem)' }}>
                09435 / 30 73 73
              </h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '.8rem', fontSize: '1rem' }}>
                Rufen Sie uns an und Ihre Bestellung<br/>ist in wenigen Minuten bereit.
              </p>
              <a href="tel:+499435307373" className="btn btn-primary" style={{ marginTop: '1.8rem' }}>
                <span>Jetzt Anrufen</span>
              </a>
              <div style={{ marginTop: '1.5rem' }}>
                <a href="mailto:mio-naabucco@outlook.de" className="btn" style={{ borderColor: 'var(--border)', color: 'var(--text-muted)', fontSize: '.7rem' }}>
                  <span>mio-naabucco@outlook.de</span>
                </a>
              </div>
              <div style={{ marginTop: '2rem' }}>
                <Link to="/anfahrt" style={{ fontFamily: 'var(--font-ui)', fontSize: '.75rem', letterSpacing: '.12em', color: 'var(--gold-dim)', textDecoration: 'none', textTransform: 'uppercase' }}>
                  Anfahrt & Adresse →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}