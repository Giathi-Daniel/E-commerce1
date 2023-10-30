// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
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
const db = getDatabase();
const auth = getAuth(app);
auth.languageCode = 'en';

let email = document.getElementById('email');
let pass = document.getElementById('password');
let fName = document.getElementById('fname');
let lName = document.getElementById('lname');
let form = document.getElementById('mainForm');

let RegisterUser = evt => {
    evt.preventDefault();//because of submit event

    createUserWithEmailAndPassword(auth, email.value, pass.value)
    .then((credentials)=>{
        console.log(credentials);
    }).catch((error) => {
        alert(error.message);
        console.log(error.code);
        console.log(error.message);
    })

    form.addEventListener('submit', RegisterUser);
}