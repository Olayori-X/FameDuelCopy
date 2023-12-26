<?php
    include "connect.php";
    include "validate.php";


    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        $data = file_get_contents("php://input");
	    $values = json_decode($data, true);

        $contestid = validate($values['contestid']);
        $inviteepic = validate($values['inviteepic']);
        // $invited = validate($values['inviteduser']);


        $acceptinvite = "UPDATE othercontests SET inviteepic = '$inviteepic', accepted = true WHERE contestid = '$contestid'";
        $acceptquery = mysqli_query($connect, $acceptinvite);

        if($acceptquery){
            $createcontest = "CREATE TABLE $contestid (
                id INT AUTO_INCREMENT PRIMARY KEY,
                contestants varchar(255),
                contestantpic varchar(255),
                username varchar(255)
            )";

            $createquery = mysqli_query($connect, $createcontest);

            if($createquery){
                $message = [
                    'statusCode' => '200'
                ];
                header('Content-Type: application/json');
                echo json_encode($message); 
            }
        }else{
            header('Content-Type: application/json');
            echo json_encode('message');
        }
    }
?>