<?php
    date_default_timezone_set('Africa/Lagos');
    $currentDay = date("w");
    $currentHour = date("H");
    $currentMinute = date("i");
    $currentSecond = date("s");
    $currentYear = date("Y");
    $currentMonth = date("F");
    $currentDate = date("z");
    $currentFullDate = date("r");
    $time = $currentHour. ':'. $currentMinute;

    echo date('Y-m-d H:i', strtotime('2hours, 30 minutes'));

    // echo "currentDay - ". $currentDay;
    // echo "<br>";
    // echo "currentHour - ". $currentHour;
    // echo "<br>";
    // echo "currentMinute - " . $currentMinute;
    // echo "<br>";
    // echo "currentSecond - " . $currentSecond;
    // echo "<br>";
    // echo "currentYear - " . $currentYear;
    // echo "<br>";
    // echo "currentMonth - " . $currentMonth;
    // echo "<br>";
    // echo "currentDate - " . $currentDate;
    // echo "<br>";
    // echo "currentFullDate - " . $currentFullDate;
    // echo "<br>";
    // echo "time - ". $time;
?>