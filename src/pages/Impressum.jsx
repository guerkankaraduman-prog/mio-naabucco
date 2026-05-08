import './Speisekarte.css'
import './Impressum.css'

export default function Impressum() {
  return (
    <div className="impressum">
      <section className="page-hero">
        <div className="page-hero__bg" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=1200&q=80')`
        }} />
        <div className="page-hero__overlay" />
        <div className="page-hero__content container">
          <h1 className="display-2 fade-up fade-up-1">Impressum &<br/><em>Datenschutz</em></h1>
        </div>
      </section>

      <section className="section container">
        <div className="impressum-content">

          <div className="impressum-block">
            <h2 className="heading-2">Impressum</h2>
            <div className="ornament" style={{ margin: '1rem 0 1.5rem' }}><span>✦</span></div>
            <p><strong>Pizzeria Mio Naabucco</strong></p>
            <p>Badeanger 18<br/>92521 Schwarzenfeld<br/>Deutschland</p>
            <p style={{ marginTop: '1rem' }}>
              <strong>Telefon:</strong> <a href="tel:+499435307373">09435 / 30 73 73</a><br/>
              <strong>E-Mail:</strong> <a href="mailto:mio-naabucco@outlook.de">mio-naabucco@outlook.de</a>
            </p>
          </div>

          <div className="impressum-block">
            <h2 className="heading-2">Haftungsausschluss</h2>
            <div className="ornament" style={{ margin: '1rem 0 1.5rem' }}><span>✦</span></div>
            <p>
              Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
              jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG
              für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
            </p>
          </div>

          <div className="impressum-block">
            <h2 className="heading-2">Datenschutzerklärung</h2>
            <div className="ornament" style={{ margin: '1rem 0 1.5rem' }}><span>✦</span></div>
            <h3 className="impressum-h3">1. Datenschutz auf einen Blick</h3>
            <p>
              Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der
              Verarbeitung von personenbezogenen Daten (nachfolgend kurz „Daten") innerhalb
              unseres Onlineangebotes und der mit ihm verbundenen Webseiten, Funktionen und
              Inhalte sowie externen Onlinepräsenzen auf.
            </p>

            <h3 className="impressum-h3" style={{ marginTop: '1.5rem' }}>2. Verantwortlicher</h3>
            <p>
              Verantwortlich im Sinne der DSGVO ist:<br/>
              Pizzeria Mio Naabucco · Badeanger 18 · 92521 Schwarzenfeld<br/>
              E-Mail: mio-naabucco@outlook.de
            </p>

            <h3 className="impressum-h3" style={{ marginTop: '1.5rem' }}>3. Cookies</h3>
            <p>
              Diese Website verwendet keine Tracking-Cookies. Es werden ausschließlich technisch
              notwendige Cookies eingesetzt, die für den Betrieb der Website erforderlich sind.
            </p>

            <h3 className="impressum-h3" style={{ marginTop: '1.5rem' }}>4. Ihre Rechte</h3>
            <p>
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
              personenbezogenen Daten sowie das Recht auf Berichtigung, Sperrung oder Löschung
              dieser Daten. Wenden Sie sich dazu an die oben genannte E-Mail-Adresse.
            </p>

            <h3 className="impressum-h3" style={{ marginTop: '1.5rem' }}>5. Google Maps</h3>
            <p>
              Diese Seite nutzt über eine API den Kartendienst Google Maps von Google LLC.
              Anbieter ist Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.
              Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung
              von Google: <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">policies.google.com/privacy</a>
            </p>
          </div>

        </div>
      </section>
    </div>
  )
}
