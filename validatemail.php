<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';
    require 'phpmailer/src/SMTP.php';
 
    if(isset($_POST['email'])){
        $email = $_POST['email'];
        $min = 100000000000000;  // 10-digit number with all digits being 0
        $max = 999999999999999;  // 10-digit number with all digits being 9
        
        $otp = random_int($min, $max);


        $mail = new PHPMailer(true);

        $mail->isSMTP();
        $mail->Host = 'vote.netcarvers.com.ng';
        $mail->SMTPAuth = true;
        $mail->Username= 'fameduel@vote.netcarvers.com.ng';
        $mail->Password = 'Gn=&hePO39DX';
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;

        $mail->setFrom('fameduel@vote.netcarvers.com.ng');

        $mail->addAddress($email);

        $mail->isHTML(true);

        $mail->Subject = "Validate your Email";
        $mail->Body = "Click <a href = 'localhost/FameDuel/Signup.php?key=$email&&otp=$otp'>here</a> to continue registration";

        if($mail->send()){
            include "connect.php";
            $codedotp = md5($otp);
            $insertcode = "INSERT INTO linkstatus(number, used) VALUES('$codedotp', false)";
            $insertquery = mysqli_query($connect, $insertcode);

            if($insertquery){
                header("Location: register.php?message=A link has been sent to your mail");
            }
        }
    }else{
        header("Location: Login.php");
    }
    
?>

