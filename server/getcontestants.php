<?php
include "contestants.php";
header('Content-Type: application/json');
echo json_encode($usernames);
?>