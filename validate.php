<?php
function validate($data){
    $code = "123456789";
    $data= trim($data);
    $data = stripslashes($data);
    $data= htmlspecialchars($data);

    return $data;
}
?>