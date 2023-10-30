// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth, FacebookAuthProvider,  signInWithPopup } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
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
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new FacebookAuthProvider();

const facebookLogin = document.getElementById("facebookLogin");
facebookLogin.addEventListener("click", function(){
    signInWithPopup(auth, provider)
    .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;

        // IdP data available using getAdditionalUserInfo(result)
        // ...
    })
    .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        // ...
    });
})

