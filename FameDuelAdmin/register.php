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
              <p class = "message"><?php echo $_GET['message']; ?></p>
            <?php } ?>
            <form id="signupForm" action="validatemail.php" method="post">
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" required>
            </div>

            <button type="submit">Validate Mail</button>
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
