#!/bin/bash
# ==============================================================================
# PUSH AUTOMATICO SU GITHUB (1 Clic)
# Repository: https://github.com/bg2161/delivery-riders-union
# ==============================================================================

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd "$DIR"

echo "====================================================================="
echo "  🚀 PUSH AUTOMATICO SU GITHUB"
echo "  Progetto: United Delivery Riders of Metro Manila (U.D.R.M.M.)"
echo "====================================================================="
echo ""

# 1. Aggiungi tutte le modifiche (nuovi file, immagini, modifiche a HTML/CSS/JS)
git add -A

# 2. Controlla se ci sono modifiche da registrare
if ! git diff-index --quiet HEAD -- 2>/dev/null; then
    TIMESTAMP=$(date "+%d/%m/%Y alle %H:%M:%S")
    echo "  📦 Registrazione modifiche in corso..."
    git commit -m "Aggiornamento automatico del $TIMESTAMP"
else
    echo "  ℹ️  Nessuna nuova modifica locale da registrare (repository aggiornato)."
fi

echo ""
echo "  ☁️  Invio delle modifiche a GitHub (git push)..."
echo "---------------------------------------------------------------------"

if git push origin main; then
    echo "---------------------------------------------------------------------"
    echo ""
    echo "  ✅ SUCCESSO! Tutte le modifiche sono state pubblicate su GitHub."
    echo ""
    echo "  🌐 Il tuo sito su GitHub Pages sarà aggiornato tra circa 30 secondi:"
    echo "     👉 https://bg2161.github.io/delivery-riders-union/"
    echo ""
else
    echo "---------------------------------------------------------------------"
    echo ""
    echo "  ⚠️  ATTENZIONE: Il push non è andato a buon fine."
    echo "  Assicurati di aver incollato la chiave SSH su GitHub:"
    echo "  1. Vai su: https://github.com/settings/ssh/new"
    echo "  2. Premi [Cmd + V] nel campo 'Key' e clicca 'Add SSH key'."
    echo ""
fi

echo "====================================================================="
echo "  Finestra in chiusura automatica tra 5 secondi..."
sleep 5
