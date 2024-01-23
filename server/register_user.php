<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if($_SERVER['REQUEST_METHOD'] === "POST"){
	include 'connect.php';
	include "validate.php";

	function sendmail($email){		
		require 'phpmailer/src/Exception.php';
		require 'phpmailer/src/PHPMailer.php';
		require 'phpmailer/src/SMTP.php';

		$mail = new PHPMailer(true);

        $mail->isSMTP();
        $mail->Host = 'vote.netcarvers.com.ng';
        $mail->SMTPAuth = true;
        $mail->Username= "email to send mail";
        $mail->Password = 'password';
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;

        $mail->setFrom('fameduel@vote.netcarvers.com.ng');

        $mail->addAddress($email);

        $mail->isHTML(true);

        $mail->Subject = "Verify your account";
        $mail->Body = "Click <a href = 'localhost/FameDuel/Signup.php?key=$email>here</a> to continue registration";

        if($mail->send()){
            $codedotp = md5($otp);
            $insertcode = "INSERT INTO linkstatus(number, used) VALUES('$codedotp', false)";
            $insertquery = mysqli_query($connect, $insertcode);

            if($insertquery){
                header("Location: ../register.php?message=A link has been sent to your mail");
            }
        }
	}

	$txtfirstName = $_POST['firNme'];
	$txtlastName = $_POST['lasNme'];
	$txtPhone = $_POST['phnNo'];
	$txtEmail = validate($_POST['email']);
	$txtCountry = $_POST['country'];
	$txtState = $_POST['state'];
	$txtCity = $_POST['city'];
	$txtPassword = md5(validate($_POST['password']));
	$txtUsername = validate($_POST['username']);
	$codedotp = md5(validate($_POST['otp']));
	$otp = validate($_POST['otp']);

	$getlastuserid = "SELECT userid FROM users ORDER BY id DESC LIMIT 1";
	$getquery = mysqli_query($connect, $getlastuserid);

	if($getquery){
		$row = mysqli_fetch_assoc($getquery);
		$data = $row['id'] + 1;
		$userid = "user" . $data;
	}

	$UserVerification = "SELECT * FROM users WHERE Username = '$txtUsername' OR Email = '$txtEmail'";
	$UserQuery = mysqli_query($connect, $UserVerification);

	if($UserQuery -> num_rows > 0){
		while($row = $UserQuery->fetch_assoc()) {
			if($row['Username'] === $txtUsername){
				$message = ['message' => 'This username exists'];

			}elseif($row['Email'] === $txtEmail){
				$message = ['message' => 'This email exists'];

			}else {
				$sql = "INSERT INTO users (Email, gamecard,  Username, Password) VALUES ('$txtEmail', 0, '$txtUsername','$txtPassword')";

				// insert in database 
				$rs = mysqli_query($connect, $sql);

				if($rs){
				    sendmail($email);
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
			if($check == false) {
				$message = ["message" => "File is not an image."];
			} else {
				$uploadOk = 1;
				if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {
					$image = "server/uploads/" . basename($_FILES["image"]["name"]);
					$sql = "INSERT INTO users (userid, Email, gamecard, rank, Username, profilepic, Password) VALUES ('$userid', '$txtEmail', 0, 'Novice', '$txtUsername', '$image','$txtPassword')";

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
					$message = ["message" => "Sorry, there was an error uploading your file."];
				}
			}
		}else{
			$sql = "INSERT INTO users (userid, Email, gamecard, rank, Username, Password) VALUES ('$userid', '$txtEmail', 0, 'Novice', '$txtUsername','$txtPassword')";

			// insert in database 
			$rs = mysqli_query($connect, $sql);

			if($rs){
				sendmail($email);
			}
		}
	}
}else{
	header("Location: ../Signup.php");
}
?>
