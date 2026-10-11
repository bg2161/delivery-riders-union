# 🇵🇭 United Delivery Riders of Metro Manila (U.D.R.M.M.)
### Progetto Universitario: *Battling Global Giants Locally (B.G.G.L.)* — Taskforce 2 (Manila, Philippines)

Un sito web moderno, interattivo e bilingue (Inglese e Filippino/Tagalog) per il sindacato dei rider di consegna a domicilio di Metro Manila, progettato in conformità al piano di comunicazione e alle linee guida visive fornite.

---

## 🚀 Come Aprire ed Eseguire il Sito (Self-Hosted Locale)

Hai a disposizione due modalità immediate per visualizzare il sito sulla tua macchina:

### Metodo 1: Avvio con Server Locale (Consigliato)
Fai **doppio clic** sul file eseguibile:
```bash
Avvia_Sito_UDRMM.command
```
Questo script:
1. Avvia in background un server HTTP nativo e leggero su `http://localhost:8080`.
2. Apre in automatico la pagina nel tuo browser predefinito (Safari, Chrome, ecc.).
3. Per chiudere il server, basta chiudere la finestra del Terminale o premere `Ctrl + C`.

### Metodo 2: Apertura Diretta Senza Terminale
Fai doppio clic sul file:
```html
index.html
```
oppure su:
```html
Apri_Sito.html
```
Il sito è stato realizzato in pura tecnologia web (HTML5, CSS3, Vanilla JavaScript) senza dipendenze esterne, perciò funziona fluidamente anche aprendo direttamente il file.

---

## 🌍 ACCESSO PUBBLICO COMPLETO SU INTERNET (MONDIALE)

Se vuoi che professori, colleghi o utenti esterni possano visualizzare il sito da qualsiasi luogo del mondo (anche da casa propria, su rete dati cellulare 4G/5G, senza essere connessi al tuo Wi-Fi), hai a disposizione una soluzione già pronta a un clic:

### Metodo 1: Script Diretto con Tunnel HTTPS Sicuro (Consigliato - Zero Installazioni)
Fai doppio clic sul file:
```bash
CONDIVIDI_INTERNET_PUBBLICO.command
```
- **Come funziona:** Usa il client SSH nativo già integrato nel tuo Mac per creare all'istante un tunnel protetto crittografato (SSL/HTTPS).
- **Cosa ottieni:** Nella finestra del Terminale comparirà un link pubblico univoco del tipo:
  `https://xxxxxx.lhr.life`
- **Come condividerlo:** Invia questo link a chiunque tramite WhatsApp, email o chat. Chiunque nel mondo potrà aprire il sito immediatamente.
- **Sicurezza & Spegnimento:** Non appena chiudi la finestra del Terminale o premi `Ctrl + C`, il tunnel si disattiva all'istante e il computer torna 100% isolato.

---

## 🌐 Condivisione Pubblica su Rete Locale (Server con Limite Max 3 Persone)

È stata creata la sottocartella dedicata:
📁 **`public_shared_version/`**

Questa versione consente al tuo Mac di fungere da **vero server web** accessibile da altri dispositivi (smartphone, tablet o altri computer).

### 👥 Limite Connessioni (Max 3 Persone):
- Il server include un controllore di capacità che accetta un massimo di **3 persone connesse contemporaneamente**.
- Il sito mostra in basso a destra un badge verde con gli utenti attivi in tempo reale (`Server Live: X/3 utenti connessi`).
- Se un **4° utente** prova a collegarsi, vedrà una schermata di attesa ("Server al Completo 3/3") che controlla automaticamente ogni 3 secondi se si libera un posto.
- Quando uno dei 3 utenti chiude la pagina, il suo slot si libera istantaneamente.

---

### 🔘 Interruttore ON / OFF Semplice (Toggle):

All'interno della cartella principale trovi i seguenti file cliccabili:

1. **`TOGGLE_CONDIVISIONE.command`** (Interruttore Smart):
   - Se il server è SPENTO: lo **avvia**.
   - Se il server è ACCESO: lo **spegne**.
2. **`ATTIVA_CONDIVISIONE.command`**:
   - Avvia direttamente la condivisione e mostra l'indirizzo IP.
3. **`DISATTIVA_CONDIVISIONE.command`**:
   - Spegne all'istante il server e interrompe qualsiasi connessione esterna.

---

### 📲 Come Far Accedere gli Altri Utenti:

1. **Stessa Rete Wi-Fi:** Assicurati che i telefoni o i computer dei tuoi colleghi siano collegati alla **stessa rete Wi-Fi** del tuo Mac (oppure al tuo *Hotspot Personale*).
2. **Avvia la condivisione:** Fai doppio clic su `ATTIVA_CONDIVISIONE.command`.
3. **Indirizzo da digitare:** Fai aprire il browser (Safari, Chrome) ai tuoi colleghi e digita:
   ```text
   http://192.168.129.136:8080
   ```
   *(L'IP esatto viene mostrato a schermo all'avvio nel Terminale).*

---

## 🛡️ Conformità GDPR & Minimizzazione dei Dati (Privacy by Design)

Dato che il sito è un prototipo accademico e che checkout, iscrizioni e adesioni sono mock-up dimostrativi:
1. **Banner Cookie GDPR:**
   - Mostra un banner discreto in basso a sinistra conforme al principio di **Minimizzazione dei Dati** (GDPR Art. 5).
   - Comunica chiaramente che **non vengono utilizzati cookie di terze parti, profilazione o tracciamento pubblicitario**.
   - Memorizza unicamente l'impostazione tecnica essenziale (preferenza lingua `udrmm_lang` e consenso `udrmm_cookie_consent`).
2. **Pannello Dettagli Privacy & Reset Dati:**
   - Cliccando su *"Privacy Details & Settings"* (o sul link *"Privacy & Cookies (GDPR)"* nel footer) si apre un modale trasparente che spiega nel dettaglio ogni singolo dato memorizzato.
   - Include il pulsante **"Clear My Saved Preferences"** per cancellare all'istante qualsiasi preferenza locale salvata nel browser.
3. **Bilingue (EN / FIL):** Anche il banner dei cookie e il testo dell'informativa privacy si traducono istantaneamente con il language selector.

---


1. **Stile Visivo e Palette di Colori:**
   - **Sfondo rosino morbido:** Tonalità calda e moderna (`#FFF5F7` e sfumature rosa tenue) per evitare un look cupo/scuro, mantenendo un'atmosfera umana e accogliente.
   - **Colori della Bandiera Filippina:** Dettagli in Blu Reale (`#0038A8`), Rosso Scarlatto (`#CE1126`), Giallo Sole (`#FCD116`) e Bianco.
   - **Loghi e Identità:** Utilizzo del logo ufficiale UDRMM con il rider su scooter, lo stemma solare e lo slogan ricamato *"NO DELIVERY IS WORTH A RIDER'S SAFETY"*.

2. **Language Selector Completo (EN / FIL):**
   - Selettore istantaneo in testata per passare da **Inglese (EN)** a **Filippino/Tagalog (FIL)**.
   - Traduzione dinamica e curata di ogni singolo testo, sezione, bottone, prodotto e notifica.

3. **Sezione Notizie e Hub Protesta del 1° Maggio 2027 (Festa dei Lavoratori):**
   - **Conto alla rovescia interattivo** in tempo reale per la mobilitazione del 1° Maggio 2027 (Festa dei Lavoratori).
   - **Programma dettagliato della giornata:** Punti di ritrovo (Welcome Rotonda & EDSA Shrine), carovana pacifica verso BGC/Makati, app-boycott (1 ora di disconnessione coordinata), consegna del documento di richieste a DOLE e FoodTiger.
   - **Confronto tra policy della piattaforma e richieste del sindacato:** Indennità di rischio per la stagione delle piogge (+35% Monsoon Hazard Pay), stop alle penalità di tempo con le strade allagate, procedura trasparente contro le sospensioni arbitrarie degli account.
   - **Pulsante Interattivo di Sostegno / RSVP:** Contatore dinamico di adesioni con feedback visivo.

4. **Shop Solidale e Vantaggio Iscrizione Membri:**
   - **La Vestaglia / Poncho Antipioggia Ufficiale:** Chiunque si iscriva al sindacato come membro riceve gratuitamente l'impermeabile ad alta visibilità (*All-Weather High-Vis Rain Poncho*). Il modulo di iscrizione genera una tessera digitale immediata con ID membro e conferma della spedizione del poncho.
   - **Accessori Aggiuntivi Acquistabili:**
     - **Cappellino ricamato UDRMM** (con selettore colore Blu e Rosso, esattamente come nelle foto reali del progetto).
     - **Pack di adesivi impermeabili riflettenti** (*Waterproof Vinyl Stickers* per casco e bauletto).
     - **Portacellulare impermeabile da manubrio** (*Heavy-Duty Handlebar Phone Mount*).
   - Carrello interattivo scorrevole (*slide-out drawer*) e simulazione di checkout con metodi locali (GCash, Maya, Contanti).

5. **Monitor Meteo & Sicurezza Stradale di Manila:**
   - Widget con avviso simulato PAGASA sulle aree storicamente allagate di Metro Manila (España Blvd, Taft Ave, EDSA Ortigas) e raccomandazioni per i rider.

6. **Storie Reali e Attribuzione Accademica:**
   - Testimonianze dei rider sulle difficoltà del lavoro su piattaforma durante i monsoni.
   - Sezione dedicata al progetto universitario **MSM Assignment 2 (Taskforce 2: B.G.G.L.)** con menzione dei membri del gruppo e dei rispettivi ruoli (Design, Writing, Leadership, Communication).
