<?php
//Thic code works for the general contests after the winner has been selected. So it updates the gamecard respectively
    include 'getwinner.php';
    include 'connect.php';

    if($winner){
        $getvotersforwinner = "SELECT * FROM contestants WHERE ContestantPic = '$winner'";
        $getwinnersquery = mysqli_query($connect, $getvotersforwinner);

        $getvotersforloser = "SELECT * FROM contestants WHERE ContestantPic != '$winner'";
        $getlosersquery = mysqli_query($connect, $getvotersforloser);

        if($getwinnersquery){
            $votersforwinner = [];
            while($row = mysqli_fetch_assoc($getwinnersquery)){
                $votersforwinner[] = $row;
            }

            for($i=0; $i < count($votersforwinner); $i++){
                $updategamecard = "UPDATE users SET gamecard = gamecard + 1 WHERE Username = '$votersforwinner[i]'";
            }

            $updategamecardforwinner = "UPDATE users SET gamecard = gamecard + 10 WHERE Username = '$winner[i]'";
        }

        // if($getlosersquery){
        //     $votersforloser = [];
        //     while($row = mysqli_fetch_assoc($getlosersquery)){
        //         $votersforloser[] = $row['UserName'];
        //     }

        //     for($i=0; $i < count($votersforloser); $i++){
        //         $updategamecard = "UPDATE users SET gamecard = gamecard - 1 WHERE Username = '$votersforloser[i]'";
        //     }
        // }
    }
?>