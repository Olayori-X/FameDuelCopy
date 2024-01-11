<?php
// session_start();

include 'connect.php';



// if (isset($_POST['submit'])) {
if($_SERVER['REQUEST_METHOD'] === 'POST'){
	include 'validate.php';

    $data = file_get_contents("php://input");
    $values = json_decode($data, true);

    $username = validate($values['username']);
	$password = md5(validate($values['password']));

	// $username = validate($_POST['username']);
	// $password = md5(validate($_POST['password']));

	if (empty($username)){
		// header("Location: ../Login.php?message=Username is required");
		// exit();
        $response = [
            'message' => 'Username is required'
        ];
	}else if(empty($password)) {
		// header("Location: ../Login.php?message=Password is required");
		// exit();
        $response = [
            'message' => 'Password is required'
        ];
	}else{
		$info = "SELECT * FROM users WHERE Username = '$username' ";
		$SQLpass = mysqli_query($connect, $info);

		if (mysqli_num_rows($SQLpass) === 1) {
		$row = mysqli_fetch_assoc($SQLpass);

			if($row['Password'] === $password){
				// $_SESSION['Username'] = $row['Username'];
				// header("Location: ../index.php");
				// exit();
                $response = [
                    'message' => 'Success'
                ];
			}else{
				// header("Location: ../Login.php?message=Incorrect Password");
				// exit();	
                $response = [
                    'message' => 'Incorrect Password'
                ];
			}

		}else{
			// header("Location: ../Login.php?message=Incorrect Username");
			// exit();	
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