<?php
    // $number = "09030816273";
    // $nu = "";

    // for($i = 0; $i < 4; $i++){
    //     $nu .= "$number[$i]";
    // }

    // if($nu == "0903" || "")
    $to = "09030816273@sms.co.za";
    $from = "olayori045@gmail.com";
    $message = "hello";
    $headers = "From: $from\n";
    mail($to, '', $message, $headers);
?>