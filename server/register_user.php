<?php
if($_SERVER['REQUEST_METHOD'] === "POST"){
	include 'connect.php';
	include "validate.php";

    $data = file_get_contents("php://input");
    $values = json_decode($data, true);
	//The “db_contact” is our database name that we created before.
	//After connection database you need to take post variable from the form. See the below code
	// $txtfirstName = $_POST['firNme'];
	// $txtlastName = $_POST['lasNme'];
	// $txtPhone = $_POST['phnNo'];
	$txtEmail = validate($values['email']);
	// $txtCountry = $_POST['country'];
	// $txtState = $_POST['state'];
	// $txtCity = $_POST['city'];
	$txtPassword = md5(validate($values['password']));
	$txtUsername = validate($values['username']);
	$codedotp = md5(validate($values['otp']));
	$otp = validate($values['otp']);

	$UserVerification = "SELECT * FROM users WHERE Username = '$txtUsername' OR Email = '$txtEmail'";
	$UserQuery = mysqli_query($connect, $UserVerification);

	if($UserQuery -> num_rows > 0){
		while($row = $UserQuery->fetch_assoc()) {
			if($row['Username'] === $txtUsername){
				header("Location: ../Signup.php?message=This Username exists&&key=$txtEmail&&otp=$otp");

			}elseif($row['Email'] === $txtEmail){
				header("Location: ../Signup.php?message=This Email exists&&key=$txtEmail&&otp=$otp");

			}else {
				$sql = "INSERT INTO users (Email, gamecard,  Username, Password) VALUES ('$txtEmail', 0, '$txtUsername','$txtPassword')";

				// insert in database 
				$rs = mysqli_query($connect, $sql);

				if($rs){
				    $updatelinkstatus = "UPDATE linkstatus SET used = true WHERE number = '$codedotp'";
				    $updatequery = mysqli_query($connect, $updatelinkstatus);
				    if($updatequery){
					    header("Location: ../Login.php");
					    exit();
				    }
				}
			}
		}
	}else{
		if($_POST['image']){
			$target_dir = "C:/Xampp/htdocs/FameDuel/uploads/";
			$target_file = $target_dir . basename($_FILES["image"]["name"]);
			$uploadOk = 1;
			$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

			// Check if image file is a actual image or fake image
			$check = getimagesize($_FILES["image"]["tmp_name"]);
			if($check !== false) {
				$uploadOk = 1;
			} else {
				header("Location: ../Signup.php?message=File is not an image.");
				$uploadOk = 0;
			}

			// Check if file already exists
			if (file_exists($target_file)) {
				header("Location: ../Signup.php?message=Sorry, file already exists.");
				$uploadOk = 0;
			}

			// Check file size
			if ($_FILES["image"]["size"] > 50000) {
				header("Location: ../Signup.php?message=Sorry, File limit is 50MB");
				$uploadOk = 0;
			}

			// Allow certain file formats
			if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
			&& $imageFileType != "gif" ) {
			header("Location: ../Signup.php?message=Sorry, only JPG, JPEG, PNG & GIF files are allowed.");
			$uploadOk = 0;
			}

			// Check if $uploadOk is set to 0 by an error
			if ($uploadOk == 0) {
				header("Location: ../Signup.php?message= Sorry your file was not uploaded");
				// if everything is ok, try to upload file
			} else {
				if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {
					$image = "uploads/" . basename($_FILES["image"]["name"]);
					$sql = "INSERT INTO users (Email, gamecard, rank, Username, profilepic, Password) VALUES ('$txtEmail', 0, 'Novice', '$txtUsername', '$image','$txtPassword')";

					// insert in database 
					$rs = mysqli_query($connect, $sql);

					if($rs){
						$updatelinkstatus = "UPDATE linkstatus SET used = true WHERE number = '$codedotp'";
						$updatequery = mysqli_query($connect, $updatelinkstatus);
						if($updatequery){
							header("Location: ../Login.php");
							exit();
						}
					}																																				
				} else {
					header("Location: ../Signup.php?message=Sorry, there was an error uploading your file.");
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
					header("Location: ../Login.php");
					exit();
				}
			}
		}
	}
}else{
	header("Location: ../Signup.php");
}
?>
