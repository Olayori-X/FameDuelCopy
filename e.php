<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

    session_start(); 
    $email = $_SESSION['Email'];

    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username= 'fameduel@gmail.com';
    $mail->Password = 'jjugsfnxyerroyoj';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    $mail->setFrom('olayori045@gmail.com');

    $mail->addAddress($email);

    $mail->isHTML(true);

    $mail->Subject = "Link to change your password";
    $mail->Body = "Click <a href = 'localhost/ppreference/changepassword.php?key=$email'>here</a> to change your password";

    $mail->send();

    echo
    "
    <script>
    alert('Sent Successfully');
    document.location.href = 'ForgotPassword.php';
    </script>
    ";
?>