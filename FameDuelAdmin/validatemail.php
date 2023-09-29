<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';
    require 'phpmailer/src/SMTP.php';

    if(isset($_POST['email'])){
        $email = $_POST['email'];

        $mail = new PHPMailer(true);

        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username= 'fameduel@gmail.com';
        $mail->Password = 'jjugsfnxyerroyoj';
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;

        $mail->setFrom('fameduel@gmail.com');

        $mail->addAddress($email);

        $mail->isHTML(true);

        $mail->Subject = "Link to change your password";
        $mail->Body = "Click <a href = 'localhost/FameDuel/Signup.php?key=$email'>here</a> to continue registration";

        $mail->send();

        echo
        "
        <script>
        alert('Sent Successfully');
        document.location.href = 'register.php?message=A link has been sent to your mail;
        </script>
        ";
    }else{
        header("Locaation: adminlogin.php");
    }
?>