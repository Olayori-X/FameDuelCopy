<?php
    include "connect.php";
    include "validate.php";


    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        $data = file_get_contents("php://input");
	    $values = json_decode($data, true);

        $challenger = validate($values['challenger']);
        // $challengerpic = validate($values['challengerpic']);
        $invited = validate($values['inviteduser']);

        $getcontestid = "SELECT contestid FROM othercontests ORDER BY id DESC LIMIT 1";
        $getquery = mysqli_query($connect, $getcontestid);

        if($getquery){
            $row = mysqli_fetch_assoc($getquery);
            $data = $row['contestid'] + 1;
            $contestid = "contest" . $data;
        }

        $sendinvite = "INSERT INTO othercontests(contestid, challengerpic, challengername, inviteename, accepted) VALUES('$contestid', 'challengerpic', '$challenger', '$invited', false)";
        $sendquery = mysqli_query($connect, $sendinvite);

        if($sendquery){
            $message = [
                'statusCode' => '200'
            ];
            header('Content-Type: application/json');
            echo json_encode($message); 
        }else{
            header('Content-Type: application/json');
            echo json_encode('message');
        }
    }
?>