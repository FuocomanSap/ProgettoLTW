function isRegistered(email) {
    var x = localStorage.getItem(email);
    if(x == "") {
        return false;
    }
    return true;
}

function whoIsLogged() {
    return localStorage.getItem(logged);
}

function changeLogged(email) {
    localStorage.setItem(logged,email);
}



