<?php
    include 'connect.php';

    $max = "SELECT ContestantPic,COUNT(ContestantPic) AS value_occurence FROM contestants GROUP BY ContestantPic ORDER BY value_occurence DESC LIMIT 1";
    $confirmmax = mysqli_query($connect, $max);

    if($confirmmax){
        $row = mysqli_fetch_array($confirmmax);
        if(empty($row['ContestantPic'])){
            $message = "No one has voted";
        }
        else{
            $winner = $row['ContestantPic'];
        }
    }
?>