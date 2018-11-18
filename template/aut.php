<?php

    $email = $_POST['email'];
    $password = $_POST['password'];

    if ($email =='riccardo.caprari@gmail.com' and $password =='123')
    {
        include 'index.html';
    }
    else
    {
        echo 'you are not the admin';
    }
    ?>