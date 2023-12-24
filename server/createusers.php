<?php
if(isset($_POST['submit'])){
	include 'connect.php';
	include "validate.php";
	//The “db_contact” is our database name that we created before.
	//After connection database you need to take post variable from the form. See the below code
	// $txtfirstName = $_POST['firNme'];
	// $txtlastName = $_POST['lasNme'];
	// $txtPhone = $_POST['phnNo'];
	$txtEmail = validate($_POST['email']);
	// $txtCountry = $_POST['country'];
	// $txtState = $_POST['state'];
	// $txtCity = $_POST['city'];
	$txtPassword = md5(validate($_POST['password']));
	$txtUsername = validate($_POST['username']);
	$codedotp = md5(validate($_POST['otp']));
	$otp = validate($_POST['otp']);

	$UserVerification = "SELECT * FROM users WHERE Username = '$txtUsername' OR Email = '$txtEmail'";
	$UserQuery = mysqli_query($connect, $UserVerification);

	if($UserQuery -> num_rows > 0){
		while($row = $UserQuery->fetch_assoc()) {
			if($row['Username'] === $txtUsername){
				header("Location: Signup.php?message=This Username exists&&key=$txtEmail&&otp=$otp");

			}elseif($row['Email'] === $txtEmail){
				header("Location: Signup.php?message=This Email exists&&key=$txtEmail&&otp=$otp");

			}else {
				$sql = "INSERT INTO users (Email, gamecard,  Username, Password) VALUES ('$txtEmail', 0, '$txtUsername','$txtPassword')";

				// insert in database 
				$rs = mysqli_query($connect, $sql);

				if($rs){
				    $updatelinkstatus = "UPDATE linkstatus SET used = true WHERE number = '$codedotp'";
				    $updatequery = mysqli_query($connect, $updatelinkstatus);
				    if($updatequery){
					    header("Location: Login.php");
					    exit();
				    }
				}
			}
		}
	}else{
		$sql = "INSERT INTO users (Email, gamecard, rank, Username, Password) VALUES ('$txtEmail', 0, 'Novice', '$txtUsername','$txtPassword')";

		// insert in database 
		$rs = mysqli_query($connect, $sql);

		if($rs){
			$updatelinkstatus = "UPDATE linkstatus SET used = true WHERE number = '$codedotp'";
		    $updatequery = mysqli_query($connect, $updatelinkstatus);
		    if($updatequery){
			    header("Location: Login.php");
			    exit();
		    }
		}
	}
}else{
	header("Location: Signup.php");
}
?>
