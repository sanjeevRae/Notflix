<?php
//test-1
echo '<script src="https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js"></script>';
echo '<script src="https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js"></script>';
echo '<script src="https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js"></script>';
echo '<script src="https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js"></script>';

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Notflix - Home</title>
</head>
<body>
  <h1>Welcome to Notflix</h1>

  <div>
    <h2>User Information:</h2>
    <p id="userNameDisplay">Loading...</p>
    <p id="userEmailDisplay">Loading...</p>
    <img id="userPhotoDisplay" alt="User photo" width="100">
  </div>

  <script type="module">
   
    const userName = sessionStorage.getItem('userName');
    const userEmail = sessionStorage.getItem('userEmail');
    const userPhoto = sessionStorage.getItem('userPhoto');

    document.getElementById("userNameDisplay").textContent = userName;
    document.getElementById("userEmailDisplay").textContent = userEmail;
    document.getElementById("userPhotoDisplay").src = userPhoto;
  </script>
</body>
</html>
