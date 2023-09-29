<!DOCTYPE html>
<html>
    <head>
        <title>Forgot Password</title>
        <link rel = "stylesheet" href = "signupstyle.css">
    </head>
    <body>
        <header>
          <h1>Fame Duel</h1>
        </header>
    
        <div class="container">
            <main>
                <?php if(isset($_GET['message'])){?>
                    <p class = "message"><?php echo $_GET['message']; ?></p>
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
 
        <footer>
            2023 Fame Duel. All rights reserved.
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