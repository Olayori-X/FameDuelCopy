<?php
    include "connect.php";
    include "validate.php";
    include "time.php";


    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        $data = file_get_contents("php://input");
	    $values = json_decode($data, true);

        $contestid = validate($values['contestid']);
        $invited = validate($values['userid']);

        //get invited picture
        $getinviteepic = "SELECT * FROM users WHERE userid = '$invited'";
        $getinviteepicquery = mysqli_query($connect, $getinviteepic);

        if($getinviteepicquery){
            if(mysqli_num_rows($getinviteepicquery) > 0){
                $inviteepic = [];
                while($row = mysqli_fetch_assoc($getinviteepicquery)){
                    $inviteepic[] = $row['profilepic'];
                }
            }
        }

        $getcontesttime = "SELECT contest_time FROM othercontests WHERE contestid = '$contestid'";
        $getcontesttimequery = mysqli_query($connect, $getcontesttime);

        if($getcontesttimequery){
            $row = mysqli_fetch_assoc($getcontesttimequery);
            $setcontesttime = $row['contest_time'];
        }

        $contestendsin = date('H:i', strtotime($setcontesttime));

        $acceptinvite = "UPDATE othercontests SET inviteepic = '$inviteepic', accepted = true, day = '$currentDay', time = '$time', contest_time = '$contestendsin' WHERE contestid = '$contestid'";
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
                    'message' => 'Successful'
                ];
                header('Content-Type: application/json');
                echo json_encode($message); 
            }
        }else{
            $message = [
                'message' => 'Error'
            ];
            header('Content-Type: application/json');
            echo json_encode('message');
        }
    }
?>