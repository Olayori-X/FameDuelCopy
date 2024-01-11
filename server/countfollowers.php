<?php
include 'connect.php';
include 'validate.php';

session_start();
if($_SESSION['Username']){
    $user = $_SESSION['Username'];

    $followcurrentusercount = "SELECT COUNT(followeduser) as followeduser WHERE followeduser = '$user'"; // number of people following current user count
    $currentuserfollowingcount = "SELECT COUNT(userfollowing) as userfollowing WHERE userfollowing = '$user'"; //current user following count

    $followcurrentuser = "SELECT followeduser WHERE followeduser = '$user'"; //following current user
    $currentuserfollowing = "SELECT userfollowing WHERE userfollowing = '$user'"; //current user following

    $followcurrentusercountquery = mysqli_query($connect, $followcurrentusercount); //number of people following current user
    $currentuserfollowingcountquery = mysqli_query($connect, $currentuserfollowingcount); //current user following count

    $followcurrentuserquery = mysqli_query($connect, $followcurrentuser); //follow current user
    $currentuserfollowingquery = mysqli_query($connect, $currentuserfollowing); //current user following

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

    //array values start here
    if($followcurrentuserquery){
        if(mysqli_num_rows($followcurrentuserquery) > 0){
            $followcurrentuserarray = [];
            while($row = mysqli_fetch_assoc($followcurrentuserquery)){
                $followcurrentuserarray[] = $row['followeduser']; //people following current user
            }
        }
    }

    if($currentuserfollowingquery){
        if(mysqli_num_rows($currentuserfollowingquery) > 0){
            $currentuserfollowingarray = [];
            while($row = mysqli_fetch_assoc($currentuserfollowingquery)){
                $currentuserfollowingarray[] = $row['userfollowing']; //current user following
            }
        }
    }
    //array values end here
}