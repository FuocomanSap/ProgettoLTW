# Progetto Linguaggi e tecnologie per il web


## Autori
Caprari Riccardo <br />
Douglas Francesco


## Descrizione
Il sito riguarda uno studio dentistico e ha come obiettivo principale quello di facilitare e modernizzare la comunicazione fra i pazienti e i medici dello studio. Nel sito sono presenti servizi di informazione (luogo, orari di lavoro, storia dello studio) e un'area personale per i medici e per i pazienti. Infatti, i pazienti possono registrarsi al sito e di conseguenza autenticarsi per prenotare visite o visualizzare la propria cartella clinica, così da essere sempre a contatto con il proprio dottore. Ovviamente anche il dottore dispone di una sezione di login e di un'area personale nella quale può gestire i suoi pazienti.


## Architettura del sito
Il sito ha una struttura principale e due secondarie personalizzate per le aree personali del paziente e del medico. La pagina "Impostazioni" di paziente e dottore non è stata realizzata.


* Principale
<pre>
Home <br />
├── Chi siamo <br />
├── Dove siamo <br />
├── Contatti <br />
├── Login <br />
│   └── Registrati <br />
</pre>

* AfterLogin patient
<pre>
Home <br />
├── Chi siamo <br />
├── Dove siamo <br />
├── Contatti <br />
├── Benvenuto, &PATIENT_NAME <br />
│   └── Prenota una visita <br />
│   └── La mia cartella <br />
│   └── Impostazioni <br />
│   └── Logout <br />
</pre>

* AfterLogin doctor
<pre>
Home <br />
├── Chi siamo <br />
├── Dove siamo <br />
├── Contatti <br />
├── Benvenuto, Dr. &DOCTOR_NAME <br />
│   └── I miei pazienti <br />
│   └── Impostazioni <br />
│   └── Logout <br />
</pre>

## Tecnologie utilizzate
Per la realizzazione del sito web abbiamo personalmente utilizzato i seguenti linguaggi:

* HTML5
* XML
* CSS
* JAVASCRIPT
* PHP


Come template iniziale abbiamo utilizzato il seguente:
[Elements Responsive by html5webtemplates.co.uk](https://www.html5webtemplates.co.uk/templates.html)


## Utilizzo
Per utilizzare il sito si può installare [Visual Studio Code]() e aggiungere la seguente estensione:

* PHP Server 2.4.6

Dopo l'installazione, il sito può essere visualizzato cliccando con il tasto destro sull'editor (va bene una qualsiasi pagina html del progetto) e poi con il tasto sinistro "PHP Server: Serve Project". Ora basterà aprire un browser qualsiasi e connettersi a localhost:3000. Per stoppare il server bisogna tornare sull'editor e questa volta cliccare "PHP Server: Stop".
