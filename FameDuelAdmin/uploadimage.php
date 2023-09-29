<?php
    include 'connect.php';
    if(isset($_POST['submit'])){
        include "validate.php";

        $username = $_POST['username'];

        if(empty($username)){
            echo "Please input your number";
        }
        else{
            $checkexist = "SELECT Username FROM images WHERE Username = '$username'";
            $checkexistquery = mysqli_query($connect,$checkexist);

            if($checkexistquery -> num_rows > 0){
                while($row = $checkexistquery->fetch_assoc()) {
                    if($row['Username'] === $username){
                        header("Location: adminaddcontestants.php?message=Please, wait a little while. You're on a roll.");
                    }
                }
            }else{
                $target_dir = "C:/Users/PC/Desktop/Xampp/htdocs/FameDuel/uploads/";
                $target_file = $target_dir . basename($_FILES["image"]["name"]);
                $uploadOk = 1;
                $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

                // Check if image file is a actual image or fake image
                $check = getimagesize($_FILES["image"]["tmp_name"]);
                if($check !== false) {
                    $uploadOk = 1;
                } else {
                    echo "File is not an image.";
                    $uploadOk = 0;
                }

                // Check if file already exists
                if (file_exists($target_file)) {
                    echo "Sorry, file already exists.";
                    $uploadOk = 0;
                }

                // Check file size
                if ($_FILES["image"]["size"] > 10000) {
                    echo "Sorry, your file is too large.";
                    echo $_FILES['image']['size'];
                    $uploadOk = 0;
                }

                // Allow certain file formats
                if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
                && $imageFileType != "gif" ) {
                echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
                $uploadOk = 0;
                }

                // Check if $uploadOk is set to 0 by an error
                if ($uploadOk == 0) {
                    echo "Sorry, your file was not uploaded.";
                    // if everything is ok, try to upload file
                } else {
                    if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {
                        $image = "uploads/" . basename($_FILES["image"]["name"]);
                        $insert = "INSERT INTO images(UserName, Image) VALUES('$username', '$image')";

                        $confirm = mysqli_query($connect, $insert);

                        if($confirm){
                            header("Location: adminaddcontestants.php?message=Uploaded");
                        }
                    } else {
                        echo "Sorry, there was an error uploading your file. Error:"  . $_FILES['image']['error'];
                    }
                }
            }
        }
    }else{
        header("Location: adminlogin.php");
    }

?>
