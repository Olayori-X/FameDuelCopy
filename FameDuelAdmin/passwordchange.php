<?php
    if(isset($_POST['username']) && isset($_POST['nPass']) && isset($_POST['cPass'])){
        include "connect.php";
        include "validate.php";
        
        $pass = validate($_POST['nPass']);
        $passtwo = validate($_POST['cPass']);
        $username = validate($_POST['username']);


        if(empty($pass)){
            header("Location: changepassword.php?message=You have not input your new password");
        }    
        elseif(!($pass == $passtwo)){
            header("Location: changepassword.php?message=The passwords do not match");
        }
        else{
            $update = "UPDATE adminusers SET Password = '$pass' WHERE Username = '$username'";
            $queryupdate = mysqli_query($connect, $update);

            if($queryupdate){
                header('Location: adminlogin.php');
            }
        }
    }else{
        header("Location: adminlogin.php");
    }
?>