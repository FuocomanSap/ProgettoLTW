<?php

    $email = $_POST['email'];
    $password = $_POST['password'];

    if ($email =='riccardo.caprari@gmail.com' and $password =='123') {
        header('Location: afterloginindex.html?name=Riccardo&key=kQ94is3PRPPgry01JK2e'); //include 'index.html';
    } else if ($email =='fuocoman96@gmail.com' and $password =='123') {
        header('Location: afteradminloginindex.html?name=Dr. Francesco&key=kQ94is3PRPPgry01JK2e');
    } else {
        echo 'Non sei registrato!';
    }
    ?>