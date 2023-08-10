<!DOCTYPE html>
<html>
<head>
  <title>Sign Up</title>
  <link rel="stylesheet" type="text/css" href="signupstyle.css">
</head>
<body>
  <header>
    <h1>Sign Up</h1>
  </header>

  <div class="container">
    <main>
      <?php if(isset($_GET['error'])){?>
        <p class = "error"><?php echo $_GET['error']; ?></p>
      <?php } ?>
      <form id="signupForm" action="createusers.php" method="post">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required>
        </div>

        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" name="username" required>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" required>
        </div>
        <button type="submit">Sign Up</button>
        <p>If you have an account, <a href = "Login.php">Log In</a></p>
      </form>
    </main>
  </div>

  <footer>
    2023 Sign Up Page. All rights reserved.
  </footer>
</body>
</html>
