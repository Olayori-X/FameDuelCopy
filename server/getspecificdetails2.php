<?php
    // session_start();

    if($_SERVER['REQUEST_METHOD'] == "POST"){
        include 'validate.php';

        $data = file_get_contents("php://input");
	    $values = json_decode($data, true);

        $username = validate($values['username']);

        // $username = $_SESSION['Username'];

        include "server/connect.php";

        $users = "SELECT * FROM users WHERE Username = '$username'";
        $usersquery = mysqli_query($connect, $users);

        if($usersquery){
            $data = [];
            while($row = mysqli_fetch_assoc($usersquery)){
                unset($row['Password']);
                $data[] = $row;
            }

            header("Content-Type: application/json");
            echo json_encode($data);
        }
    }else{
        header("Location: ../Login.php");
    }
?>