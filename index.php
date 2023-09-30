<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Voting Site</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="votingsitestyle.css">
</head>
<body>
<?php
session_start();

if(isset($_SESSION['Username'])){
  $username = $_SESSION['Username'];
?>
<header class="bg-dark text-light py-1">
    <div class="container">
        <h1 class="mb-0 float-left">Fame Duel</h1>
        <div class="logout float-right">
            <a href="logout.php" class="text-light">Log Out</a>
        </div>
        <div class="clearfix"></div>
    </div>
</header>

<?php
include "time.php";
include "connect.php";
include "contestants.php";

$contestantone = "SELECT COUNT(Contestant) as countone FROM contestants WHERE Contestant = '$usernames[0]'";
$contestanttwo = "SELECT COUNT(Contestant) as counttwo FROM contestants WHERE Contestant = '$usernames[1]'";

$queryone = mysqli_query($connect, $contestantone);
$querytwo = mysqli_query($connect, $contestanttwo);

if($queryone->num_rows >= 0){
  $row = $queryone->fetch_assoc();
  $countone = $row["countone"];
}

if($querytwo->num_rows >= 0){
  $rowtwo = $querytwo->fetch_assoc();
  $counttwo = $rowtwo["counttwo"];
}

$total = $countone + $counttwo;
if($total != 0){
  $percentone = ($countone/$total)*100;
  $percenttwo = ($counttwo/$total)*100;
}else{
  $percentone = 50;
  $percenttwo = 50;
}

if($currentDay >= 4){
?>

<?php if(isset($_GET['message'])){?>
<div id="message" class=" alert alert-primary mx-auto" onclick="closeDiv('message')"><?php echo $_GET['message']; ?><button type="button" class="btn btn-secondary">Close</button></div>
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

<div id="chart" class="container">
    <div class="row">
        <div class="col-md-6">
            <?php echo $usernames[0] ?><span id="count1"><?php echo $countone; ?></span>
            <div id="rank1" class="progress mt-2">
                <div id="rank3" class="progress-bar bg-danger" role="progressbar" style="width: <?php echo $percentone; ?>%;" aria-valuenow="<?php echo $percentone; ?>" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
        <div class="col-md-6">
            <?php echo $usernames[1] ?><span id="count2"><?php echo $counttwo; ?></span>
            <div id="rank2" class="progress mt-2">
                <div id="rank4" class="progress-bar bg-primary" role="progressbar" style="width: <?php echo $percenttwo; ?>%;" aria-valuenow="<?php echo $percenttwo; ?>" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    </div>
</div>

<footer class="bg-dark text-light text-center py-3 mt-5">
    &copy; 2023 Fame Duel. All rights reserved.
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

    function getRanking(){
      var percenton = <?php echo $percentone; ?> + "%";
      var percenttw = <?php echo $percenttwo; ?> + "%";
      document.getElementById("rank3").style.width = percenton;
      document.getElementById("rank4").style.width = percenttw;
    }

    setInterval(getRanking(), 1000);

    function closeDiv(element){
      document.getElementById(element).style.display = "none";
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
</body>
</html>
<?php
} else {
    header("Location: Login.php");
    exit();
}
?>
