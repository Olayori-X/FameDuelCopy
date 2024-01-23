<?php

include 'connect.php';


if($_SERVER['REQUEST_METHOD'] === 'POST'){
	include 'validate.php';

    $data = file_get_contents("php://input");
    $values = json_decode($data, true);

    $username = validate($values['username']);
	$password = md5(validate($values['password']));

	if (empty($username)){
        $response = [
            'message' => 'Username is required'
        ];
	}else if(empty($password)) {
        $response = [
            'message' => 'Password is required'
        ];
	}else{
		$info = "SELECT * FROM users WHERE Username = '$username' ";
		$SQLpass = mysqli_query($connect, $info);

		if (mysqli_num_rows($SQLpass) === 1) {
		$row = mysqli_fetch_assoc($SQLpass);

			if($row['Password'] === $password){
                unset($row['Password']);
                unset($row['id']);

                $response = $row;

			}else{	
                $response = [
                    'message' => 'Incorrect Password'
                ];
			}

		}else{	
            $response = [
                'message' => 'Incorrect Username'
            ];
		}
	}

    header("Content-Type: application/json");
    echo json_encode($response);
}else{
	header("Location: Login.php");
}
?>