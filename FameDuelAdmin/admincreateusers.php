<?php
if(isset($_POST['submit'])){
	include 'connect.php';
	include 'validate.php';
	
	$email = validate($_POST['email']);
	$txtPassword = validate($_POST['password']);
	$txtUsername = validate($_POST['username']);
	$txtCompanyCode = validate($_POST['code']);

	if($txtCompanyCode == $code){
		$UserVerification = "SELECT Username FROM adminusers WHERE Username = '$txtUsername'";
		$UserQuery = mysqli_query($connect, $UserVerification);

		if($UserQuery -> num_rows > 0){
			while($row = $UserQuery->fetch_assoc()) {
				if($row['Username'] === $txtUsername){
					header("Location: adminsignup.php?message=This Username exists&&key=$email");

				}elseif($row['Email'] === $email){
					header("Location: adminsignup.php?message=This Email exists&&key=$email");

				}else {
					$sql = "INSERT INTO adminusers (Email, Username, Password) VALUES ('$email', '$txtUsername','$txtPassword')";

					$rs = mysqli_query($connect, $sql);

					if($rs){
						header("Location: adminlogin.php");
						exit();
					}
				}
			}
		}else{
			$sql = "INSERT INTO adminusers (Email, Username, Password) VALUES ('$email', '$txtUsername','$txtPassword')";

			$rs = mysqli_query($connect, $sql);

			if($rs){
				header("Location: adminlogin.php");
				exit();
			}
		}
	}
	else{
		header("Location: adminsignup.php?message=Incorrect Company Code&&key=$email");
	}
}else{
	header("Location: adminsignup.php");
}
?>

