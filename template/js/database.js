function isRegistered(email) {
    var x = localStorage.getItem(email);
    if(x === null) {
        return false;
    }
    return true;
}

function RegisterUser(mail,Nome,Cognome,Password,NumerodiTelefono,Indirizzo,CodiceFiscale,DatadiNascita,LuogodiNascita){
    window.alert("sono la registerUser");
    /*
    legenda per accedere ai campi del file json
    'nome'
    'cognome'
    'password'
    'numeroditelefono'
    'indirizzo'
    'codicefiscale'
    'datadinascita'
    'luogodinascita'    
    */
    var persona ={'nome': Nome,'cognome': Cognome,'password': Password,'numeroditelefono': NumerodiTelefono,'indirizzo': Indirizzo,'codicefiscale': CodiceFiscale,'datadinascita': DatadiNascita,'luogodinascita': LuogodiNascita};    
    window.alert("e tempo di settare nello storage");
    localStorage.setItem(mail,JSON.stringify(persona));
    return true;
    
}

function whoIsLogged() {
    return localStorage.getItem(logged);
}

function changeLogged(email) {
    localStorage.setItem(logged,email);
}

//Funzione di login (controlla email/pwd e cambia il logged)
function setLogged() {
    if(!(isRegistered(document.form.email.value))) {
        window.alert("Non esiste un account con questa mail!");
        return false;
    }
    
    var miamail = document.form.email.value;
    var item= localStorage.getItem(miamail);
    var myjson= JSON.parse(item);
    
    if(document.form.password.value != myjson.password) {
        alert("La password inserita non è corretta!");
        return false;
    }

    localStorage.setItem("logged",JSON.stringify(myjson));
    return true;
}

//Funzione che setta il nome nella index paziente
function setNome() {
    var item= localStorage.getItem("logged");
    var mydati= JSON.parse(item);
    alert("Bentornato " + mydati.nome + "!")
    document.getElementById("log").innerHTML = mydati.nome;
}

//Funzione che setta il nome nella index dottore
function setNomeAdmin() {
    var item= localStorage.getItem("logged");
    var mydati= JSON.parse(item);
    alert("Bentornato " + mydati.nome + "!")
    document.getElementById("log").innerHTML = mydati.nome;
}

//Funzione che rimuove il logged a seguito di un logout
function removeLogged() {
    localStorage.removeItem("logged");
}

//Funzione che compila in automatico la cartella clinica del paziente
function popolaCartellaClinica() {
    var item= localStorage.getItem("logged");
    var mydati= JSON.parse(item);
    document.getElementById("nome").innerHTML = mydati.nome;
    document.getElementById("cognome").innerHTML = mydati.cognome;
    document.getElementById("telefono").innerHTML = mydati.numeroditelefono;
    document.getElementById("indirizzo").innerHTML = mydati.indirizzo;
    document.getElementById("codicefisc").innerHTML = mydati.codicefiscale;
    document.getElementById("datanascita").innerHTML = mydati.datadinascita;
    document.getElementById("luogonascita").innerHTML = mydati.luogodinascita;
}
