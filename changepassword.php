<?php
    include 'server/connect.php';
    include 'server/validate.php';
    if(isset($_GET['key'])&&isset($_GET['otp'])){
        $key = $_GET['key'];
        $codedotp = md5($_GET['otp']);
    

        $check = "SELECT Username FROM users WHERE Email = '$key' ";

        $confirm = mysqli_query($connect, $check);

        if (mysqli_num_rows($confirm) >= 1) {
            $username = [];

            while($row = mysqli_fetch_array($confirm)){
                $username[] = $row['Username'];
            }
        }
        
        $checkotp = "SELECT * FROM changepasswordlinkstatus WHERE number = '$codedotp'";
        $checkquery = mysqli_query($connect, $checkotp);
        
        if($checkquery){
            if (mysqli_num_rows($checkquery) === 1) {
                $row = mysqli_fetch_assoc($checkquery);
                
                if($row['used'] == true){
                    echo "This link has expired. Click <a href = register.php>here</a> to get a new link";
                }else{
                    
?>
<DOCTYPE html>
<html>
    <head>
        <title>Change Password</title>
        <link rel = "stylesheet" href = "signupstyle.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
        <link rel="icon" href="assets/favicon.png" type="image/png">
  <meta property="og:title" content="FunDuel">
    <meta property="og:description" content="Select your favourite ❤">
    <meta property="og:image" content="https://netcarvers.com.ng/FunDuel/assets/logo.png">
    <meta property="og:url" content="https://www.netcarvers.com.ng/FunDuel/index.php">
    
    <style>
      .password-container {
            position: relative;
            width: 100%; /* Adjust the width as needed */
        }

        .password-icon {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 10px; /* Adjust the right position as needed */
            cursor: pointer;
        }
  </style>
    </head>
    <body>
        <header>
          <h1>Fame Duel</h1>
        </header>

        <div class="container mt-5">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-6">
                    <main class="bg-light p-4 rounded">
                    <?php if(isset($_GET['message'])){?>
                       <p class="message text-danger"><?php echo $_GET['message']; ?></p>
                    <?php } ?>

                        <form id = "" action = "server/passwordchange.php" method = "POST">
                            
                            <div class = "form-group">
                                <label>New Password</label><br>
                                <div class="password-container">
                                    <input type = "password" id = "nPass" name = "nPass" required><i class="fas fa-eye-slash password-icon" id="toggleIcon"></i>
                                </div>
                            </div>

                            <div class = "form-group">
                                <label>Confirm Password</label><br>
                                <div class="password-container">
                                    <input type = "password" id = "cPass" name = "cPass" required><i class="fas fa-eye-slash password-icon" id="toggleIcon2"></i>
                                </div>
                            </div>

                            <input type = "hidden" name = "username" value="<?php echo $username[0] ?>">
                            <input type = "hidden" name = "email" value = "<?php echo $_GET['key'];?>">
                            <input type = "hidden" name = "otp" value = "<?php echo $_GET['otp'];?>">

                            <button type ="submit" name = "submit" class = "btn btn-primary">Change</button>
                        </form>
                    </main>
                </div>
            </div>
        </div>

        <footer class="bg-dark text-light text-center py-3 mt-5 fixed-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <p>&copy; 2023 Fame Duel. All rights reserved.</p>
                    </div>
                    <div class="col-md-6 text-right">
                        <a href="https://wa.me/+2347086181412" class="text-white mr-3"><i class="fab fa-whatsapp"></i></a>
                        <a href="mailto:fameduel@gmail.com" class="text-white mr-3"><i class="fas fa-envelope"></i> Contact Us</a>
                        <a href="logout.php" class="text-white"><i class="fas fa-sign-out-alt"></i> Log Out</a>
                        <p><i class="fas fa-phone"></i> Phone: +2347086181412</p>
                    </div>
                </div>
            </div>
        </footer>
        <script>
        const passwordInput = document.getElementById('nPass');
        const passwordInput2 = document.getElementById('cPass');
        const toggleIcon = document.getElementById('toggleIcon');
        const toggleIcon2 = document.getElementById('toggleIcon2');

        toggleIcon.addEventListener('click', () => {
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                toggleIcon.classList.remove('fa-eye-slash');
                toggleIcon.classList.add('fa-eye');
            } else {
                passwordInput.type = 'password';
                toggleIcon.classList.remove('fa-eye');
                toggleIcon.classList.add('fa-eye-slash');
            }
        });
        
        toggleIcon2.addEventListener('click', () => {
            if (passwordInput2.type === 'password') {
                passwordInput2.type = 'text';
                toggleIcon2.classList.remove('fa-eye-slash');
                toggleIcon2.classList.add('fa-eye');
            } else {
                passwordInput2.type = 'password';
                toggleIcon2.classList.remove('fa-eye');
                toggleIcon2.classList.add('fa-eye-slash');
            }
        });
</script>
    </body>
</html>
<?php 
                }
        }else{
            echo "This link does not exist. Click <a href = Login.php>here</a> to get a link";
        }
    }else{
        echo "Yes";
    }
}else{
  header("Location: Login.php");
}
?>