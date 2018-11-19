function isRegistered(email) {
    
    var x = localStorage.getItem(email);
    //mi server solo per debuggare
    if(email=='Test@test.it') return true;
    //finito il debug
    else if(x == null) {
        return false;
    }
    return true;
}

function RegisterUser(form){
    window.alert(form);
    return true;



}

function whoIsLogged() {
    return localStorage.getItem(logged);
}

function changeLogged(email) {
    localStorage.setItem(logged,email);
}



