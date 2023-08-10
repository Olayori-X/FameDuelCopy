<!DOCTYPE html>
<html>
<head>
  <title>Login</title>
  <link rel="stylesheet" type="text/css" href="loginstyle.css">
</head>
<body>
  <header>
    <h1>Login</h1>
  </header>

  <div class="container">
    <main>
      <?php if(isset($_GET['error'])){?>
        <p class = "error"><?php echo $_GET['error']; ?></p>
      <?php } ?>
      <form id="loginForm" action="checkuser.php" method="post">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" name="username" required>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" required>
        </div>
        <button type="submit">Log In</button>
        <p>If you haven't created an account, <a href = "Signup.php">Sign up</a> here</p>
      </form>
    </main>
  </div>

  <footer>
    &copy; 2023 Login Page. All rights reserved.
  </footer>
</body>
</html>
