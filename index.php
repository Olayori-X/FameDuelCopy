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
    <title>Voting Site</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <!-- <link rel = "stylesheet" href = "Bootstrap/B-css/bootstrap.min.css"> -->

    <link id="light-mode-stylesheet" rel="stylesheet" type="text/css" href="votingsitestyle.css">
    <link id="dark-mode-stylesheet" rel="stylesheet" href="votingsitestyles-dark.css" disabled>
    <script src = "indexjs.js"></script>

</head>
<body onload = "showMode()">

<header class="bg-dark text-light py-0">
    <div class="container">
        <h1 class="mb-0">FameDuel</h1>
        <div class="clearfix"></div>
    </div>
</header>


<?php
include "time.php";
include "connect.php";
include "contestants.php";

if($currentDay >= 0){
?>

<?php if(isset($_GET['message']) && isset($_GET['reward'])){
    $message = $_GET['message'];
    $reward = $_GET['reward'];
            
?>
    <!-- <div class="alert alert-info text-center fixed-top" role="alert" id = "message" onclick = "closeDiv('message')"> -->
        <!-- <div id="shareSuccess" style="display: none;">Shared successfully!</div> -->
        <div id = "centered-div" class = "container">
            <div class="row justify-content-center align-items-center" style="height:100vh;">
                <div class="col-md-6">
                    <div class = "text-center" id = "canvascontainer"><canvas class = "text-center" id = "canvas"><?php echo $reward ?></canvas></div>
                    <a id="downloadButton" download = 'download.jpeg' style="display: none;"><i class="fas fa-download"></i></a>
                    <button id="shareButton" style="display: none;"><i class="fas fa-share-alt"></i></button>
                    <br><button type="button" onclick = "closeDiv('centered-div')" class="btn btn-secondary">Close</button>
                </div>
            </div>
        </div>

        <!-- <br><button type="button" onclick = "closeDiv('message')" class="btn btn-secondary">Close</button> -->
    <!-- </div> -->
    <div class="alert alert-info text-center fixed-top" role="alert" id = "message" onclick = "closeDiv('message')">

    <?php echo $_GET['message']; ?>

    <br><button type="button" onclick = "closeDiv('message')" class="btn btn-secondary">Close</button>
    </div>
<?php } ?>

<main class="container mt-5">
    <h2 class="question" style = "text-align: center">Select your favorite photo</h2>

    <form id="votingForm" action="submit_vote.php" method="post">
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

<div class="position-fixed" style="bottom: 20px; right: 20px;">
  <button id = "toggle-mode" onclick= "toggleDarkMode()"><i class="fas fa-adjust fa-4x"></i></button>
</div>

<div id="chart" class="container">
    <div class="row">
        <div class="col-md-6">
            <?php echo $usernames[0] ?><span id="count1"></span>
            <div id="rank1" class="progress mt-2">
                <div id="rank3" class="progress-bar bg-danger" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
        <div class="col-md-6">
            <?php echo $usernames[1] ?><span id="count2"></span>
            <div id="rank2" class="progress mt-2">
                <div id="rank4" class="progress-bar bg-primary" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    </div>
</div>

    
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
</script>

<?php
} else {
    $max = "SELECT ContestantPic,COUNT(ContestantPic) AS value_occurence FROM contestants GROUP BY ContestantPic ORDER BY value_occurence DESC LIMIT 1";
    $confirmmax = mysqli_query($connect, $max);

    if($confirmmax){
        $row = mysqli_fetch_array($confirmmax);
        if(empty($row['ContestantPic'])){
            echo "No one has voted";
        }
        else{
            $winner = $row['ContestantPic'];
?>
<div id="nottime" class="bg-light text-dark p-4 rounded">Wait till the speculated time</div>
<div id="winner-container" class="bg-dark text-light text-center">
    <img src="<?php echo $winner; ?>" class="winner img-fluid" alt="Winner">
</div>

<?php
        }
    }
}
?>
<footer class="bg-dark text-light text-center py-3 mt-6">
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
} else {
    header("Location: Login.php");
    exit();
}
?>
