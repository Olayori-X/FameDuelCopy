<?php

    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        
        include "connect.php";
        include "validate.php";

        $data = file_get_contents("php://input");
        $values = json_decode($data, true);

        $user = validate($values['current_username']);

        
        $followcurrentuser = "SELECT followeduser FROM followusers WHERE followeduser = '$user'"; //following current user
        $currentuserfollowing = "SELECT userfollowing FROM followusers WHERE userfollowing = '$user'"; //current user following

        $followcurrentuserquery = mysqli_query($connect, $followcurrentuser); //follow current user
        $currentuserfollowingquery = mysqli_query($connect, $currentuserfollowing); //current user following

        //array values start here
        if($followcurrentuserquery){
            if(mysqli_num_rows($followcurrentuserquery) >= 0){
                $followcurrentuserarray = [];
                while($row = mysqli_fetch_assoc($followcurrentuserquery)){
                    $followcurrentuserarray[] = $row['followeduser']; //people following current user
                }
            }
        }

        if($currentuserfollowingquery){
            if(mysqli_num_rows($currentuserfollowingquery) >= 0){
                $currentuserfollowingarray = [];
                while($row = mysqli_fetch_assoc($currentuserfollowingquery)){
                    $currentuserfollowingarray[] = $row['userfollowing']; //current user following
                }
            }
        }
        //array values end here

        $followcurrentusercount = "SELECT COUNT(followeduser) as followeduser FROM followusers WHERE followeduser = '$user'"; // number of people following current user count
        $currentuserfollowingcount = "SELECT COUNT(userfollowing) as userfollowing FROM followusers WHERE userfollowing = '$user'"; //current user following count


        $followcurrentusercountquery = mysqli_query($connect, $followcurrentusercount); //number of people following current user
        $currentuserfollowingcountquery = mysqli_query($connect, $currentuserfollowingcount); //current user following count

        //count variables start here
        if($currentuserfollowingcountquery){
            if(mysqli_num_rows($currentuserfollowingcountquery) > 0){
                $row = mysqli_fetch_assoc($currentuserfollowingcountquery);
                $currentuserfollowingcounts = $row['userfollowing']; //current user following count
            }
        }

        if($followcurrentusercountquery){
            if(mysqli_num_rows($followcurrentusercountquery) > 0){
                $row = mysqli_fetch_assoc($followcurrentusercountquery);
                $followcurrentusercounts = $row['followeduser']; //number of people following current user
            }
        }
        //count variables end here



        $users = "SELECT * FROM users WHERE Username = '$user'";
        $usersquery = mysqli_query($connect, $users);

        if($usersquery){
            $data = [];
            while($row = mysqli_fetch_assoc($usersquery)){
                unset($row['Password']);
                unset($row['id']);
                $data[] = $row;
            }
            
            $message  = [
                'userprofile' => $data,
                'followcurrentuserarray' => $followcurrentuserarray,
                'currentuserfollowingarray' => $currentuserfollowingarray
            ];
            header("Content-Type: application/json");
            echo json_encode($message);
        }
    }else{
        header("Location: ../Login.php");
    }
?>