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
<body onload = "getVotes()">
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
            <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" class="border p-4">

                <!-- File Input Group -->
                <div class="form-group">
                    <label for="file" class="d-block">Upload Image</label>
                    <input type="file" accept="image/*" name="image" id="file" onchange="loadFile(event);" class="form-control-file">
                </div>

                <!-- Image Preview -->
                <div class="form-group">
                    <img id="output" width="200" height= "200px" class="img-thumbnail" />
                </div>

                <div class = "form-group">
                    <label for="username" class="d-block">Input Username</label>
                    <input type="text" name="username" id="username">
                </div>

                <!-- Submit Button -->
                <div class="form-group">
                    <input type="submit" class="btn btn-primary" value="Submit">
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

include 'connect.php';
if(isset($_POST['image'])){
    include "validate.php";

    validate($_POST['image']);

    $image = $_POST['image'];
    $username = $_POST['username'];

    if(empty($image)){
        echo "Voters need to see your face";
    }
    elseif(empty($username)){
        echo "Please input your number";
    }
    else{
        $checkexist = "SELECT Username FROM images WHERE Username = '$username'";
        $checkexistquery = mysqli_query($connect,$checkexist);

        if($checkexistquery -> num_rows > 0){
            while($row = $checkexistquery->fetch_assoc()) {
                // echo $row['Username'];
                if($row['Username'] === $username){
                    echo "Please, wait a little while. You're on a roll.";
                }
                else{
                    echo "pass";
                }
            }
        }else{
            $insert = "INSERT INTO images(UserName, Image) VALUES('$username', '$image')";

            $confirm = mysqli_query($connect, $insert);

            if($confirm){
                echo "Inserted";
            }
        }
    }
}

?>

