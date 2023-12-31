<!DOCTYPE html>
<html>
    <head>
        <title>Forgot Password</title>
        <link rel = "stylesheet" href = "signupstyle.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
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
            &copy; 2023 Fame Duel. All rights reserved.
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