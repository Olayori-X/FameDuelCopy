<?php
    // session_start();

    if(isset($_SESSION['Username'])){
        $username = $_SESSION['Username'];

        include "server/connect.php";

        $users = "SELECT * FROM users WHERE Username = '$username'";
        $usersquery = mysqli_query($connect, $users);

        if($usersquery){
            $data = [];
            while($row = mysqli_fetch_assoc($usersquery)){
                $data[] = $row;
            }
        }
    }
?>