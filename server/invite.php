<?php
    include "connect.php";
    include "validate.php";
    include 'time.php';


    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        $data = file_get_contents("php://input");
	    $values = json_decode($data, true);

        $challenger = validate($values['userid']);
        
        $invitedname = validate($values['inviteduser']);
        
        $contest_time = validate($values['time']);

        //get challenger's picture
        $getchallengerpic = "SELECT * FROM users WHERE Username = '$challenger'";
        $getchallengerpicquery = mysqli_query($connect, $getchallengerpic);

        if($getchallengerpicquery){
            if(mysqli_num_rows($getchallengerpicquery) > 0){
                $challengerpic = [];
                while($row = mysqli_fetch_assoc($getchallengerpicquery)){
                    $challengerpic[] = $row['profilepic'];
                }
            }
        }

        //get invitee id
        $getinviteeprofile = "SELECT * FROM users WHERE Username = '$invitedname'";
        $getinviteeprofilequery = mysqli_query($connect, $getinviteeprofile);

        if($getinviteeprofilequery){
            if(mysqli_num_rows($getinviteeprofilequery) > 0){
                $invited = [];
                while($row = mysqli_fetch_assoc($getinviteeprofilequery)){
                    $invited[] = $row['userid'];
                }
            }
        }


        $getcontestid = "SELECT contestid FROM othercontests ORDER BY id DESC LIMIT 1";
        $getquery = mysqli_query($connect, $getcontestid);

        if($getquery){
            $row = mysqli_fetch_assoc($getquery);
            $data = $row['id'] + 1;
            $contestid = "contest" . $data;
        }


        $sendinvite = "INSERT INTO othercontests(contestid, challengerpic, challengername, inviteename, accepted, day, time, contest_time) VALUES('$contestid', '$challengerpic', '$challenger', '$invited', false, '$currentDay', '$time', '$contest_time')";
        $sendquery = mysqli_query($connect, $sendinvite);

        if($sendquery){
            $message = [
                'response' => 'Successful'
            ];
            header('Content-Type: application/json');
            echo json_encode($message); 
        }else{
            $message = [
                'response' => 'Error'
            ];
            header('Content-Type: application/json');
            echo json_encode($message); 
        }
    }
?>