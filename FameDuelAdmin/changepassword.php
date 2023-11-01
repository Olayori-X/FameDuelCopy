<DOCTYPE html>
<html>
    <head>
        <title>Change Password</title>
        <link rel = "stylesheet" href = "signupstyle.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
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

                        <form id = "" action = "passwordchange.php" method = "POST">
                            <?php
                                include 'connect.php';
                                include 'validate.php';
                                if(isset($_GET['key'])){
                                    $key = $_GET['key'];
                                

                                    $check = "SELECT Username FROM adminusers WHERE Email = '$key' ";

                                    $confirm = mysqli_query($connect, $check);

                                    if (mysqli_num_rows($confirm) >= 1) {
                                        $username = [];

                                        while($row = mysqli_fetch_array($confirm)){
                                            $username[] = $row['Username'];
                                        }
                                    }
                            ?>
                            <div class = "form-group">
                                <label>New Password</label><br>
                                <input type = "password" id = "nPass" name = "nPass"><br><br>
                            </div>

                            <div class = "form-group">
                                <label>Confirm Password</label><br>
                                <input type = "password" id = "cPass" name = "cPass"><br><br>
                            </div>

                            <input type ="hidden" name = "username" value= "<?php echo $username[0]; ?>">

                            <button type ="submit" class = "btn btn-primary">Change</button>
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
<?php 
    }else{
        header("Location: Login.php");
    } 
?>