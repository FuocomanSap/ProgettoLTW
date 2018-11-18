<?php

    $email = $_POST['email'];
    $password = $_POST['password'];

    if ($email =='riccardo.caprari@gmail.com' and $password =='123') {
        header('Location: afterloginindex.html?name=Ricky'); //include 'index.html';
    } else if ($email =='fuocoman96@gmail.com' and $password =='123') {
        header('Location: afterloginindex.html?name=Francesco');
    } else {
        echo 'Non sei registrato!';
    }
    ?>