<?php
    if(isset($_GET['key'])&&isset($_GET['otp'])){
        include "connect.php";
        $codedotp = md5($_GET['otp']);
        $checkotp = "SELECT * FROM linkstatus WHERE number = '$codedotp'";
        $checkquery = mysqli_query($connect, $checkotp);
        
        if($checkquery){
            if (mysqli_num_rows($checkquery) === 1) {
                $row = mysqli_fetch_assoc($checkquery);
                
                if($row['used'] == true){
                    echo "This link has expired. Click <a href = register.php>here</a> to get a new link";
                }else{
                    
?>
<!DOCTYPE html>
<html>
<head>
  <title>Fun Duel🏆 - Sign Up</title>
  <link rel="stylesheet" type="text/css" href="signupstyle.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
  <link rel="icon" href="assets/favicon.png" type="image/png">
    <meta property="og:title" content="Fun Duel🏆">
    <meta property="og:description" content="Support your choice✊. Emerge  Victorious🏆">
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
    <h1>Fun Duel🏆 - Sign Up</h1>
  </header>

  <div class="container mt-5">
    <div class="row justify-content-center align-items-center">
      <div class="col-md-6">
        <main class="bg-light p-4 rounded">
        <?php if(isset($_GET['message'])){?>
          <p class="message text-danger"><?php echo $_GET['message']; ?></p>
          <?php } ?>
          <form id="signupForm" action="createusers.php" method="post">
           <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" value = "<?php echo $_GET['key'];?>" name="email" readonly>
            </div>

            <div class="form-group">
              <label for="username">Username</label>
              <input type="text" id="username" name="username" required>
            </div>

            <div class="form-group">
              <label for="password">Password</label>
              <div class="password-container">
                  <input type="password" id="password" name="password" class="form-control" required>
                  <i class="fas fa-eye-slash password-icon" id="toggleIcon"></i>
                </div>
            </div>
            <input type = "hidden" name = "otp" value = "<?php echo $_GET['otp'];?>">

            <button type="submit" name = "submit" class = "btn btn-primary">Sign Up</button>
            <p>If you have an account, <a href = "Login.php">Log In</a></p>
          </form>
        </main>
      </div>
    </div>
  </div>

<footer class="bg-dark text-light text-center py-3 mt-5 fixed-bottom">
    <p>&copy; 2023 Fun Duel🏆. All rights reserved.</p>
  <div>
    <a href="mailto:fameduel@gmail.com" class="text-white mr-3"><i class="fas fa-envelope fa-2x"></i></a>
    <a href="https://wa.me/+2347086181412" class="text-white mr-3"><i class="fab fa-whatsapp fa-2x"></i></a>
    <!--<a href = "#" class="text-white mr-3"><i class="fab fa-instagram fa-2x"></i></a>-->
    <a href="https://twitter.com/The_fun_duel" class="text-white mr-3"><i class="fab fa-twitter fa-2x"></i></a>
    <br>
      <a href="https://twitter.com/The_fun_duel" class="text-white mr-2">Follow on <img src = "assets/twitter.webp" width = "20px;"/> for the latest updates
  </div>
</footer>

<script>
    const passwordInput = document.getElementById('password');
        const toggleIcon = document.getElementById('toggleIcon');

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
</script>
</body>
</html>
<?php
    }
        }else{
            echo "This link does not exist. Click <a href = register.php>here</a> to get a link";
        }
    }else{
        echo "Yes";
    }
}else{
  header("Location: register.php");
}
?>