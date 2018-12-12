##Progetto Linguaggi e tecnologie per il web


#Autori
Caprari Riccardo
Douglas Francesco


#Descrizione
Il sito riguarda uno studio dentistico e ha come obiettivo principale quello di facilitare e modernizzare la comunicazione fra i pazienti e i medici dello studio. Nel sito sono presenti servizi di informazione (luogo, orari di lavoro, storia dello studio) e un'area personale per i medici e per i pazienti. Infatti, i pazienti possono registrarsi al sito e di conseguenza autenticarsi per prenotare visite o visualizzare la propria cartella clinica, così da essere sempre a contatto con il proprio dottore. Ovviamente anche il dottore dispone di una sezione di login e di un'area personale nella quale può gestire i suoi pazienti.


#Architettura del sito
Il sito ha una struttura principale e due secondarie personalizzate per l'area personale del paziente e del medico. La pagina "Impostazioni" di paziente e dottore non è stata realizzata.


* Principale

Home
├── Chi siamo
├── Dove siamo
├── Contatti
├── Login
│   └── Registrati

* AfterLogin patient

Home
├── Chi siamo
├── Dove siamo
├── Contatti
├── Benvenuto, &PATIENT_NAME
│   └── Prenota una visita
│   └── La mia cartella
│   └── Impostazioni
│   └── Logout

* AfterLogin doctor

Home
├── Chi siamo
├── Dove siamo
├── Contatti
├── Benvenuto, Dr. &DOCTOR_NAME
│   └── I miei pazienti
│   └── Impostazioni
│   └── Logout


#Tecnologie utilizzate
Per la realizzazione del sito web abbiamo personalmente utilizzato i seguenti linguaggi:

* HTML5
* XML
* CSS
* JAVASCRIPT
* PHP


Come template iniziale abbiamo utilizzato il seguente:
[Elements Responsive by html5webtemplates.co.uk](https://www.html5webtemplates.co.uk/templates.html)

