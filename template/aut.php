<?php

    $email = $_POST['email'];
    $password = $_POST['password'];

    if ($email =='riccardo.caprari@gmail.com' and $password =='123') {
        header('Location: afterloginindex.html?name=Ricky&token=kQ94is3PRPPgry01JK2e'); //include 'index.html';
    } else if ($email =='fuocoman96@gmail.com' and $password =='123') {
        header('Location: afterloginindex.html?name=Francesco&token=kQ94is3PRPPgry01JK2e');
    } else {
        echo 'Non sei registrato!';
    }
    ?>