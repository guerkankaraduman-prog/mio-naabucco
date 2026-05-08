# Pizzeria Mio Naabucco — Website

High-end Restaurant-Website gebaut mit **Vite + React**, deployed auf **Vercel**.

## Tech Stack

- ⚡ **Vite** — Build Tool
- ⚛️ **React 18** — UI Framework
- 🔀 **React Router v6** — Client-Side Routing
- 🎨 CSS Custom Properties — Design System
- ☁️ **Vercel** — Hosting & Deployment

## Lokale Entwicklung

```bash
# Dependencies installieren
npm install

# Dev-Server starten
npm run dev

# Produktions-Build
npm run build

# Build-Vorschau
npm run preview
```

## 🚀 Deployment auf Vercel (GitHub)

### Methode 1: Vercel CLI (empfohlen)

```bash
npm i -g vercel
vercel login
vercel --prod
```

### Methode 2: GitHub + Vercel (automatisch)

1. **GitHub Repo erstellen:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Mio Naabucco Website"
   git remote add origin https://github.com/DEIN-USER/mio-naabucco.git
   git push -u origin main
   ```

2. **Vercel verbinden:**
   - Gehe zu [vercel.com/new](https://vercel.com/new)
   - „Import Git Repository" → Dein GitHub Repo auswählen
   - Framework: **Vite** (wird automatisch erkannt)
   - **Deploy** klicken

3. **Fertig!** Jeder `git push` auf `main` löst automatisch ein neues Deployment aus.

### Vercel Konfiguration

Die `vercel.json` ist bereits konfiguriert für:
- SPA Routing (alle Routen → `index.html`)
- Asset Caching (1 Jahr für `/assets/`)

## Projektstruktur

```
mio-naabucco/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   └── Footer.jsx / .css
│   ├── pages/
│   │   ├── Home.jsx / .css
│   │   ├── Speisekarte.jsx / .css
│   │   ├── Kontakt.jsx / .css
│   │   ├── Anfahrt.jsx / .css
│   │   └── Impressum.jsx / .css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── vercel.json
└── package.json
```

## Seiten

| Route           | Seite                      |
|-----------------|----------------------------|
| `/`             | Startseite (Hero, Galerie) |
| `/speisekarte`  | Vollständige Speisekarte   |
| `/kontakt`      | Öffnungszeiten + Formular  |
| `/anfahrt`      | Google Maps Einbettung     |
| `/impressum`    | Impressum & Datenschutz    |

## Anpassen

- **Öffnungszeiten** → `src/pages/Kontakt.jsx` (HOURS Array)
- **Speisekarte** → `src/pages/Speisekarte.jsx` (MENU Array)  
- **Farben** → `src/index.css` (CSS Variables unter `:root`)
- **Bilder** → Unsplash-Links durch eigene ersetzen
- **Telefonnummer** → Globale Suche nach `+499435307373`
