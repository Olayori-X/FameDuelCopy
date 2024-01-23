<?php
    include 'connect.php';
    include 'validate.php';
    include 'time.php';

    $getduecontests = "SELECT * FROM othercontests WHERE contest_time = '$time' AND status = 'Running'";
    $getduecontestsquery = mysqli_query($connect, $getduecontests);

    if($getduecontestsquery){
        if(mysqli_num_rows($getduecontestsquery) > 0){
            $contestsdue = [];
            $contestids = [];
            while($row = mysqli_fetch_assoc($getduecontestsquery)){
                $contestsdue[] = $row;
                $contestids[] = $row['contestid'];
            }


            for($i=0; $i < count($contestids); $i++){
                $contestid = $contestids[$i];
                $endcontests = "UPDATE othercontests SET status = 'Ended' WHERE contestid = '$contestid'";
                $endcontestquery = mysqli_query($connect, $endcontests);

                if($endcontestquery){
                    $message = "Good";
                }
            }

            for($i=0; $i < count($contestids); $i++){
                $contestid = $contestids[$i];
                $max = "SELECT contestants, COUNT(contestants) AS countone FROM $contestid GROUP BY contestants ORDER BY countone DESC LIMIT 1";
                $confirmmax = mysqli_query($connect, $max);

                if($confirmmax){
                    $row = mysqli_fetch_array($confirmmax);
                    if(empty($row['contestants'])){
                        $message = "No one has voted";
                        echo $message;
                    }
                    else{
                        $winner = $row['contestants'];
                        $updategamecardforwinner = "UPDATE users SET gamecard = gamecard + 10 WHERE userid = '$winner'";
                        $updategamecardforwinnerquery = mysqli_query($connect, $updategamecardforwinner);
                        if($updategamecardforwinnerquery){
                            $message = "Good";
                        }

                        $getvotersforwinner = "SELECT * FROM $contestdue WHERE contestants = '$winner'";
                        $getwinnersquery = mysqli_query($connect, $getvotersforwinner);
                
                        // $getvotersforloser = "SELECT * FROM contestants WHERE ContestantPic != '$winner'";
                        // $getlosersquery = mysqli_query($connect, $getvotersforloser);
                
                        if($getwinnersquery){
                            $votersforwinner = [];
                            while($row = mysqli_fetch_assoc($getwinnersquery)){
                                $votersforwinner[] = $row['username'];
                            }
                
                            for($gamecard=0; $gamecard < count($votersforwinner); $gamecard++){
                                $updategamecard = "UPDATE users SET gamecard = gamecard + 1 WHERE userid = '$votersforwinner[$gamecard]'";
                                $updategamecardquery = mysqli_query($connect, $updategamecard);
                                if($updategamecardquery){
                                    $message = "Good";
                                }
                            }
                        }
                    }
                }
            }
        }
    }
?>