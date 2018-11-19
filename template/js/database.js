function isRegistered(email) {
    
    var x = localStorage.getItem(JSON.stringify(email));
    //mi server solo per debuggare
    if(email=='Test@test.it') return true;
    //finito il debug
    else if(x == null) {
        return false;
    }
    return true;
}

function RegisterUser(mail,Nome,Cognome,Password,NumerodiTelefono,Indirizzo,CodiceFiscale,DatadiNascita,LuogodiNascita){
    window.alert("sono la registerUser");
    
    var persona =(JSON.stringify(Nome),JSON.stringify(Cognome),JSON.stringify(Password),JSON.stringify(NumerodiTelefono),JSON.stringify(Indirizzo),JSON.stringify(CodiceFiscale),JSON.stringify(DatadiNascita),JSON.stringify(LuogodiNascita));    
    window.alert("e tempo di settare nello storage");
    localStorage.setItem(JSON.stringify(mail),JSON.stringify(persona));
    window.alert(persona);
    window.alert(JSON.stringify(persona));

    return true;
}

function whoIsLogged() {
    return localStorage.getItem(logged);
}

function changeLogged(email) {
    localStorage.setItem(logged,email);
}



