# Solartechnik Neuhaus: Heizung (Vue 3 + Vite)

Redesign-Entwurf der Seite «Heizung» als Vue-3-Projekt.

## In GitHub Codespaces starten

1. Ordner in ein neues GitHub-Repository hochladen (alle Dateien, inklusive `.devcontainer`).
2. Im Repository: **Code → Codespaces → Create codespace on main**.
3. Der Codespace installiert alles selbst (`npm install`) und startet den Dev-Server.
   Die Vorschau öffnet sich automatisch, sonst im Tab **Ports** auf Port 5173 klicken.

Manuell im Terminal:

```bash
npm install
npm run dev      # Entwicklung
npm run build    # Produktions-Build nach dist/
npm run preview  # Build ansehen
```

## Struktur

```
src/
  data/content.js     Texte, Kontaktdaten, Menü, Heizsysteme, Ablauf (hier anpassen)
  styles/main.css     Gesamtes Design (Farben als CSS-Variablen in :root)
  components/         Header, Hero, Systeme, Ablauf, Solar, Referenzen, Offerte, Footer
```

## Noch offen

- **Logo:** in `src/components/SiteHeader.vue` den Platzhalter (`<i>` + Text in `.brand`)
  durch das Logo ersetzen. Datei nach `public/` legen, z. B. `public/logo.png`.
- **Fotos:** Platzhalter in `SystemsSection.vue` (Klasse `.pic`) und `ReferencesSection.vue`.
- **Formular:** `submit()` in `OfferSection.vue` sendet noch nichts. Anbindung an einen
  Formular-Dienst oder ein Backend fehlt.
- **Links:** Menü, Datenschutz und Barrierefreiheit zeigen noch auf `#`.
- **Förderung:** Text im Ablauf bewusst allgemein. Konkrete Angaben von der Firma bestätigen lassen.
