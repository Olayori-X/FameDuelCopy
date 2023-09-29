<?php
session_start();

include 'connect.php';



if (isset($_POST['username']) && isset($_POST['password'])) {
	include 'validate.php';
	
	$username = validate($_POST['username']);
	$password = validate($_POST['password']);

	if (empty($username)){
		header("Location: Login.php?message=Username is required");
		exit();
	}else if(empty($password)) {
		header("Location: Login.php?message=Password is required");
		exit();
	}else{
		$info = "SELECT * FROM adminusers WHERE Username = '$username' ";
		$SQLpass = mysqli_query($connect, $info);

		if (mysqli_num_rows($SQLpass) === 1) {
		$row = mysqli_fetch_assoc($SQLpass);

			if($row['Password'] === $password){
				$_SESSION['Username'] = $row['Username'];
				header("Location: admin.php");
				exit();
			}else{
				header("Location: adminlogin.php?message=Incorrect Password");
				exit();	
			}

		}else{
			header("Location: adminlogin.php?message=Incorrect Username");
			exit();	
		}
	}
}else{
	header("Location: adminlogin.php");
}
?>