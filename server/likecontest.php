<?php

    include 'connect.php';
    include 'validate.php';

    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        $data = file_get_contents("php://input");
	    $values = json_decode($data, true);

        $userliking = validate($values['userid']);
        $contestid = validate($values['contestid']);

        $checklikes = "SELECT userliking FROM likedcontests WHERE userliking = '$userliking' AND contestid = '$contestid'";
        $checkquery = mysqli_query($connect, $checklikes);

        if($checkquery){
            if(mysqli_num_rows($checkquery) > 0){
                $unlike = "DELETE FROM likedcontests WHERE userliking = '$userliking' AND contestid = '$contestid'";
                $unlikequery = mysqli_query($connect, $unlike);

                if($unlikequery){
                    $userlikescount = "SELECT COUNT(userliking) as userliking FROM likedcontests WHERE contestid = '$contestid'"; // number of people liking a contest

                    $userlikes = "SELECT userliking FROM likedcontests WHERE contestid = '$contestid'"; //users that liked a contest

                    $userlikescountquery = mysqli_query($connect, $userlikescount); //number of people that liked a contest
                    $userlikesquery = mysqli_query($connect, $userlikes); //users that liked a contest


                    //count variables start here
                    if($userlikescountquery){
                        if(mysqli_num_rows($userlikescountquery) > 0){
                            $row = mysqli_fetch_assoc($userlikescountquery);
                            $userlikescounts = $row['userliking']; //number of people that liked a contest
                        }
                    }
                    //count variables end here

                    //array values start here
                    if($userlikesquery){
                        if(mysqli_num_rows($userlikesquery) >= 0){
                            $userlikesarray = [];
                            while($row = mysqli_fetch_assoc($userlikesquery)){
                                $userlikesarray[] = $row['userliking']; //users that liked a contest
                            }
                        }
                    }
                    //array values end here

                    $message = [
                        'response' => "Successful",
                        'userlikescounts' => $userlikescounts,
                        'userlikes' => $userlikesarray,
                    ];
                }else{
                    $message = [
                        'response' => "An error occured"
                    ];
                }
            }else{
                $likecontest = "INSERT INTO likedcontests(userliking, contestid) VALUES ('$userliking', '$contestid')";
                $likequery = mysqli_query($connect, $likecontest);

                if($likequery){
                    $userlikescount = "SELECT COUNT(userliking) as userliking FROM likedcontests WHERE contestid = '$contestid'"; // number of people liking a contest

                    $userlikes = "SELECT userliking FROM likedcontests WHERE contestid = '$contestid'"; //users that liked a contest

                    $userlikescountquery = mysqli_query($connect, $userlikescount); //number of people that liked a contest
                    $userlikesquery = mysqli_query($connect, $userlikes); //users that liked a contest


                    //count variables start here
                    if($userlikescountquery){
                        if(mysqli_num_rows($userlikescountquery) > 0){
                            $row = mysqli_fetch_assoc($userlikescountquery);
                            $userlikescounts = $row['userliking']; //number of people that liked a contest
                        }
                    }
                    //count variables end here

                    //array values start here
                    if($userlikesquery){
                        if(mysqli_num_rows($userlikesquery) >= 0){
                            $userlikesarray = [];
                            while($row = mysqli_fetch_assoc($userlikesquery)){
                                $userlikesarray[] = $row['userliking']; //users that liked a contest
                            }
                        }
                    }
                    //array values end here

                    $message = [
                        'response' => "Successful",
                        'userlikescounts' => $userlikescounts,
                        'userlikes' => $userlikesarray,
                    ];
                }else{
                    $message = [
                        'response' => "An error occured"
                    ];
                }
            }
        }
        header('Content-Type: application/json');
        echo json_encode($message);
    }