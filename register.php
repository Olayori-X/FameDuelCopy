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
      <?php if(isset($_GET['message'])){?>
        <p class = "message"><?php echo $_GET['message']; ?></p>
      <?php } ?>
      <form id="signupForm" action="validatemail.php" method="post">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required>
        </div>

        <button type="submit">Validate Mail</button>
        <p>If you have an account, <a href = "Login.php">Log In</a></p>
      </form>
    </main>
  </div>

  <footer>
    2023 Fame Duel. All rights reserved.
  </footer>
</body>
</html>
