<?php
session_start();

if(isset($_SESSION['Username'])){
  $username = $_SESSION['Username'];

  include "server/connect.php";
  include "server/getspecificdetails.php";
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


    <script src = "acceptinvitejs.js"></script>

</head>
<body>
    <input type = 'hidden' value = 'contest1' id = 'contestid'>
    <input type = "hidden" value = "<?php echo $data[0]['profilepic']; ?>" id = "inviteepic">

    <button type = "button" onclick = "acceptinvite()">Accept invite</button>
    <button type = "button" onclick = "deleteinvite()">Delete invite</button>

    <script>
      autocomplete(document.getElementById('search'));
    </script>
</body>
</html>

<?php }else{
  header("Location: Login.php"); 
}?>