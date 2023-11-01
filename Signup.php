<?php if(isset($_GET['key'])){ ?>
<!DOCTYPE html>
<html>
<head>
  <title>Sign Up</title>
  <link rel="stylesheet" type="text/css" href="signupstyle.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
</head>
<body>
  <header>
    <h1>Sign Up</h1>
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
              <input type="email" value= "<?php echo $_GET['key']; ?>" id="email" name="email" readonly>
            </div>

            <div class="form-group">
              <label for="username">Username</label>
              <input type="text" id="username" name="username" required>
            </div>

            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" id="password" name="password" required>
            </div>

            <button type="submit" name = "submit" class = "btn btn-primary">Sign Up</button>
            <p>If you have an account, <a href = "Login.php">Log In</a></p>
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
</body>
</html>
<?php }else{
  header("Location: register.php");
}