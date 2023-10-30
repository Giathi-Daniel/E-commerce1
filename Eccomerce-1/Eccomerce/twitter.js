// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth, TwitterAuthProvider,  signInWithPopup } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAuERzXV_85EB8FYr_gRi8iOEeykf5FFHI",
    authDomain: "hosting-74c66.firebaseapp.com",
    databaseURL: "https://hosting-74c66-default-rtdb.firebaseio.com",
    projectId: "hosting-74c66",
    storageBucket: "hosting-74c66.appspot.com",
    messagingSenderId: "80108073871",
    appId: "1:80108073871:web:6a53b8f5f31b4f1e1f11fa"
    //Yh11grb5ni04OEJAjQ7UZb9n5u6VfPQDHyiakkHRP_6s8a50nR -> client secret
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new TwitterAuthProvider();

const twitterLogin = document.getElementById("twitterLogin");
twitterLogin.addEventListener("click", function(){
    signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
        // You can use these server side with your app's credentials to access the Twitter API.
        const credential = TwitterAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const secret = credential.secret;

        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = TwitterAuthProvider.credentialFromError(error);
        // ...
    });
})

