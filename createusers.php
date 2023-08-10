<?php
include 'connect.php';
//The “db_contact” is our database name that we created before.
//After connection database you need to take post variable from the form. See the below code
// $txtfirstName = $_POST['firNme'];
// $txtlastName = $_POST['lasNme'];
// $txtPhone = $_POST['phnNo'];
$txtEmail = $_POST['email'];
// $txtCountry = $_POST['country'];
// $txtState = $_POST['state'];
// $txtCity = $_POST['city'];
$txtPassword = $_POST['password'];
$txtUsername = $_POST['username'];

$UserVerification = "SELECT Username FROM users WHERE Username = '$txtUsername'";
$UserQuery = mysqli_query($connect, $UserVerification);

if($UserQuery -> num_rows > 0){
	while($row = $UserQuery->fetch_assoc()) {
		echo $row['Username'];
		if($row['Username'] === $txtUsername){

			header("Location: Signup.php?error=This Username exists");
			echo "This Username exists";

		}else {
			$sql = "INSERT INTO users (Email, Username, Password) VALUES ('$txtEmail', '$txtUsername','$txtPassword')";

			// insert in database 
			$rs = mysqli_query($connect, $sql);

			if($rs){
				echo "Account successfully created";
				header("Location: Login.php");
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
		header("Location: Login.php");
		exit();
	}
}
?>

