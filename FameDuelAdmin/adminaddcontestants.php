<?php
session_start();
    if(isset($_SESSION["Username"])){
        $username = $_SESSION["Username"];
?>
<!DOCTYPE html>
<html>
<head>
    <title>Vote your Choice</title>
    <!-- Add Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <style>
        #output{
            background-image:url('profile.png');
            background-repeat: no-repeat;
            width: 200px;
            height: 200px;
        }
    </style>
</head>

<body>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Fame Duel Admin Panel</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="admin.php">Dashboard</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Users</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Products</a>
                </li>
                <li class="nav-item">
                    <div class="dropdown">
                        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Settings
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="adminaddcontestants.php">Add Contestants</a>
                            <a class="dropdown-item" href="delete.php">Delete Contestants</a>
                            <a class="dropdown-item" href="#">Option 3</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </nav>


<div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <?php if(isset($_GET['message'])){?>
                <p><?php echo $_GET['message']; ?></p>
            <?php } ?>
            <form method="post" action="uploadimage.php" class="border p-4" enctype="multipart/form-data">

                <!-- File Input Group -->
                <div class="form-group">
                    <label for="file" class="d-block">Upload Image</label>
                    <input type="file" accept="image/*" name="image" id="file" onchange="loadFile(event);" class="form-control-file" required>
                </div>

                <!-- Image Preview -->
                <div class="form-group">
                    <img id="output" width="200" height= "200px" class="img-thumbnail" />
                </div>

                <div class = "form-group">
                    <label for="username" class="d-block">Input Username</label>
                    <input type="text" name="username" id="username" required>
                </div>

                <!-- Submit Button -->
                <div class="form-group">
                    <input type="submit" class="btn btn-primary" value="Submit" name = "submit">
                </div>

            </form>
        </div>
    </div>
</div>

<!-- Add Bootstrap JS and jQuery (required for Bootstrap) -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

<script>
    var loadFile = function(event) {
        var image = document.getElementById('output');
        image.src = URL.createObjectURL(event.target.files[0]);
    };
</script>

</body>
</html>
<?php
    }else{
        header("Location: adminlogin.php");
    }
?>