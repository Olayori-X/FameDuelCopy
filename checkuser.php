<?php
session_start();

include 'connect.php';



if (isset($_POST['username']) && isset($_POST['password'])) {
	include 'validate.php';
	
	$username = validate($_POST['username']);
	$password = validate($_POST['password']);

	if (empty($username)){
		header("Location: Login.php?error=Username is required");
		exit();
	}else if(empty($password)) {
		header("Location: Login.php?error=Password is required");
		exit();
	}else{
		$info = "SELECT * FROM users WHERE Username = '$username' ";
		$SQLpass = mysqli_query($connect, $info);
		echo $username;

		if (mysqli_num_rows($SQLpass) === 1) {
		$row = mysqli_fetch_assoc($SQLpass);

			if($row['Password'] === $password){
				echo "Logged in!";
				$_SESSION['Username'] = $row['Username'];
				echo $_SESSION['Username'];
				header("Location: vote.php");
				exit();
			}else{
				header("Location: Login.php?error=Incorrect Password");
				exit();	
			}

		}else{
			header("Location: Login.php?error=Incorrect Username");
			exit();	
	}
}
}
?>