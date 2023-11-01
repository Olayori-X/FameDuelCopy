<?php
    include 'connect.php';
    include "validate.php";
    
    if(isset($_POST["email"])){
        $email = validate($_POST['email']);

        if(empty($email)){
            header("Location: ForgotPassword?message=Email is required");
        }
        else{
            $check = "SELECT Username FROM users WHERE Email = '$email' ";

            $confirm = mysqli_query($connect, $check);

            if (mysqli_num_rows($confirm) >= 1) {
                $username = [];
                session_start();
                $_SESSION['Email'] = $email;
                header("Location: e.php");

        
            }else{
                header("Location: ForgotPassword.php?message=Email does not exist");
            }
        }
            
    }elseif(isset($_POST["username"])){
        $username = validate($_POST['username']);
        if(empty($username)){
            header("Location: ForgotPassword.php?message=Username is required");
        }
        else{
            $checkusername = "SELECT * FROM users WHERE Username = '$username' ";
            $confirmusername = mysqli_query($connect, $checkusername);

            if(mysqli_num_rows($confirmusername) < 1){
                header("Location: ForgotPassword.php?message=Username does not exist");
            }
            else{
                session_start();
                while($row = mysqli_fetch_array($confirmusername)){
                    $_SESSION['Email'] = $row['Email'];
                }
                header("Location: e.php");
            }
        }
    }else{
        header("Location: Login.php");
    }
    ?>