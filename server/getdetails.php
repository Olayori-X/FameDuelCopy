<?php
  //This gets the categories and the reporters from the database. Not a page to be displayed
  include "connect.php";

  $users = "SELECT * FROM users";
  $usersquery = mysqli_query($connect, $users);

  if($usersquery){
    $data = [];
    while($row = mysqli_fetch_assoc($usersquery)){
        unset($row['Password']);
        unset($row['id']);
        $data[] = $row;
    }
    header("Content-Type: application/json");
    echo json_encode($data);
  }
  
?>