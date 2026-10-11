# Regole di Progetto: United Delivery Riders of Metro Manila (UDRMM)

## 🚀 Push Automatico su GitHub Obbligatorio (Auto-Deploy)
Ad ogni singola modifica apportata ai file del sito web (`index.html`, `style.css`, `app.js`, `assets/`, o qualsiasi altro file del repository):
1. **Commit automatico**: Esegui `git add -A && git commit -m "<descrizione delle modifiche>"`
2. **Push automatico**: Esegui immediatamente `git push origin main` (usando `BypassSandbox: true` per l'accesso SSH di rete).
3. **Verifica**: Assicurati che il working tree sia pulito e che tutte le modifiche siano sincronizzate con il repository GitHub (`https://github.com/bg2161/delivery-riders-union`) e quindi live su GitHub Pages (`https://bg2161.github.io/delivery-riders-union/`).

Non lasciare mai modifiche non salvate in locale senza aver effettuato il push su GitHub.
