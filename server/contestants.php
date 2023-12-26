<?php
include "connect.php";
$contestants = "SELECT * FROM images";
$contestantsquery = mysqli_query($connect, $contestants);

if($contestantsquery){
    $usernames = [];
    $images = [];
    while($row = mysqli_fetch_assoc($contestantsquery)){
        $usernames[] = $row['UserName'];
        $images[] = $row['Image'];
    }
}
?>