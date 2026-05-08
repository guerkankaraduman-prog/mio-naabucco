import { useState } from 'react'
import './Speisekarte.css'

const MENU = [
  {
    id: 'vorspeisen',
    label: 'Vorspeisen',
    icon: '🫒',
    items: [
      { nr: '242', name: 'Pizzabrot', desc: 'Knuspriges Brot mit Olivenöl und Kräutern' },
      { nr: '243', name: 'Bruschetta', desc: 'Geröstetes Brot mit frischen Tomaten und Basilikum' },
      { nr: '246', name: 'Honigmelone mit Parmaschinken', desc: 'Mit Weißbrot' },
      { nr: '247', name: 'Antipasti mit Weißbrot', desc: 'Auswahl mediterraner Antipasti' },
      { nr: '248', name: 'Antipasti Mix Groß mit Pizzabrot', desc: 'Für zwei Personen' },
    ]
  },
  {
    id: 'suppen',
    label: 'Suppen',
    icon: '🍲',
    items: [
      { nr: '250', name: 'Zwiebelsuppe', desc: 'Mit Croutons und Käse überbacken' },
      { nr: '252', name: 'Zuppa Pomodori', desc: 'Tomatensuppe nach italienischer Art' },
    ]
  },
  {
    id: 'pizza',
    label: 'Pizza',
    icon: '🍕',
    items: [
      { nr: '01', name: 'Margherita', desc: 'Tomatensoße, Käse' },
      { nr: '02', name: 'Schinken', desc: 'Tomatensoße, Käse, Vorderschinken' },
      { nr: '03', name: 'Salami', desc: 'Tomatensoße, Käse, Salami' },
      { nr: '04', name: 'Speciale', desc: 'Tomatensoße, Käse, Salami, Champignon, Paprika, Peperoni' },
      { nr: '05', name: 'Mix', desc: 'Tomatensoße, Käse, Salami, Vorderschinken, Champignon, Paprika, Peperoni' },
      { nr: '06', name: 'Deliziosa', desc: 'Tomatensoße, Käse, Salami, Vorderschinken, Champignon' },
      { nr: '07', name: 'Hawaii', desc: 'Tomatensoße, Käse, Vorderschinken, Ananas' },
      { nr: '08', name: 'Stagioni', desc: 'Tomatensoße, Käse, Artischocken, Champignon, Vorderschinken, Salami' },
      { nr: '09', name: 'Calzone', desc: 'Pizzatasche mit Tomatensoße, Käse, Vorderschinken, Salami, Ei, Champignon' },
      { nr: '10', name: 'Tonno', desc: 'Tomatensoße, Käse, Thunfisch, Zwiebeln' },
      { nr: '11', name: 'Pascale', desc: 'Tomatensoße, Käse, Vorderschinken, Salami, Paprika, Peperoni, Champignon, Zwiebeln' },
      { nr: '12', name: 'Americana', desc: 'Tomatensoße, Käse, Vorderschinken, Ei' },
      { nr: '13', name: 'Regina', desc: 'Tomatensoße, Käse, Vorderschinken, Champignon' },
      { nr: '14', name: 'Pisa', desc: 'Tomatensoße, Käse, Vorderschinken, Zwiebeln' },
      { nr: '15', name: 'Bologna', desc: 'Tomatensoße, Käse, Hackfleisch, Champignon' },
      { nr: '16', name: 'Memo', desc: 'Frische Tomaten, Tomatensoße, Mozzarella und Basilikum' },
      { nr: '17', name: 'Bianca', desc: 'Sahnesoße, Käse, Salami, Vorderschinken, Champignon, Ananas' },
      { nr: '18', name: 'Dolce Vita', desc: 'Tomatensoße, Käse, Vorderschinken, Salami, Sardellen, Kapern, Artischocken, Oliven' },
      { nr: '19', name: 'Al Capone', desc: 'Tomatensoße, Käse, Zwiebeln, Krabben, Thunfisch, Lachs' },
      { nr: '20', name: 'Funghi', desc: 'Tomatensoße, Käse, Champignon' },
      { nr: '21', name: 'Venezia', desc: 'Tomatensoße, Käse, Sardellen, Kapern, Oliven, Paprika, Peperoni' },
      { nr: '22', name: 'Napoli', desc: 'Tomatensoße, Käse, Sardellen, Kapern, Oliven' },
      { nr: '23', name: 'Capricciosa', desc: 'Tomatensoße, Käse, Vorderschinken, Salami, Sardellen, Zwiebeln' },
      { nr: '24', name: 'Vesuvio', desc: 'Tomatensoße, Käse, Vorderschinken, Salami, Artischocken' },
      { nr: '25', name: 'Frutti di Mare', desc: 'Tomatensoße, Käse, Meeresfrüchten' },
      { nr: '26', name: 'Parmigiane', desc: 'Hackfleischsoße, Käse, Vorderschinken, Zwiebeln' },
      { nr: '27', name: 'Marinara', desc: 'Tomatensoße, Käse, Meeresfrüchten, Artischocken, Kapern, Oliven' },
      { nr: '28', name: 'Sizilia', desc: 'Tomatensoße, Käse, Thunfisch, Zwiebeln, Sardellen, Paprika' },
      { nr: '29', name: 'Vegetaria', desc: 'Tomatensoße, Käse, Champignon, Paprika, Peperoni, Zwiebeln' },
      { nr: '30', name: 'Quattro Formaggio', desc: 'Tomatensoße, Käse, Mozzarella, Gorgonzola, Parmesan' },
      { nr: '31', name: 'Rustica', desc: 'Sahnesoße, Thunfisch, Zwiebeln, frische Paprika, frische Champignon' },
      { nr: '32', name: 'Roma', desc: 'Tomatensoße, Mozzarella, scharfe Salami, frische Champignon' },
      { nr: '33', name: 'Verdure', desc: 'Tomatensoße, Käse, Auberginen, Zucchini, Paprika, Broccoli vom Grill' },
      { nr: '34', name: 'Parma', desc: 'Tomatensoße, Mozzarella, Parmaschinken, frischer Parmesan, Ruccola' },
      { nr: '35', name: 'Milano', desc: 'Frische Tomaten, Tomatensoße, Mozzarella, scharfer Salami, Parmaschinken, Basilikum' },
      { nr: '36', name: 'Euro', desc: 'Frische Tomaten, Tomatensoße, Mozzarella, Spinat, Ei, Knoblauch' },
      { nr: '37', name: 'Mio Naabucco ★', desc: 'Tomatensoße, Parmaschinken, Mozzarella, Ruccola, Cherry Tomaten', highlight: true },
      { nr: '300', name: 'Italia', desc: 'Tomatensoße, Thunfisch, Mozzarella, frische Paprika' },
      { nr: '301', name: 'Sanremo', desc: 'Tomatensoße, Thunfisch, Mozzarella, frische Paprika, Kalamata Oliven, Basilikum' },
      { nr: '302', name: 'Diavolo', desc: 'Tomatensoße, scharfe Salami, Mozzarella, Peperoni', badge: '🌶 Scharf' },
    ]
  },
  {
    id: 'pasta',
    label: 'Nudelgerichte',
    icon: '🍝',
    items: [
      { nr: '38', name: 'Spaghetti Bolognese', desc: 'Mit Hackfleischsoße' },
      { nr: '39', name: 'Spaghetti Napoli', desc: 'Mit Tomatensoße' },
      { nr: '40', name: 'Spaghetti Carbonara', desc: 'Sahnesoße, Vorderschinken, Ei' },
      { nr: '41', name: 'Spaghetti Frutti di Mare', desc: 'Tomatensoße, Meeresfrüchten' },
      { nr: '42', name: 'Spaghetti Roma', desc: 'Tomatensoße, Champignon, Vorderschinken, Erbsen' },
      { nr: '43', name: 'Spaghetti alla Chef', desc: 'Frische Tomaten, Krabben, Weißweinsoße' },
      { nr: '44', name: 'Spaghetti al Olio', desc: 'Knoblauch, Peperoni' },
      { nr: '45', name: 'Rigatoni Bolognese', desc: 'Mit Hackfleischsoße' },
      { nr: '46', name: 'Rigatoni Napoli', desc: 'Mit Tomatensoße' },
      { nr: '47', name: 'Rigatoni Mio Naabucco ★', desc: 'Tomatensoße, Thunfisch, Kapern, Oliven, Zwiebeln', highlight: true },
      { nr: '48', name: 'Rigatoni al Forno', desc: 'Mit Hackfleischsoße und Käse überbacken' },
      { nr: '49', name: 'Rigatoni alla Chef', desc: 'Frische Tomaten, Knoblauch, Parmesan, Ruccola' },
      { nr: '56', name: 'Lasagne', desc: 'Mit Gemüse, Sahne und Käse überbacken' },
      { nr: '57', name: 'Lasagne al Forno', desc: 'Mit Hackfleischsoße und Käse überbacken' },
      { nr: '58', name: 'Lasagne Mio Naabucco ★', desc: 'Mit Schinken, Erbsen, Champignon, Sahnesoße', highlight: true },
      { nr: '59', name: 'Canneloni al Forno', desc: 'Mit Hackfleischsoße und Käse überbacken' },
      { nr: '61', name: 'Gnocchi alla Chef', desc: 'Mit Mozzarella, Tomatensoße' },
      { nr: '62', name: 'Gnocchi Gorgonzola', desc: 'Mit Gorgonzola, Sahnesoße' },
      { nr: '63', name: 'Gnocchi al Forno', desc: 'Mit Hackfleischsoße und Käse überbacken' },
      { nr: '64', name: 'Tagliatelle Bolognese', desc: 'Mit Hackfleischsoße' },
      { nr: '65', name: 'Tagliatelle alla Emiliana', desc: 'Vorderschinken, Erbsen, Champignon, Sahne- oder Hackfleischsoße' },
      { nr: '66', name: 'Tagliatelle alla Chef', desc: 'Tomatensoße, Meeresfrüchten' },
      { nr: '67', name: 'Tagliatelle al Salmone', desc: 'Sahne und Tomatensoße, Lachs' },
      { nr: '68', name: 'Tris Italia', desc: 'Gnocchi + Tagliatelle + Rigatoni mit Schinken, Erbsen, Champignon, Sahne- oder Hackfleischsoße' },
      { nr: '320', name: 'Penne Bolognese', desc: 'Mit Hackfleischsoße' },
      { nr: '321', name: 'Penne Napoli', desc: 'Mit Tomatensoße' },
      { nr: '322', name: 'Penne al Forno', desc: 'Mit Hackfleischsoße und Käse überbacken' },
      { nr: '323', name: 'Penne Arrabiata', desc: 'Tomatensoße, Peperoni, Parmesan – scharf', badge: '🌶 Scharf' },
      { nr: '324', name: 'Penne Roma', desc: 'Tomatensoße, Erbsen, Schinken, Champignon, Sahne' },
      { nr: '325', name: 'Penne alla Chef', desc: 'Frische Tomaten, Knoblauch, Parmesan, Ruccola' },
    ]
  },
  {
    id: 'fleisch-schwein',
    label: 'Fleisch (Schwein)',
    icon: '🥩',
    items: [
      { nr: '69', name: 'Cotelette Milanese', desc: 'Schnitzel paniert mit Pommes oder Kroketten und Salat' },
      { nr: '70', name: 'Cotelette Bolognese', desc: 'Schnitzel paniert mit Tomatensoße und Käse überbacken, Pommes oder Kroketten und Salat' },
      { nr: '71', name: 'Scaloppine al Vino Bianco', desc: 'Schnitzel in Weißweinsoße mit Pommes oder Kroketten und Salat' },
      { nr: '72', name: 'Scaloppine al Funghi', desc: 'Schnitzel mit Champignon, Pommes oder Kroketten und Salat' },
      { nr: '74', name: 'Saltimbocca Mozzarella', desc: 'Schnitzel mit Salbeisoße, Mozzarella überbacken, Pommes oder Kroketten und Salat' },
    ]
  },
  {
    id: 'fleisch-rind',
    label: 'Fleisch (Rind)',
    icon: '🥩',
    items: [
      { nr: '78', name: 'Bistecca alla Griglia', desc: 'Roastbeef vom Grill mit Pommes oder Kroketten und Salat' },
      { nr: '79', name: 'Bistecca alla Madagascar', desc: 'Roastbeef in Pfeffersoße mit Pommes oder Kroketten und Salat' },
      { nr: '80', name: 'Bistecca al Funghi', desc: 'Roastbeef in Champignonsoße mit Pommes oder Kroketten und Salat' },
      { nr: '81', name: 'Bistecca alla Scipolla', desc: 'Roastbeef mit gerösteten Zwiebeln, Pommes oder Kroketten und Salat' },
    ]
  },
  {
    id: 'fleisch-pute',
    label: 'Fleisch (Pute)',
    icon: '🦃',
    items: [
      { nr: '82', name: 'Putenschnitzel Wiener Art', desc: 'Paniertes Schnitzel mit Pommes oder Kroketten und Salat' },
      { nr: '83', name: 'Putenschnitzel alla Madagascar', desc: 'In Pfeffersoße mit Pommes oder Kroketten und Salat' },
      { nr: '84', name: 'Putensteak vom Grill', desc: 'Mit Pommes oder Kroketten und Salat' },
      { nr: '85', name: 'Putenschnitzel Jägerart', desc: 'In Champignonsoße mit Pommes oder Kroketten und Salat' },
    ]
  },
  {
    id: 'fisch',
    label: 'Fischspezialitäten',
    icon: '🦑',
    items: [
      { nr: '88', name: 'Frische Muscheln', desc: 'Mit Tomaten- oder Weißweinsoße und Pizzabrot' },
      { nr: '89', name: 'Calamari Matrosenart', desc: 'Tomatensoße, Kapern, Oliven, Zwiebeln, Spaghetti – scharf', badge: '🌶 Scharf' },
      { nr: '90', name: 'Calamari Gebacken', desc: 'Mit Cocktailsoße und Salat' },
      { nr: '91', name: 'Calamari vom Grill', desc: 'Gegrillte Calamari mit Spaghetti al olio oder Pizzabrot, mit Salat' },
      { nr: '92', name: 'Scampi vom Grill', desc: 'Mit Cocktailsoße, Pizzabrot und Salat' },
      { nr: '93', name: 'Scampi Mio Naabucco ★', desc: 'Tomatensoße, Kapern, Oliven, Zwiebeln, Spaghetti – scharf', highlight: true, badge: '🌶 Scharf' },
      { nr: '94', name: 'Scampi alla Chef', desc: 'Gegrillte Scampi, Spaghetti al olio und Salat' },
      { nr: '95', name: 'Fischplatte', desc: 'Mit gegrillten Scampi, Calamari, Pizzabrot und Salat oder Pommes und Salat' },
    ]
  },
  {
    id: 'salate',
    label: 'Salate',
    icon: '🥗',
    items: [
      { nr: '96', name: 'Beilagensalat', desc: 'Kleiner gemischter Salat' },
      { nr: '97', name: 'Bauernsalat', desc: 'Grüner Salat, Tomaten, Gurken, Fetakäse, Oliven, Peperoni, Zwiebeln, Paprika' },
      { nr: '98', name: 'Insalata Tonno', desc: 'Grüner Salat, Thunfisch, Zwiebeln, Mais' },
      { nr: '99', name: 'Insalata Venezia', desc: 'Grüner Salat, Gurken, Ei, Thunfisch, Paprika, Peperoni, Mais, Artischocken, Käse, Zwiebeln' },
      { nr: '100', name: 'Insalata Mista', desc: 'Grüner Salat, Tomaten, Gurken, Paprika, Ei, Vorderschinken' },
      { nr: '101', name: 'Insalata Italia', desc: 'Grüner Salat, Tomaten, Gurken, Paprika, Vorderschinken, Peperoni, Thunfisch, Lachs, Zwiebeln, Ei' },
      { nr: '102', name: 'Insalata Pomodore', desc: 'Tomaten, Zwiebeln, Mozzarella' },
      { nr: '103', name: 'Insalata Chef', desc: 'Grüner Salat, Tomaten, Gurken, Ei, Mozzarella, Paprika, Peperoni, Zwiebeln, Putenstreifen' },
      { nr: '104', name: 'Insalata Hawaii', desc: 'Grüner Salat, Tomaten, Gurken, Vorderschinken, Ei, Käse, Ananas' },
      { nr: '105', name: 'Insalata Milano', desc: 'Grüner Salat, Tomaten, Gurken, Parmesankäse, Ruccola' },
    ]
  },
  {
    id: 'kinder',
    label: 'Für unsere Kleinen',
    icon: '👶',
    items: [
      { nr: '86', name: 'Spaghetti Bolognese', desc: 'Mit Hackfleischsoße – Kinderportion' },
      { nr: '87', name: 'Rigatoni Napoli', desc: 'Mit Tomatensoße – Kinderportion' },
    ]
  },
  {
    id: 'dessert',
    label: 'Nachspeisen',
    icon: '🍮',
    items: [
      { nr: '109', name: 'Crêpes Mio Naabucco ★', desc: 'Mit Kirschwasser, Kirschen und Sahne', highlight: true },
      { nr: '110', name: 'Crêpes Suzette', desc: 'Mit Orangensaft, Grand Marnier und Sahne' },
      { nr: '111', name: 'Tiramisù', desc: 'Hausgemacht nach original-italienischem Rezept' },
    ]
  },
]

export default function Speisekarte() {
  const [active, setActive] = useState('pizza')

  const current = MENU.find(c => c.id === active)

  return (
    <div className="speisekarte">

      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__bg" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1600&q=80')`
        }} />
        <div className="page-hero__overlay" />
        <div className="page-hero__content container">
          <p className="label fade-up fade-up-1">Ristorante · Pizzeria</p>
          <h1 className="display-2 fade-up fade-up-2" style={{ marginTop: '.6rem' }}>Speisekarte</h1>
          <div className="ornament fade-up fade-up-3" style={{ maxWidth: 320, margin: '1.5rem auto 0' }}><span>✦</span></div>
          <p className="fade-up fade-up-3" style={{ color: 'var(--text-muted)', marginTop: '1rem', fontFamily: 'var(--font-ui)', fontSize: '.8rem', letterSpacing: '.1em' }}>
            Alle Speisen zur Abholung · Kein Lieferservice
          </p>
        </div>
      </section>

      <section className="menu-section">
        <div className="container">

          {/* Category Tabs */}
          <div className="menu-tabs">
            {MENU.map(cat => (
              <button
                key={cat.id}
                className={`menu-tab ${active === cat.id ? 'menu-tab--active' : ''}`}
                onClick={() => setActive(cat.id)}
              >
                <span className="menu-tab__icon">{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="menu-list">
            <div className="menu-list__header">
              <span className="menu-list__icon">{current.icon}</span>
              <h2 className="heading-1">{current.label}</h2>
            </div>
            <div className="menu-items">
              {current.items.map(item => (
                <div key={item.nr} className={`menu-item ${item.highlight ? 'menu-item--highlight' : ''}`}>
                  <div className="menu-item__nr">{item.nr}</div>
                  <div className="menu-item__info">
                    <div className="menu-item__name">
                      {item.name}
                      {item.badge && <span className="menu-item__badge">{item.badge}</span>}
                    </div>
                    <div className="menu-item__desc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="menu-cta">
            <div className="ornament" style={{ marginBottom: '2.5rem' }}><span>✦</span></div>
            <p className="label" style={{ textAlign: 'center' }}>Bestellung aufgeben</p>
            <h3 className="heading-1 gold-text" style={{ textAlign: 'center', marginTop: '.5rem' }}>
              09435 / 30 73 73
            </h3>
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginTop: '.8rem', fontFamily: 'var(--font-ui)', fontSize: '.85rem' }}>
              Rufen Sie uns an — Ihre Bestellung wird frisch für Sie zubereitet.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.8rem' }}>
              <a href="tel:+499435307373" className="btn btn-primary">
                <span>Jetzt Anrufen & Bestellen</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
