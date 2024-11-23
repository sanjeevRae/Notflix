<?php
// dbconfig.php

// Database configuration
$servername = "localhost";
$username = "root";    // Adjust if necessary
$password = "";        // Adjust if necessary
$dbname = "notflix";   // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo ""; // Add this line for debugging
}
?>
