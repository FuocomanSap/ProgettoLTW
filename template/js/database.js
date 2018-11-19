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
    
    Before:
    var persona ={'nome':JSON.stringify(Nome),'cognome':JSON.stringify(Cognome),'password':JSON.stringify(Password),'numeroditelefono':JSON.stringify(NumerodiTelefono),'indirizzo':JSON.stringify(Indirizzo),'codicefiscale':JSON.stringify(CodiceFiscale),'datadinascita':JSON.stringify(DatadiNascita),'luogodinascita':JSON.stringify(LuogodiNascita)};    
    window.alert("e tempo di settare nello storage");
    localStorage.setItem(JSON.stringify(mail),JSON.stringify(persona));
    return true;
    
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



