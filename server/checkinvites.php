<?php

    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        include "connect.php";
        include "validate.php";

        $data = file_get_contents("php://input");
	    $values = json_decode($data, true);

        $userid = validate($values['userid']);
      

        if(verifyToken()){
            $isinvited = "SELECT * FROM othercontests WHERE inviteename = '$userid' AND accepted = false";
            $invitequery = mysqli_query($connect, $isinvited);
        
            if($invitequery){
                $invites = [];
                while($row = mysqli_fetch_assoc($invitequery)){
                    $invites[] = $row;
                }

                header("Content-Type: application/json");
                echo json_encode($invites);
            }
        }else{
            http_response_code(401);
            $message = [
                "message" => "You don't have the necessary permission to access this resource"
            ];
            echo json_encode($message);
        }
    }else{
        http_response_code(405);
    }
?>