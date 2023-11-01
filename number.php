<?php

    $to = "latubosun4328@gmail.com";
    $from = "olayori045@gmail.com";
    $message = "hello";
    $headers = "From: $from\n";
    ini_set('SMTPDebug', 2);


    if(mail($to, '', $message, $headers)){
        echo "Successful";
    }else{
        $lastError = error_get_last();
        echo "Error: ";
    }
    
?>