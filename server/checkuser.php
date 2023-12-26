<?php
session_start();

include 'connect.php';



if (isset($_POST['submit'])) {
	include 'validate.php';
	
	$username = validate($_POST['username']);
	$password = md5(validate($_POST['password']));

	if (empty($username)){
		header("Location: ../Login.php?message=Username is required");
		exit();
	}else if(empty($password)) {
		header("Location: ../Login.php?message=Password is required");
		exit();
	}else{
		$info = "SELECT * FROM users WHERE Username = '$username' ";
		$SQLpass = mysqli_query($connect, $info);

		if (mysqli_num_rows($SQLpass) === 1) {
		$row = mysqli_fetch_assoc($SQLpass);

			if($row['Password'] === $password){
				$_SESSION['Username'] = $row['Username'];
				header("Location: ../index.php");
				exit();
			}else{
				header("Location: ../Login.php?message=Incorrect Password");
				exit();	
			}

		}else{
			header("Location: ../Login.php?message=Incorrect Username");
			exit();	
		}
	}
}else{
	header("Location: Login.php");
}
?>