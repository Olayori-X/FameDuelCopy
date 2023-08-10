<?php
session_start();
$username = $_SESSION['Username'];

include 'connect.php';

if(isset($_POST['option'])){
    include 'validate.php';

    $value = validate($_POST['option']);

    $UserVerification = "SELECT UserName FROM contestants WHERE UserName = '$username'";
    $UserQuery = mysqli_query($connect, $UserVerification);

    if($UserQuery -> num_rows > 0){
        while($row = $UserQuery->fetch_assoc()) {
            if($row['UserName'] === $username){
                //header("Location: Signup.php?emessage=This Username exists");
                header("Location: vote.php?error=This User has voted");
            }
            else{
                $vote = "INSERT INTO contestants(Contestant, UserName) VALUES('$value', '$username')";
                $votequery = mysqli_query($connect, $vote);
                
                if($votequery){
                    echo "Voted";
                }
            }
        }
    }else{
        $vote = "INSERT INTO contestants(Contestant, UserName) VALUES('$value', '$username')";
        $votequery = mysqli_query($connect, $vote);
        
        if($votequery){
            echo "Voted";
            header("Location: vote.php?message= Successful");
        }
    }

}