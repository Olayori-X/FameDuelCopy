<?php
    include 'connect.php';
    $getusers = "SELECT * FROM users";
    $getuserquery = mysqli_query($connect, $getusers);

    if($getuserquery){
        $usersarray = [];
        while($row = mysqli_fetch_assoc($getusersquery)){
            unset($row['Password']);
            $usersarray[] = $row;
        }
    }
?>