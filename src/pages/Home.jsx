// ✅ OPTIMIERT: react-router-dom → next/link | <img> → next/image
import Link from 'next/link'          // ← FIX #1: war 'react-router-dom'
import Image from 'next/image'        // ← FIX #2: neu – für optimierte Bilder
import './Home.css'

import logo from '../assets/images/mio-logo.webp'

const LOGO = logo

const GALLERY = [
  {
    url: 'https://le-cdn.website-editor.net/s/42ae64c6c51b42deaa92ed40b139c583/dms3rep/multi/opt/IMG_3101-51edb471-1920w.png',
    label: 'Unsere Pizzen',
    sublabel: 'Handgemacht & frisch belegt'
  },
  {
    url: 'https://le-cdn.website-editor.net/s/42ae64c6c51b42deaa92ed40b139c583/dms3rep/multi/opt/spaghetti+bolognese-1920w.png',
    label: 'Pasta',
    sublabel: 'Al dente – nach Art des Hauses'
  },
  {
    url: 'https://le-cdn.website-editor.net/s/42ae64c6c51b42deaa92ed40b139c583/dms3rep/multi/opt/Salat_mio_naabucco-1920w.png',
    label: 'Insalate',
    sublabel: 'Frische Zutaten, täglich zubereitet'
  },
  {
    url: 'https://le-cdn.website-editor.net/s/42ae64c6c51b42deaa92ed40b139c583/dms3rep/multi/opt/TIRAMISU+HAUSGEMACHT-011d53b1-1920w.png',
    label: 'Dolci',
    sublabel: 'Hausgemachtes Tiramisù & mehr'
  },
  {
    url: 'https://le-cdn.website-editor.net/s/42ae64c6c51b42deaa92ed40b139c583/dms3rep/multi/opt/Calamari_Naabucco-1920w.png',
    label: 'Meeresfrüchte',
    sublabel: 'Calamari, Scampi & Muscheln'
  },
  {
    url: 'https://le-cdn.website-editor.net/s/42ae64c6c51b42deaa92ed40b139c583/dms3rep/multi/opt/Mio_Naabucco_Rigatoni-1920w.png',
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
          {/* ✅ FIX #3: <img> → <Image> mit statischem Import (kein width/height nötig) */}
          <Image
            src={LOGO}
            alt="Mio Naabucco"
            className="hero__logo fade-up fade-up-1"
            priority  // Logo ist LCP-Element → sofort laden
          />
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
            {/* ✅ FIX #4: to="..." → href="..." (next/link API) */}
            <Link href="/speisekarte" className="btn">
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
            <Link href="/speisekarte" className="btn">
              <span>Speisekarte ansehen</span>
            </Link>
            <Link href="/kontakt" className="btn" style={{ borderColor: 'var(--border-light)', color: 'var(--text-muted)' }}>
              <span>Öffnungszeiten</span>
            </Link>
          </div>
        </div>
        <div className="intro__visual">
          <div className="intro__img-stack">
            {/* ✅ FIX #5: <img> → <Image> mit fill für responsive Darstellung */}
            <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3' }}>
              <Image
                src="https://le-cdn.website-editor.net/s/42ae64c6c51b42deaa92ed40b139c583/dms3rep/multi/opt/007-f7db0a51-1920w.png"
                alt="Pizzeria Mio Naabucco"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
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
            <Link href="/speisekarte" key={item.label} className="gallery-item">
              {/* ✅ FIX #6: Alle Gallery-Bilder mit next/image + lazy loading */}
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <Image
                  src={item.url}
                  alt={item.label}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
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
                <Link href="/anfahrt" style={{ fontFamily: 'var(--font-ui)', fontSize: '.75rem', letterSpacing: '.12em', color: 'var(--gold-dim)', textDecoration: 'none', textTransform: 'uppercase' }}>
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
