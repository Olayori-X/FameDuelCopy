<?php


    if(isset($_POST['username']) && isset($_POST['nPass']) && isset($_POST['cPass'])){
        include "connect.php";
        include "validate.php";
        
            $pass = validate($_POST['nPass']);
            $passtwo = validate($_POST['cPass']);
            $username = validate($_POST['username']);


            if(empty($pass)){
                header("Location: changepassword.php?error=You have not input your new password");
            }    
            elseif(!($pass == $passtwo)){
                header("Location: changepassword.php?error=The passwords do not match");
            }
            else{
                $update = "UPDATE users SET Password = '$pass' WHERE Username = '$username'";
                $queryupdate = mysqli_query($connect, $update);

                if($queryupdate){
                    header('Location: Login.php');
                }
            }
        }
?>