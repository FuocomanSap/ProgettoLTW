<?php

    $email = $_POST['email'];
    $password = $_POST['password'];

    if ($email =='doctor@identistcare.com' and $password =='123') {
        header('Location: ../afterLogin/afteradminloginindex.html'); //include 'index.html';
    }else header('Location: ../afterLogin/afterloginindex.html');
    
?>