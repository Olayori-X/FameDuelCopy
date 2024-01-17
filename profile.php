<?php
// session_start();

// if(isset($_SESSION['Username'])){
//   $username = $_SESSION['Username'];

//   include "server/connect.php";

//   include "server/getspecificdetails.php";
  //Use fetch JS
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fun Duel🏆 </title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
  <link rel="icon" href="assets/favicon.png" type="image/png">
    <meta property="og:title" content="Fun Duel🏆">
    <meta property="og:description" content="Support your choice✊. Emerge  Victorious🏆">
    <meta property="og:image" content="https://netcarvers.com.ng/FunDuel/assets/logo.png">
    <meta property="og:url" content="https://www.netcarvers.com.ng/FunDuel/index.php">



</head>
<body>
    <img src = "<?php echo $data[0]['profilepic']; ?>"/><br>
    <p id = "image"><?php echo $data[0]['Username']; ?></p>
</body>

<script>
  value = {
      "current_username" : 'Olayori',
  };

  fetch('server/getspecificdetails.php', {
      'method' : 'POST',
      "headers" : {
          "Content-Type" : "application/json; charset=utf-8"
      },
      "body" : JSON.stringify(value)
  }).then(response => response.json())
  .then(data => {
      console.log(data);
      //Work on the data here
      document.getElementById('image').innerHTML = "<img src ='" + data.userprofile[0].profilepic + "'>";
  })

</script>
</html>

<?php 
// }else{
  // header("Location: Login.php"); 
// }?>