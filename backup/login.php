<?php
// test-2
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
  <title>Login - Notflix</title>
</head>
<body>
  <h1>Login to Notflix</h1>

  
  <button id="googleSignInBtn">Login with Google</button>

  <script type="module">
  
    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
    import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
    import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

    const firebaseConfig = {
      apiKey: "AIzaSyB70-Z9CFQi7xtmSKMQjo3tEoCMPUnoCIo",
      authDomain: "the-notflix.firebaseapp.com",
      projectId: "the-notflix",
      storageBucket: "the-notflix.firebasestorage.app",
      messagingSenderId: "334981648790",
      appId: "1:334981648790:web:c91ff8cbd551b88c3ecdb7",
      measurementId: "G-Y5V00VSFX0"
    };


    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const db = getFirestore(app);

    function signInWithGoogle() {
      signInWithPopup(auth, provider)
        .then(async (result) => {
          const user = result.user;
          const userName = user.displayName;
          const userEmail = user.email;
          const userPhoto = user.photoURL;

        
          const formData = new FormData();
          formData.append("name", userName);
          formData.append("email", userEmail);
          formData.append("photoURL", userPhoto);

    
          fetch("insertUser.php", {
            method: "POST",
            body: formData,
          })
          .then(response => response.json())
          .then(data => {
            if (data.success) {
              console.log("User info stored in database successfully");
            } else {
              console.log("Failed to store user info");
            }
          })
          .catch(error => console.error("Error inserting user info:", error));

     
          sessionStorage.setItem('userName', userName);
          sessionStorage.setItem('userEmail', userEmail);
          sessionStorage.setItem('userPhoto', userPhoto);

          window.location.href = 'index.php';  
        })
        .catch((error) => {
          console.error("Error during sign-in:", error);
        });
    }

    document.getElementById("googleSignInBtn").addEventListener("click", signInWithGoogle);
  </script>
</body>
</html>
