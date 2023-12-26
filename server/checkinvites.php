<?php
    session_start();

    if(isset($_SESSION['Username'])){
      $username = $_SESSION['Username'];
      include "connect.php";

        $isinvited = "SELECT * FROM othercontests WHERE inviteename = '$username'";
        $invitequery = mysqli_query($connect, $isinvited);
    
        if($invitequery){
            $invites = [];
            while($row = mysqli_fetch_assoc($invitequery)){
                $invites[] = $row;
            }
            $data = [
            'data' => $invites
            ];
            header("Content-Type: application/json");
            echo json_encode($data);
        }
    }
?>