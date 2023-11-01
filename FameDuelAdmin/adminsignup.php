<?php if(isset($_GET['key'])){ ?>
<!DOCTYPE html>
<html>
<head>
  <title>Sign Up</title>
  <link rel="stylesheet" type="text/css" href="signupstyle.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
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
          <form id="signupForm" action="admincreateusers.php" method="post">
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

            <div class="form-group">
              <label for="username">Input Company Code</label>
              <input type="password" id="code" name="code" required>
            </div>

            <button type="submit" name = "submit" class = "btn btn-primary">Sign Up</button>
            <p>If you have an account, <a href = "adminlogin.php">Log In</a></p>
          </form>
        </main>
      </div>
    </div>
  </div>

  <footer class="bg-dark text-light text-center py-3 mt-5 fixed-bottom">
    &copy; 2023 Fame Duel. All rights reserved.
</footer>
</body>
</html>
<?php }else{
  header("Location: register.php");
}