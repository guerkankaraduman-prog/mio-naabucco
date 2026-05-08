import { useState } from 'react'
import './Speisekarte.css'
import './Kontakt.css'

const HOURS = [
  { day: 'Montag',   hours: null },
  { day: 'Dienstag', hours: ['11:30 – 14:00', '17:00 – 22:00'] },
  { day: 'Mittwoch', hours: ['11:30 – 14:00', '17:00 – 22:00'] },
  { day: 'Donnerstag', hours: ['11:30 – 14:00', '17:00 – 22:00'] },
  { day: 'Freitag',  hours: ['11:30 – 14:00', '17:00 – 22:00'] },
  { day: 'Samstag',  hours: ['11:30 – 22:30'] },
  { day: 'Sonntag',  hours: ['11:30 – 22:00'] },
]

export default function Kontakt() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="kontakt">
      <section className="page-hero">
        <div className="page-hero__bg" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80')`
        }} />
        <div className="page-hero__overlay" />
        <div className="page-hero__content container">
          <p className="label fade-up fade-up-1">Wir freuen uns auf Sie</p>
          <h1 className="display-2 fade-up fade-up-2" style={{ marginTop: '.6rem' }}>
            Kontakt &<br/><em>Öffnungszeiten</em>
          </h1>
        </div>
      </section>

      <section className="section kontakt-section container">
        <div className="kontakt-grid">

          {/* Left: Info + Hours */}
          <div className="kontakt-info">
            <p className="label">Adresse</p>
            <div className="kontakt-card">
              <div className="kontakt-card__row">
                <span className="kontakt-card__icon">📍</span>
                <div>
                  <strong>Pizzeria Mio Naabucco</strong>
                  <p>Badeanger 18<br/>92521 Schwarzenfeld</p>
                </div>
              </div>
              <div className="kontakt-card__row">
                <span className="kontakt-card__icon">☎</span>
                <div>
                  <strong>Telefon</strong>
                  <p><a href="tel:+499435307373">09435 / 30 73 73</a></p>
                </div>
              </div>
              <div className="kontakt-card__row">
                <span className="kontakt-card__icon">✉</span>
                <div>
                  <strong>E-Mail</strong>
                  <p><a href="mailto:mio-naabucco@outlook.de">mio-naabucco@outlook.de</a></p>
                </div>
              </div>
            </div>

            <p className="label" style={{ marginTop: '2.5rem' }}>Öffnungszeiten</p>
            <div className="hours-full">
              {HOURS.map(({ day, hours }) => (
                <div key={day} className={`hours-row ${!hours ? 'hours-row--closed' : ''}`}>
                  <span className="hours-row__day">{day}</span>
                  {hours
                    ? <span className="hours-row__times">{hours.join(' · ')}</span>
                    : <span className="hours-row__closed">Ruhetag</span>
                  }
                </div>
              ))}
            </div>

            <div className="takeaway-notice">
              <span>🥡</span>
              <div>
                <strong>Nur Abholung</strong>
                <p>Wir bieten keinen Lieferservice an. Alle Bestellungen können direkt bei uns abgeholt werden.</p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="kontakt-form-col">
            <p className="label">Kontakt aufnehmen</p>
            <h2 className="heading-1" style={{ marginTop: '.6rem' }}>Schreiben<br/>Sie uns</h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '1rem', marginBottom: '2rem' }}>
              Bei Fragen zu Reservierungen, Bestellungen oder besonderen Anlässen
              stehen wir Ihnen gerne zur Verfügung.
            </p>

            {sent ? (
              <div className="form-success">
                <span className="form-success__icon">✓</span>
                <h3 className="heading-2">Vielen Dank!</h3>
                <p style={{ color: 'var(--text-muted)', marginTop: '.75rem' }}>
                  Ihre Nachricht wurde versendet. Wir melden uns so schnell wie möglich.
                </p>
                <button className="btn" style={{ marginTop: '1.5rem' }} onClick={() => setSent(false)}>
                  <span>Neue Nachricht</span>
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Ihr Name</label>
                  <input
                    type="text" name="name" value={form.name}
                    onChange={handleChange} required placeholder="Max Mustermann"
                  />
                </div>
                <div className="form-group">
                  <label>E-Mail-Adresse</label>
                  <input
                    type="email" name="email" value={form.email}
                    onChange={handleChange} required placeholder="max@beispiel.de"
                  />
                </div>
                <div className="form-group">
                  <label>Ihre Nachricht</label>
                  <textarea
                    name="message" value={form.message}
                    onChange={handleChange} required rows={5}
                    placeholder="Wie können wir Ihnen helfen?"
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  <span>Nachricht senden</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
