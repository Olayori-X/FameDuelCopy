<?php

    include 'connect.php';
    include 'validate.php';

    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        $data = file_get_contents("php://input");
	    $values = json_decode($data, true);

        $userfollowing = validate($values['userid']);
        $followedusername = validate($values['followeduser']);

        //get invitee id
        $getfolloweduserprofile = "SELECT * FROM users WHERE Username = '$followedusername'";
        $getfolloweduserprofilequery = mysqli_query($connect, $getfolloweduserprofile);

        if($getfolloweduserprofilequery){
            if(mysqli_num_rows($getfolloweduserprofilequery) > 0){
                $followeduser = [];
                while($row = mysqli_fetch_assoc($getfolloweduserprofilequery)){
                    $followeduser[] = $row['userid'];
                }
            }
        }

        $checkfollow = "SELECT followeduser FROM followusers WHERE userfollowing = '$userfollowing'";
        $checkquery = mysqli_query($connect, $checkfollow);

        if($checkquery){
            if(mysqli_num_rows($checkquery) > 0){
                $unfollow = "DELETE FROM followusers WHERE userfollowing = '$userfollowing'";
                $unfollowquery = mysqli_query($connect, $unfollow);

                if($unfollowquery){
                    $followedusercount = "SELECT COUNT(followeduser) as followeduser FROM followusers WHERE followeduser = '$followeduser'"; // number of people following followed user count
                    $followeduserfollowingcount = "SELECT COUNT(userfollowing) as userfollowing FROM followusers WHERE userfollowing = '$followeduser'"; //followed user following count

                    $follow_followeduser = "SELECT followeduser FROM followusers WHERE followeduser = '$followeduser'"; //following current user
                    $followeduserfollowing = "SELECT userfollowing FROM followusers WHERE userfollowing = '$followeduser'"; //current user following

                    $followedusercountquery = mysqli_query($connect, $followedusercount); //number of people following followed user
                    $followeduserfollowingcountquery = mysqli_query($connect, $followeduserfollowingcount); //followed user following count

                    $follow_followeduserquery = mysqli_query($connect, $follow_followeduser); //follow current user
                    $followeduserfollowingquery = mysqli_query($connect, $followeduserfollowing); //current user following

                    //count variables start here
                    if($followeduserfollowingcountquery){
                        if(mysqli_num_rows($followeduserfollowingcountquery) > 0){
                            $row = mysqli_fetch_assoc($followeduserfollowingcountquery);
                            $followeduserfollowingcounts = $row['userfollowing']; //followed user following count
                        }
                    }

                    if($followedusercountquery){
                        if(mysqli_num_rows($followedusercountquery) > 0){
                            $row = mysqli_fetch_assoc($followedusercountquery);
                            $followedusercounts = $row['followeduser']; //number of people following followed user
                        }
                    }
                    //count variables end here

                    //array values start here
                    if($follow_followeduserquery){
                        if(mysqli_num_rows($follow_followeduserquery) >= 0){
                            $follow_followeduserarray = [];
                            while($row = mysqli_fetch_assoc($follow_followeduserquery)){
                                $follow_followeduserarray[] = $row['followeduser']; //people following current user
                            }
                        }
                    }

                    if($followeduserfollowingquery){
                        if(mysqli_num_rows($followeduserfollowingquery) >= 0){
                            $followeduserfollowingarray = [];
                            while($row = mysqli_fetch_assoc($followeduserfollowingquery)){
                                $followeduserfollowingarray[] = $row['userfollowing']; //current user following
                            }
                        }
                    }
                    //array values end here
                    $message = [
                        'response' => "Successful",
                        'followeduserfollowingcounts' => $followeduserfollowingcounts,
                        'followedusercounts' => $followedusercounts,
                        'follow_followeduserarray' => $follow_followeduserarray,
                        'followeduserfollowingarray' => $followeduserfollowingarray
                    ];
                }else{
                    $message = [
                        'response' => "An error occured"
                    ];
                }
            }else{
                $follow = "INSERT INTO followusers(userfollowing, followeduser) VALUES ('$userfollowing', '$followeduser')";
                $followquery = mysqli_query($connect, $follow);

                if($followquery){
                    $followedusercount = "SELECT COUNT(followeduser) as followeduser FROM followusers WHERE followeduser = '$followeduser'"; // number of people following followed user count
                    $followeduserfollowingcount = "SELECT COUNT(userfollowing) as userfollowing FROM followusers WHERE userfollowing = '$followeduser'"; //followed user following count

                    $follow_followeduser = "SELECT followeduser FROM followusers WHERE followeduser = '$followeduser'"; //following current user
                    $followeduserfollowing = "SELECT userfollowing FROM followusers WHERE userfollowing = '$followeduser'"; //current user following

                    $followedusercountquery = mysqli_query($connect, $followedusercount); //number of people following followed user
                    $followeduserfollowingcountquery = mysqli_query($connect, $followeduserfollowingcount); //followed user following count

                    $follow_followeduserquery = mysqli_query($connect, $follow_followeduser); //follow current user
                    $followeduserfollowingquery = mysqli_query($connect, $followeduserfollowing); //current user following

                    //count variables start here
                    if($followeduserfollowingcountquery){
                        if(mysqli_num_rows($followeduserfollowingcountquery) > 0){
                            $row = mysqli_fetch_assoc($followeduserfollowingcountquery);
                            $followeduserfollowingcounts = $row['userfollowing']; //followed user following count
                        }
                    }

                    if($followedusercountquery){
                        if(mysqli_num_rows($followedusercountquery) > 0){
                            $row = mysqli_fetch_assoc($followedusercountquery);
                            $followedusercounts = $row['followeduser']; //number of people following followed user
                        }
                    }
                    //count variables end here

                    //array values start here
                    if($follow_followeduserquery){
                        if(mysqli_num_rows($follow_followeduserquery) >= 0){
                            $follow_followeduserarray = [];
                            while($row = mysqli_fetch_assoc($follow_followeduserquery)){
                                $follow_followeduserarray[] = $row['followeduser']; //people following current user
                            }
                        }
                    }

                    if($followeduserfollowingquery){
                        if(mysqli_num_rows($followeduserfollowingquery) >= 0){
                            $followeduserfollowingarray = [];
                            while($row = mysqli_fetch_assoc($followeduserfollowingquery)){
                                $followeduserfollowingarray[] = $row['userfollowing']; //current user following
                            }
                        }
                    }
                    //array values end here
                    $message = [
                        'response' => "Successful",
                        'followeduserfollowingcounts' => $followeduserfollowingcounts,
                        'followedusercounts' => $followedusercounts,
                        'follow_followeduserarray' => $follow_followeduserarray,
                        'followeduserfollowingarray' => $followeduserfollowingarray
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