<?php
session_start();

if(isset($_SESSION['Username'])){
  $username = $_SESSION['Username'];
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


    <!-- <link rel = "stylesheet" href = "Bootstrap/B-css/bootstrap.min.css"> -->

    <link id="light-mode-stylesheet" rel="stylesheet" type="text/css" href="votingsitestyle.css">
    <link id="dark-mode-stylesheet" rel="stylesheet" href="votingsitestyles-dark.css" disabled>
    <script src = "indexjs.js"></script>

</head>
<body onload = "showMode(); countvote();">

<header class="bg-dark text-light py-0">
    <div class="container">
        <h1 class="mb-0">Fun Duel🏆</h1>
        <div class="clearfix"></div>
    </div>
</header>


<?php
include "time.php";
include "connect.php";
include "contestants.php";

if($currentDay >= 0){
?>

<?php if(isset($_GET['message'])){
    $message = $_GET['message'];
    ?>
    <div class="alert alert-info text-center fixed-top" role="alert" id = "message" onclick = "closeDiv('message')">

    <?php echo $_GET['message']; ?>

    <br><button type="button" onclick = "closeDiv('message')" class="btn btn-secondary">Close</button>
    </div>
    <?php if( isset($_GET['reward'])){
    $reward = $_GET['reward'];
            
?>
    <!-- <div class="alert alert-info text-center fixed-top" role="alert" id = "message" onclick = "closeDiv('message')"> -->
         <div id="shareSuccess" style="display: none;">Shared successfully!</div> 
        <div id = "centered-div" class = "container">
            <div class="row justify-content-center align-items-center" style="height:100vh;">
                <div class="col-md-6">
                    <div class = "text-center" id = "canvascontainer"><canvas class = "text-center" id = "canvas"><?php echo $reward ?></canvas></div>
                    <div class = "row">
                        <div class = "col-md-6"  id = "downloadButtonDiv">
                            <a id="downloadButton" download = 'download.jpeg' style="display: none;"><b></b>Download</b><i class="fas fa-download"></i>
                            </a>
                        </div>
                        <div class = "col-md-1"></div>
                            
                        <div class = "col-md-5" id = "closecanvas" style = "margin-top: 5px;"><button type="button" style= "background-color: transparent; border : none" onclick = "closeDiv('centered-div'); closeDiv('message')" class="btn btn-secondary">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <br><button type="button" onclick = "closeDiv('message')" class="btn btn-secondary">Close</button>
    <!-- </div> -->
    
<?php } } ?>

<main class="container mt-5">
    <h2 class="question" style = "text-align: center">Support your choice ✊</h2>
    <p>Tap just once on your claim to vote</p>

    <form id="votingForm" action="server/submit_vote.php" method="post">
        <div class="row">
            <div class="col-md-6 mb-4">
                <label class="option w-100">
                    <input type="radio" name="option" value="<?php echo $usernames[0] ?>" data-img-src="<?php echo $images[0] ?>" onchange="submitForm()">
                    <div class="vote text-center">
                        <img src="<?php echo $images[0] ?>" class="img-fluid" alt="Picture 1">
                        <p><?php echo $usernames[0] ?></p>
                    </div>
                </label>
            </div>

            <div class="col-md-6 mb-4">
                <label class="option w-100">
                    <input type="radio" name="option" value="<?php echo $usernames[1] ?>" data-img-src="<?php echo $images[1] ?>" onchange="submitForm()">
                    <div class="vote text-center">
                        <img src="<?php echo $images[1] ?>" class="img-fluid" alt="Picture 2">
                        <p><?php echo $usernames[1] ?></p>
                    </div>
                </label>
            </div>
        </div>
        <input type="hidden" id="chosenimage" name="chosenimage">
    </form>
</main>

<div class="position-fixed" style="bottom: 150px; right: 20px; z-index : 9">
  <button id = "toggle-mode" onclick= "toggleDarkMode()"><i class="fas fa-adjust fa-2x"></i></button>
</div>

<div id="chart" class="container">
    <div class="row">
        <div class="col-md-6">
            <?php echo $usernames[0] ?><span>-></span><span id="count1"></span>
            <div id="rank1" class="progress mt-2">
                <div id="rank3" class="progress-bar bg-danger" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
        <div class="col-md-6">
            <?php echo $usernames[1] ?><span>-></span><span id="count2"></span>
            <div id="rank2" class="progress mt-2">
                <div id="rank4" class="progress-bar bg-primary" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    </div>
</div>

<footer class="bg-dark text-light text-center py-4 mt-6">
  <div class="container text-center">
        <p>&copy; 2023 Fun Duel 🏆. All rights reserved.</p>
      <div>
        <a href="mailto:fameduel@gmail.com" class="text-white mr-3"><i class="fas fa-envelope fa-2x"></i></a>
        <a href="https://wa.me/+2347086181412" class="text-white mr-3"><i class="fab fa-whatsapp fa-2x"></i></a>
        <!--<a href = "#" class="text-white mr-3"><i class="fab fa-instagram fa-2x"></i></a>-->
        <a href="https://twitter.com/The_fun_duel" class="text-white mr-3"><i class="fab fa-twitter fa-2x"></i></a>
        <p>
          <a href="https://twitter.com/The_fun_duel" class="text-white mr-2">Follow on <img src = "assets/twitter.webp" width = "20px;"/> for the latest updates
         </p>
        <a href="logout.php" class="text-white"><i class="fas fa-sign-out-alt fa-2x"></i> Log Out</a>
      </div>
    </div>
</footer>



    
<script>
    function submitForm() {
      var radioButtons = document.querySelectorAll('input[name="option"]');
      for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
          contestant_image = radioButtons[i].getAttribute('data-img-src');
          document.getElementById("chosenimage").value = contestant_image;
          break; // Exit the loop when the selected radio button is found
        }
    }
      document.getElementById('votingForm').submit();
    }
    function closeDiv(element){
      var div = document.getElementById(element);
      if(div.style.display == "block"){
        div.style.display = "none";
      }else{
        div.style.display = "block";
      }
    }
    
    countvote();
</script>

<?php
} else {
    include 'server/getwinner.php';

        if($message){
            echo $message;
        }
        else{
            $winner = $row['ContestantPic'];
?>
<div id="nottime" class="bg-light text-dark p-4 rounded">Wait till the speculated time</div>
<div id="winner-container" class="bg-dark text-light text-center">
    <img src="<?php echo $winner; ?>" class="winner img-fluid" alt="Winner">
</div>
<footer class="bg-dark text-light text-center py-3 mt-5 fixed-bottom">
    <div class="container text-center">
        <p>&copy; 2023 Fun Duel 🏆. All rights reserved.</p>
      <div>
        <a href="mailto:fameduel@gmail.com" class="text-white mr-3"><i class="fas fa-envelope fa-2x"></i></a>
        <a href="https://wa.me/+2347086181412" class="text-white mr-3"><i class="fab fa-whatsapp fa-2x"></i></a>
        <!--<a href = "https://www.instagram.com/fameduel/" class="text-white mr-3"><i class="fab fa-instagram fa-2x"></i></a>-->
        <a href="https://twitter.com/The_fun_duel" class="text-white mr-3"><i class="fab fa-twitter fa-2x"></i></a>
        <p>
          <a href="https://twitter.com/The_fun_duel" class="text-white mr-2">Follow on <img src = "assets/twitter.webp" width = "20px;"/> for the latest updates
         </p>
        <a href="logout.php" class="text-white"><i class="fas fa-sign-out-alt fa-2x"></i> Log Out</a>
      </div>
    </div>
</footer>

<?php       
    }
}
?>

</body>
</html>
<?php
} else {
    header("Location: Login.php");
    exit();
}
?>