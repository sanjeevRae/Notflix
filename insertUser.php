<?php
// insertUser.php

// Include database connection
require_once 'dbconfig.php';

// Get POST data from the frontend
$userName = $_POST['name'];
$userEmail = $_POST['email'];
$userPhoto = $_POST['photoURL'];

// Insert user data into the 'users' table
$sql = "INSERT INTO users (name, email, photoURL) VALUES (?, ?, ?)";

// Prepare and bind
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $userName, $userEmail, $userPhoto);

// Execute the query and check for success
if ($stmt->execute()) {
    // Return success response
    echo json_encode(['success' => true]);
} else {
    // Return failure response
    echo json_encode(['success' => false]);
}

// Close the statement and connection
$stmt->close();
$conn->close();
?>
