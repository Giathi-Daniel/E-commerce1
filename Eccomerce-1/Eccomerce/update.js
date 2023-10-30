// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAuERzXV_85EB8FYr_gRi8iOEeykf5FFHI",
    authDomain: "hosting-74c66.firebaseapp.com",
    databaseURL: "https://hosting-74c66-default-rtdb.firebaseio.com",
    projectId: "hosting-74c66",
    storageBucket: "hosting-74c66.appspot.com",
    messagingSenderId: "80108073871",
    appId: "1:80108073871:web:6a53b8f5f31b4f1e1f11fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const user = auth.currentUser; 

////////how to fetch the user profile and email////
function updateUserProfile(user){
    const user_name = user.displayName;
    const userEmail = user.email;
    const profile = user.photoURL;

    /////user data update
    document.getElementById("user_name").textContent = user_name;
    document.getElementById("userEmail").textContent = userEmail;
    document.getElementById("profile").src = profile;
}


onAuthStateChanged(auth, (user) => {
    if(user){
        //user signed in, call the updateuserprofile function
        updateUserProfile(user);
        const uid = user.uid;
        return uid;
    } else {
        //User is not signed in, redirect to the registration page
        alert("Create Account & login!");
        window.location.href = "../index.html";
    }
});