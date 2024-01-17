<?php

 if($_SERVER['REQUEST_METHOD'] === 'GET'){
    include 'connect.php';
	include "validate.php";


    $getcontests = "SELECT * FROM othercontests ORDER BY id DESC";
    $getcontestsquery = mysqli_query($connect, $getcontests);

    if($getcontestsquery){
        $contestslist = [];
        while($row = mysqli_fetch_assoc($getcontestsquery)){
            unset($row['id']);
            $contestslist[] = $row;
        }
    }

    $countvotes = [];

    for($i=0; $i < count($contestslist); $i++){
        $contestids = $contestslist[$i]['contestid'];
        $challengername = $contestslist[$i]['challengername'];
        $inviteename = $contestslist[$i]['inviteename'];
        $getchallengervotes = "SELECT COUNT(contestants) as countone FROM $contestids WHERE contestants = '$challengername'";
        $getinviteevotes = "SELECT COUNT(contestants) as counttwo FROM $contestids WHERE contestants = '$inviteename'";

        $getchallengervotesquery = mysqli_query($connect, $getchallengervotes);
        $getinviteevotesquery = mysqli_query($connect, $getinviteevotes);

        if($getchallengervotesquery){
            $row = mysqli_fetch_assoc($getchallengervotesquery);
            $countone = $row['countone'];
        }

        if($getinviteevotesquery){
            $row = mysqli_fetch_assoc($getinviteevotesquery);
            $counttwo = $row['counttwo'];
        }

         $counts = [
            'challengervotes' => $countone,
            'inviteevotes' => $counttwo
         ];
    }
    
    $countvotes[] = $counts;
    $data = [
        'contestlists' => $contestslist,
        'votecount' => $counts
    ];

    header('Content-Type: application/json');
    echo json_encode($data);
 }
?>