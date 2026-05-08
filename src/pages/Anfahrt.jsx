import './Speisekarte.css'
import './Kontakt.css'
import './Anfahrt.css'

export default function Anfahrt() {
  return (
    <div className="anfahrt">
      <section className="page-hero">
        <div className="page-hero__bg" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1501426026826-31c667bdf23d?w=1600&q=80')`
        }} />
        <div className="page-hero__overlay" />
        <div className="page-hero__content container">
          <p className="label fade-up fade-up-1">Wir sind leicht zu finden</p>
          <h1 className="display-2 fade-up fade-up-2" style={{ marginTop: '.6rem' }}>Anfahrt</h1>
        </div>
      </section>

      <section className="section container">
        <div className="anfahrt-grid">

          <div className="anfahrt-info">
            <p className="label">Unsere Adresse</p>
            <h2 className="heading-1" style={{ marginTop: '.6rem' }}>
              Badeanger 18<br/>
              <em>92521 Schwarzenfeld</em>
            </h2>

            <div className="anfahrt-details">
              <div className="anfahrt-detail-item">
                <span className="anfahrt-detail-item__icon">📍</span>
                <div>
                  <strong>Standort</strong>
                  <p>Im Herzen von Schwarzenfeld, gut erreichbar aus dem gesamten Landkreis Schwandorf.</p>
                </div>
              </div>
              <div className="anfahrt-detail-item">
                <span className="anfahrt-detail-item__icon">🚗</span>
                <div>
                  <strong>Mit dem Auto</strong>
                  <p>Über die B85 Richtung Schwarzenfeld. Parkplätze sind direkt am Restaurant verfügbar.</p>
                </div>
              </div>
              <div className="anfahrt-detail-item">
                <span className="anfahrt-detail-item__icon">🚌</span>
                <div>
                  <strong>Mit dem Bus</strong>
                  <p>Haltestelle Schwarzenfeld Mitte, wenige Gehminuten entfernt.</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="https://maps.google.com/?q=Badeanger+18,+92521+Schwarzenfeld"
                target="_blank" rel="noreferrer"
                className="btn btn-primary"
              >
                <span>In Google Maps öffnen</span>
              </a>
              <a href="tel:+499435307373" className="btn">
                <span>☎ Anrufen</span>
              </a>
            </div>
          </div>

          <div className="anfahrt-map">
            <iframe
              title="Mio Naabucco Karte"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2584.123456789!2d12.11834!3d49.40267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a085c3a1a1a1a1%3A0x1234567890abcdef!2sBadeanger%2018%2C%2092521%20Schwarzenfeld!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
