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

function RegisterUser(){
     
    var persona = ('Nome':document.registerForm.name.value,'Cognome':( document.registerForm.urname.value), 'Password': document.registerForm.password.value,'Numero di Telefono': document.registerForm.phoneNumber.value,'Indirizzo': document.registerForm.address.value, 'Codice Fiscale': document.registerForm.CF.value,'Data di Nscita': document.registerForm.birthday.value,'Luogo di Nascita': document.registerForm.birthcountry.value,'Esenzione': document.registerForm.category.value);
    localStorage.setItem(form.email.value,JSON.stringify(persona));
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



