<?php
session_start();
$username = $_SESSION['Username'];

include 'connect.php';
function joke1API(){

    $curl = curl_init();

    curl_setopt_array($curl, [
        CURLOPT_URL => "https://api.api-ninjas.com/v1/jokes",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "GET",
        CURLOPT_HTTPHEADER => [
            "X-API-Host: https://api.api-ninjas.com/v1/jokes",
            "X-API-Key: pW81y1exr7e0zVQ+11p7+g==zJkOjVzveSJ223HU"
        ],
    ]);

    $response = curl_exec($curl);
    $err = curl_error($curl);

    curl_close($curl);

    if ($err) {
        // header("Location: index.php?message=Successful");
        $message = "Successful";
        $data = [
            'message' => $message
        ];
        header('Content-Type: application/json');
        echo json_encode($data); 
    } else {
        $jokes =  json_decode($response);
        $joke = $jokes[0]->joke;
        $message = "Successful";
        // $data = [$joke, $message];
        $data = [
            'message' => $message,
            'joke' => $joke
        ];
        header('Content-Type: application/json');
        echo json_encode($data); 
        // header("Location: index.php?reward=$joke&&message=Successful");
    }
}

function joke2API(){
    $url = 'https://v2.jokeapi.dev/joke/Pun';
    $response = file_get_contents($url);

    if ($response !== false) {
        // Process the response data here
        $jokes = json_decode($response);
        if($jokes->type == 'twopart'){
            $joke = $jokes->setup . " " . $jokes->delivery;
        }else{
            $joke = $jokes->joke;
        }
        $message = "Successful";
        $data = [
            'message' => $message,
            'joke' => $joke
        ];
        header('Content-Type: application/json');
        echo json_encode($data); 
        // header("Location: index.php?reward=$joke&&message=Successful");
    } else {
        // Handle the error
        // header("Location: index.php?message=Successful");
        $message = "Successful";
        $data = [
            'message' => $message
        ];
        header('Content-Type: application/json');
        echo json_encode($data); 
    }    
}

$functionarray = ['joke1API', 'joke2API'];

// if(isset($_POST['option'])){
if($_SERVER['REQUEST_METHOD'] === 'POST'){
    include 'validate.php';

    $data = file_get_contents("php://input");
	$values = json_decode($data, true);

    $value = $values['selectedUsername'];
    $image = $values['selectedPicture'];

    $UserVerification = "SELECT UserName FROM contestants WHERE UserName = '$username'";
    $UserQuery = mysqli_query($connect, $UserVerification);

    if($UserQuery -> num_rows > 0){
        while($row = $UserQuery->fetch_assoc()) {
            if($row['UserName'] === $username){
                // header("Location: index.php?message=This User has voted");
                $message = "This User has voted";
                $data = [$message];
                header('Content-Type: application/json');
                echo json_encode($data); 
            }
            else{
                $vote = "INSERT INTO contestants(Contestant,ContestantPic, UserName) VALUES('$value', '$image', '$username')";
                $votequery = mysqli_query($connect, $vote);
                
                if($votequery){
                    $chosenfunction = $functionarray[array_rand($functionarray)];
                    call_user_func($chosenfunction);
                }
            }
        }
    }else{
        $vote = "INSERT INTO contestants(Contestant,ContestantPic, UserName) VALUES('$value', '$image', '$username')";
        $votequery = mysqli_query($connect, $vote);
        
        if($votequery){
            $chosenfunction = $functionarray[array_rand($functionarray)];
            call_user_func($chosenfunction);
        }
    }

}else{
    header("Location: ../Login.php");
}
?>