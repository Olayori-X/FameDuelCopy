<!DOCTYPE html>
<html>
    <head>
        <title>Forgot Password</title>
        <link rel = "stylesheet" href = "signupstyle.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
        <link rel="icon" href="assets/favicon.png" type="image/png">
  <meta property="og:title" content="FameDuel">
    <meta property="og:description" content="Select your favourite ❤">
    <meta property="og:image" content="https://netcarvers.com.ng/FunDuel/assets/logo.png">
    <meta property="og:url" content="https://www.netcarvers.com.ng/FunDuel/index.php">
    </head>
    <body>
        <header>
          <h1>Fun Duel</h1>
        </header>
    
        <div class="container mt-5">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-6">
                    <main class="bg-light p-4 rounded">
                    <?php if(isset($_GET['message'])){?>
                        <p class="message text-danger"><?php echo $_GET['message']; ?></p>
                    <?php } ?>

                    <form id= "formail" action = "getEmail.php" method = "post">
                        <div class = "form-group">
                            <label for = "email">Email</label>
                            <input type ="email" id= "email" name = "email" required><br>
                        </div>
                        
                        <button type = "Submit" name = "send">Continue</button><br>
                        <button type = "button" onclick = "Use_Username()">Use Username Instead</button>
                    </form>

                    <form id= "forusername" action = "getEmail.php" method = "post" style="display: none">
                        <div class = "form-group">
                            <label for = "username">Username</label>
                            <input type ="text" id= "username" name = "username" required><br>
                        </div>
                        
                        <button type = "Submit" name = "send">Continue</button><br>
                        <button type = "button" onclick = "Use_Email()">Use Email Instead</button>
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
    function Use_Username(){
        document.getElementById("formail").style.display = "none";
        document.getElementById("forusername").style.display = "block";
    }

    function Use_Email(){
        document.getElementById("formail").style.display = "block";
        document.getElementById("forusername").style.display = "none";
    }
</script>
 </body>
</html>