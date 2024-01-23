<?php

if($_SERVER['REQUEST_METHOD'] === 'POST'){
    include "connect.php";
    include "validate.php";

    $data = file_get_contents("php://input");
    $values = json_decode($data, true);
    
    $uservoting = validate($values['userid']);
    $uservotedforname = validate($values['contestant']);

    //get invitee id
    $getcontestantprofile = "SELECT * FROM users WHERE Username = '$uservotedforname'";
    $getcontestantprofilequery = mysqli_query($connect, $getcontestantprofile);

    if($getcontestantprofilequery){
        if(mysqli_num_rows($getcontestantprofilequery) > 0){
            $uservotedfor = [];
            while($row = mysqli_fetch_assoc($getcontestantprofilequery)){
                $uservotedfor[] = $row['userid'];
            }
        }
    }

    $contestid = validate($values['contestid']);

    $UserVerification = "SELECT username FROM $contestid WHERE username = '$uservoting'";
    $UserQuery = mysqli_query($connect, $UserVerification);

    if($UserQuery -> num_rows > 0){
        $message = "This User has voted";
    }else{
        $vote = "INSERT INTO $contestid(contestant, username) VALUES('$uservotedfor',  '$uservoting')";
        $votequery = mysqli_query($connect, $vote);
        
        if($votequery){
            $message = "Successful";
        }
    }

    header('Content-Type: application/json');
    echo json_encode($message); 
}