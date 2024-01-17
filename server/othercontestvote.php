<?php

if($_SERVER['REQUEST_METHOD'] === 'POST'){
    include "connect.php";
    include "validate.php";

    $data = file_get_contents("php://input");
    $values = json_decode($data, true);
    
    $uservoting = validate($values['username']);
    $uservotedfor = validate($values['contestant']);
    $contestid = validate($values['contestid']);

    $UserVerification = "SELECT UserName FROM $contestid WHERE UserName = '$uservoting'";
    $UserQuery = mysqli_query($connect, $UserVerification);

    if($UserQuery -> num_rows > 0){
        $message = "This User has voted";
    }else{
        $vote = "INSERT INTO $contestid(Contestant, UserName) VALUES('$uservotedfor',  '$uservoting')";
        $votequery = mysqli_query($connect, $vote);
        
        if($votequery){
            $message = "Successful";
        }
    }

    header('Content-Type: application/json');
    echo json_encode($message); 
}