<DOCTYPE html>
<html>
    <head>
        <title>Change Password</title>
        <link rel = "stylesheet" href = "signupstyle.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
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
                                

                                    $check = "SELECT Username FROM users WHERE Email = '$key' ";

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

                            <input type = "hidden" name = "username" value="<?php echo $username[0] ?>">

                            <button type ="submit" class = "btn btn-primary">Change</button>
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
<?php 
    }else{
        header("Location: Login.php");
    } 
?>