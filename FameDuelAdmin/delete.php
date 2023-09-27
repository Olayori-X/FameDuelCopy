<?php
    include "connect.php";
    // if($currentHour == 22){
    $clear = "DELETE FROM contestants";
    $delete = "DELETE FROM images";
    $clearquery = mysqli_query($connect, $clear);
    $deletequery = mysqli_query($connect, $delete);

    if($clearquery){
        if($deletequery){
            header("Location: admin.php?msg=Deleted");
        }
    }
?>