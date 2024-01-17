<?php

    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        include "connect.php";
        include "validate.php";

        $data = file_get_contents("php://input");
	    $values = json_decode($data, true);

        $username = validate($values['current_username']);
      

        $isinvited = "SELECT * FROM othercontests WHERE inviteename = '$username' AND accepted = false";
        $invitequery = mysqli_query($connect, $isinvited);
    
        if($invitequery){
            $invites = [];
            while($row = mysqli_fetch_assoc($invitequery)){
                $invites[] = $row;
            }

            header("Content-Type: application/json");
            echo json_encode($invites);
        }
    }
?>