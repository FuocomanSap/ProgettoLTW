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
    //window.alert("e tempo di settare nello storage");
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




//funzione che registra l'admin in automatico con il campo aggiuntivo "clienti"
function RegisterAdmin(mail,Nome,Cognome,Password,NumerodiTelefono,Indirizzo,CodiceFiscale,DatadiNascita,LuogodiNascita){
    window.alert("sono la registerAdmin");
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
    var persona ={'nome': Nome,'cognome': Cognome,'password': Password,'numeroditelefono': NumerodiTelefono,'indirizzo': Indirizzo,'codicefiscale': CodiceFiscale,'datadinascita': DatadiNascita,'luogodinascita': LuogodiNascita,'Clienti': [ "null"]};    
    localStorage.setItem(mail,JSON.stringify(persona));
    return true;
    
}

//funzione che aggiunge una variabikle globale ADMIN per avere accesso alla mail del dottore quando voglio
function setAdmin(email){
    var info = {'mail':email};
    localStorage.setItem('ADMIN',JSON.stringify(info));
   return true;

}


//funzione che genera in automatico il Dottore (per assenza del backend)
function initAdmin(){
    if(isRegistered("doctor@identistcare.com")){
      return true;
    }
    else {
        RegisterAdmin("doctor@identistcare.com","Francesco","Douglas","123","3488025988","Circonvalalzione tiburtina 4","DGLFNC96","04/08/1996","Roma");
        setAdmin('doctor@identistcare.com');
        return true;
    }

}



// fuzione che all'avvio richiede se si vuole pulire il local storage
function clearAllLocalStorage(){
   //return true; //commetare questo per poter ripulire lo storage
    if(window.confirm("vuoi ripulire il local storage?")){
        localStorage.clear();
        window.alert("all clean :)");
    }
}


