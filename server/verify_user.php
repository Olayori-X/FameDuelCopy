<?php
if($_SERVER['REQUEST_METHOD'] === 'POST'){
	include 'connect.php';
	include 'validate.php';

	$data = file_get_contents("php://input");
    $values = json_decode($data, true);

	$userid = validate($values['userid']);
	$code = md5(validate($values['code']));

	$getcode = "SELECT code FROM users WHERE userid = '$userid'";
	$getcodequery = mysqli_query($connect, $getcode);

	if($getcodequery){
		$row = mysqli_fetch_assoc($getcodequery);
		if($code === $row['code']){
			$verifyuser = "UPDATE users SET verified = true WHERE userid = '$userid'";
			$verifyuserquery = mysqli_query($connect, $verifyuser);

			if($verifyuser){
				$response = [
					'response' => 'successful',
					'userid' => $userid
				];
			}
		}else{
			$response = [
				'response' => 'error',
				'message' => 'Code is not a match'
			];
		}
	}

	header('Content-Type: application/json');
    echo json_encode($response); 
}