<?php
if($_SERVER['REQUEST_METHOD'] === 'GET'){

    $contestid = validate($_GET['contestid']);

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
                $useridlikesarray[] = $row['userliking']; //users that liked a contest
            }

            $userlikesarray = [];
            for($i=0; $i < count($useridlikesarray); $i++){
                $id = $useridlikesarray[0]['userid'];
                $getuserprofile = "SELECT * FROM users WHERE userid = '$id'";
                $getuserprofilequery = mysqli_query($connect, $getuserprofile);

                if($getuserprofilequery){
                    if(mysqli_num_rows($getuserprofilequery) > 0){
                        while($row = mysqli_fetch_assoc($getuserprofilequery)){
                            unset($row['Password']);
                            unset($row['id']);
                            $userlikesarray[] = $row;
                        }
                    }
                }
            }
        }
    }
    //array values end here

    $message = [
        'response' => "successful",
        'userlikescounts' => $userlikescounts,
        'userlikes' => $userlikesarray,
    ];

    header('Content-Type: application/json');
    echo json_encode($message); 
}else{
    http_response_code(405);
}