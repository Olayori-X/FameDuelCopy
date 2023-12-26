<?php
include 'connect.php';
include 'contestants.php';
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

$votecount = [$countone, $counttwo, $percentone, $percenttwo];

header('Content-Type: application/json');
echo json_encode($votecount);

?>