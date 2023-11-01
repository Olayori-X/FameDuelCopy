<?php
$imageUrl = $_GET['url']; // Get the image URL from the frontend

header("Content-Type: image/jpeg"); // Set the appropriate content type
header("Content-Disposition: attachment; filename=image.jpg"); // Set the filename for download

// Fetch the image from the external website and echo it to the response
echo file_get_contents($imageUrl);
?>
