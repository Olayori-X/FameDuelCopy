<?php
    include 'connect.php';
    if(isset($_POST['submit'])){
        include "validate.php";

        $username1 = $_POST['username'];
        $username2 = $_POST['username2'];

        if(empty($username1) || empty($username2)){
            header("Location: ../contest.php?message=Two users are needed to contest");
        }
        else{
            $target_dir = "C:/Xampp/htdocs/FameDuelCopy/uploads/";
            $target_file = $target_dir . basename($_FILES["image"]["name"]);
            $uploadOk = 1;
            $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

            // Check if image file is a actual image or fake image
            $check = getimagesize($_FILES["image"]["tmp_name"]);
            if($check !== false) {
                $uploadOk = 1;
            } else {
                header("Location: adminaddcontestants?message=File is not an image.");
                $uploadOk = 0;
            }

            // Check if file already exists
            if (file_exists($target_file)) {
                header("Location: adminaddcontestants?message=Sorry, file already exists.");
                $uploadOk = 0;
            }

            // Check file size
            if ($_FILES["image"]["size"] > 50000) {
                header("Location: adminaddcontestants.php?message=Sorry, File limit is 50MB");
                $uploadOk = 0;
            }

            // Allow certain file formats
            if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
            && $imageFileType != "gif" ) {
            header("Location: adminaddcontestants?message=Sorry, only JPG, JPEG, PNG & GIF files are allowed.");
            $uploadOk = 0;
            }

            // Check if $uploadOk is set to 0 by an error
            if ($uploadOk == 0) {
                header("Location: adminaddcontestants?message= Sorry your file was not uploaded");
                // if everything is ok, try to upload file
            } else {
                if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {
                    $image = "uploads/" . basename($_FILES["image"]["name"]);

                    $target_file2 = $target_dir . basename($_FILES["image2"]["name"]);
                    $uploadOk2 = 1;
                    $imageFileType2 = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

                    // Check if image file is a actual image or fake image
                    $check2 = getimagesize($_FILES["image2"]["tmp_name"]);
                    if($check2 !== false) {
                        $uploadOk2 = 1;
                    } else {
                        header("Location: adminaddcontestants?message=Second file is not an image.");
                        $uploadOk2 = 0;
                    }

                    // Check if file already exists
                    if (file_exists($target_file2)) {
                        header("Location: adminaddcontestants?message=Sorry, second file already exists.");
                        $uploadOk2 = 0;
                    }

                    // Check file size
                    if ($_FILES["image2"]["size"] > 50000) {
                        header("Location: adminaddcontestants.php?message=Sorry, File limit is 50MB");
                        $uploadOk = 0;
                    }

                    // Allow certain file formats
                    if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
                    && $imageFileType != "gif" ) {
                    header("Location: adminaddcontestants?message=Sorry, only JPG, JPEG, PNG & GIF files are allowed.");
                    $uploadOk = 0;
                    }

                    // Check if $uploadOk is set to 0 by an error
                    if ($uploadOk == 0) {
                        header("Location: adminaddcontestants?message= Sorry your file was not uploaded");
                        // if everything is ok, try to upload file
                    } else {
                        if (move_uploaded_file($_FILES["image2"]["tmp_name"], $target_file2)) {
                            $image2 = "uploads/" . basename($_FILES["image2"]["name"]);
                            $insert = "INSERT INTO othercontests(UserName, Image) VALUES('$username', '$image')";

                            $confirm = mysqli_query($connect, $insert);

                            if($confirm){
                                header("Location: adminaddcontestants.php?message=Uploaded");
                            }
                        } else {
                            header("Location: adminaddcontestants?message=Sorry, there was an error uploading your file.");
                        }
                    }
                }
            }
            
        }
    }else{
        header("Location: adminlogin.php");
    }

?>
