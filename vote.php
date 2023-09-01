<?php
session_start();

if(isset($_SESSION['Username'])){
  $username = $_SESSION['Username'];
?>
<!DOCTYPE html>
<html>
<head>
  <title>Voting Site</title>
  <link rel="stylesheet" type="text/css" href="votingsitestyle.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
  <header>

    <h1>Fame Duel
      <span class = "logout">
        <a href = "logout.php">Log Out</a>
      </span>
    </h1>
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

    if($currentDay >= 5){
  ?>

<?php if(isset($_GET['error'])){?>
  <div id = "error" onclick="closeDiv('error')"><?php echo $_GET['error']; ?><button type = button>Close</button></div>
<?php } ?>

<div class="container">
    <main>
      <h2 class="question">Select your favorite photo</h2>
      <form id="votingForm" action="submit_vote.php" method="post">
        <div class="options">
          <label class="option">
            <input type="radio" name="option" value="<?php echo $usernames[0] ?>" data-img-src="<?php echo $images[0] ?>" onchange="submitForm()">
            <div class="vote">


              <img src= "<?php echo $images[0] ?>" alt="Picture 1"><br>
              <p style = "text-align: center;"><?php echo $usernames[0] ?></p>
            </div>
          </label>
          <label class="option">
            <input type="radio" name="option" value="<?php echo $usernames[1] ?>" data-img-src="<?php echo $images[1] ?>" onchange="submitForm()">
            <div class="vote">
              <img src="<?php echo $images[1] ?>" alt="Picture 2"><br>
              <p style = "text-align: center;"><?php echo $usernames[1] ?></p>
            </div>
          </label>
          <!-- Add more picture options as needed -->
        </div>
        <input type = "hidden" id = "chosenimage" name = "chosenimage">
      </form>
    </main>
  </div>

  <div id = "chart">
    <?php echo $usernames[0] ?><span id = "count1"><?php echo $countone; ?></span><div id = "rank1"><div id = "rank3"></div></div>
    <?php echo $usernames[1] ?><span id = "count2"><?php echo $counttwo; ?></span><div id = "rank2"><div id ="rank4"></div></div>
  </div>

  <footer>
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
    }else{
      // $max = max($countone, $counttwo);
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

  <div id = "nottime">Wait till the speculated time</div>
  
  <div id="winner-container">
    <img src="<?php echo $winner; ?>" class="winner" alt="Winner">
  </div>

  
  <?php
  echo $winner;
     }
   }
  }
  ?>
  
</body>
</html>
<?php

}else{
	header("Location: Login.php");
	exit();
}
?>