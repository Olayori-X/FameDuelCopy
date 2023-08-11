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
    $currentDay = date("w");
    $currentHour = date("H");
    $currentMinute = date("i");
    $currentSecond = date("s");

    include "connect.php";

    $contestantone = "SELECT COUNT(Contestant) as countone FROM contestants WHERE Contestant = 'One'";
    $contestanttwo = "SELECT COUNT(Contestant) as counttwo FROM contestants WHERE Contestant = 'Two'";

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

    if($currentDay === 5 && $currentHour === 0 && $currentMinute = 0 && $currentSecond === 0){
      $clear = "DELETE FROM contestants";
      $clearquey = mysqli_query($connect, $clear);

      if($clearquery){
        echo "It's a new day";
      }
    }

    if($currentDay >= 5 ){
  ?>

<?php if(isset($_GET['error'])){?>
  <div id = "error" onclick="closeDiv('error')"><button type = button>Close</button><?php echo $_GET['error']; ?></div>
<?php } ?>

<div class="container">
    <main>
      <h2 class="question">Select your favorite photo</h2>
      <form id="votingForm" action="submit_vote.php" method="post">
        <div class="options">
          <label class="option">
            <input type="radio" name="option" value="One" onchange="submitForm()">
            <div class="vote">


              <img src= "https://source.unsplash.com/random/400x300?sig=4" alt="Picture 1">
            </div>
          </label>
          <label class="option">
            <input type="radio" name="option" value="Two" onchange="submitForm()">
            <div class="vote">
              <img src="https://source.unsplash.com/random/400x300?sig=2" alt="Picture 2">
            </div>
          </label>
          <!-- Add more picture options as needed -->
        </div>
      </form>
    </main>
  </div>

  <div id = "chart">
    1<span id = "count1"><?php echo $countone; ?></span><div id = "rank1"><div id = "rank3"></div></div>
    2<span id = "count2"><?php echo $counttwo; ?></span><div id = "rank2"><div id ="rank4"></div></div>
  </div>

  <footer>
    &copy; 2023 Voting Site. All rights reserved.
  </footer>

  <script>
    function submitForm() {
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
      $max = "SELECT Contestant,COUNT(Contestant) AS value_occurence FROM contestants GROUP BY Contestant ORDER BY value_occurence DESC LIMIT 1";
      $confirmmax = mysqli_query($connect, $max);

      if($confirmmax){
        while($row = mysqli_fetch_array($confirmmax)){
          $winner = $row['Contestant'];
        }
      }
  ?>

  <div id = "nottime">Wait till the speculated time</div>
  <img src = "<?php echo $winner ?>" alt = "Winner">

  <?php
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