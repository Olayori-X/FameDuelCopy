<?php
include 'connect.php';
include 'validate.php';
//The “db_contact” is our database name that we created before.
//After connection database you need to take post variable from the form. See the below code
// $txtfirstName = $_POST['firNme'];
// $txtlastName = $_POST['lasNme'];
// $txtPhone = $_POST['phnNo'];
$txtEmail = validate($_POST['email']);
// $txtCountry = $_POST['country'];
// $txtState = $_POST['state'];
// $txtCity = $_POST['city'];
$txtPassword = validate($_POST['password']);
$txtUsername = validate($_POST['username']);
$txtCompanyCode = validate($_POST['code']);

if($txtCompanyCode == $code){
	$UserVerification = "SELECT Username FROM users WHERE Username = '$txtUsername'";
	$UserQuery = mysqli_query($connect, $UserVerification);

	if($UserQuery -> num_rows > 0){
		while($row = $UserQuery->fetch_assoc()) {
			echo $row['Username'];
			if($row['Username'] === $txtUsername){

				header("Location: adminsignup.php?error=This Username exists");
				echo "This Username exists";

			}else {
				$sql = "INSERT INTO users (Email, Username, Password) VALUES ('$txtEmail', '$txtUsername','$txtPassword')";

				// insert in database 
				$rs = mysqli_query($connect, $sql);

				if($rs){
					echo "Account successfully created";
					header("Location: adminlogin.php");
					exit();
				}
			}
		}
	}else{
		$sql = "INSERT INTO users (Email, Username, Password) VALUES ('$txtEmail', '$txtUsername','$txtPassword')";

		// insert in database 
		$rs = mysqli_query($connect, $sql);

		if($rs){
			echo "Account successfully ceated";
			header("Location: adminlogin.php");
			exit();
		}
	}
}
else{
	header("Location: adminsignup.php?error=Incorrect Company Code");
}
?>

