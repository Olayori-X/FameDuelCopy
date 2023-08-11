<!DOCTYPE html>
<html>
    <head>
        <title>Forgot Password</title>
        <link rel = "stylesheet" href = "signupstyle.css">
    </head>
    <body>
        <header>
          <h1>Face Duel</h1>
        </header>
    
        <div class="container">
            <main>
                <?php if(isset($_GET['error'])){?>
                    <p class = "error"><?php echo $_GET['error']; ?></p>
                <?php } ?>

                <form class = "" action = "<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method = "post">
                    <div class = "form-group">
                        <label for = "email">Email</label>
                        <input type ="email" name = "email" value = ""><br>
                    </div>
                    <button type = "Submit" name = "send">Continue</button>
                </form>
            </main>
        </div>

        <footer>
            &copy; 2023 Fame Duel. All rights reserved.
        </footer>

        <?php
       include 'connect.php';
       include "validate.php";
        
        if(isset($_POST["email"])){

            $email = validate($_POST['email']);

            if(empty($email)){
                echo "Email is required";
            }
            else{
                $check = "SELECT Username FROM users WHERE Email = '$email' ";

                $confirm = mysqli_query($connect, $check);

                if (mysqli_num_rows($confirm) >= 1) {
                    $username = [];
                    session_start();
                    $_SESSION['Email'] = $email;

                    while($row = mysqli_fetch_array($confirm)){
                        $username[] = $row['Username'];
                    }

                    $buttons = "";

                    for($i = 0; $i < count($username); $i++){
                        $buttons .= '<form class = "" action =' . htmlspecialchars($_SERVER["PHP_SELF"]) .' method = "post">
                         <input type ="submit" name = "username" value = ' . $username[$i] . '>   </form>';
                    }
                    echo $buttons;
            
                }else{
                    echo "Email does not exist";
                }
            }
             
        }elseif(isset($_POST["username"])){
            $username = validate($_POST['username']);
            if(empty($username)){
                echo "Username is required";
            }
            else{
                $checkusername = "SELECT Username fROM users WHERE Username = '$username' ";
                $confirmusername = mysqli_query($connect, $checkusername);

                if(mysqli_num_rows($confirmusername) < 1){
                    echo "Username does not exist";
                }
                else{
                    session_start();
                    $_SESSION['Username'] = $username;
                    header("Location: e.php");
                }
            }
        }
        ?>

 </body>
</html>