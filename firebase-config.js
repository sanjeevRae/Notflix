// firebase-config.js

// Import necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "the-notflix.firebaseapp.com",
  projectId: "the-notflix",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

// Google Sign-In
function signInWithGoogle() {
  signInWithPopup(auth, provider)
    .then(async (result) => {
      const user = result.user;
      const userName = user.displayName;
      const userEmail = user.email;
      const userPhoto = user.photoURL;

      // Store user info in Firestore
      try {
        const docRef = await addDoc(collection(db, "users"), {
          name: userName,
          email: userEmail,
          photoURL: userPhoto,
          timestamp: new Date(),
        });
        console.log("User information saved in Firestore:", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

      // Store user info in sessionStorage
      sessionStorage.setItem('userName', userName);
      sessionStorage.setItem('userEmail', userEmail);
      sessionStorage.setItem('userPhoto', userPhoto);

      // Redirect to home page
      window.location.href = 'index.php';  // Adjust as needed
    })
    .catch((error) => {
      console.error("Error during sign-in:", error);
    });
}

// Call sign-in function when button is clicked
document.getElementById("googleSignInBtn").addEventListener("click", signInWithGoogle);
