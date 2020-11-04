"use strict";

// ========== Firebase sign in functionality ========== //

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB_XZDIiicBhPGALFj4ikeZtqk34jQllXk",
    authDomain: "arlab2b.firebaseapp.com",
    databaseURL: "https://arlab2b.firebaseio.com",
    projectId: "arlab2b",
    storageBucket: "arlab2b.appspot.com",
    messagingSenderId: "786345968830",
    appId: "1:786345968830:web:2327bf9f1d27dee8cf8aef"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const _db = firebase.firestore();
let _firebaseUI;

// ========== FIREBASE AUTH ========== //
// Listen on authentication state change
firebase.auth().onAuthStateChanged(function (user) {
    if (user) { // if user exists and is authenticated
        userAuthenticated(user);
    } else { // if user is not logged in
        userNotAuthenticated();
    }
});

function userAuthenticated(user) {
    appendUserData(user);
    hideTabbar(false);
    showLoader(false);
}

function userNotAuthenticated() {
    hideTabbar(true);
    showPage("login");

    // Firebase UI configuration
    const uiConfig = {
        credentialHelper: firebaseui.auth.CredentialHelper.NONE,
        signInOptions: [
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            firebase.auth.PhoneAuthProvider.PROVIDER_ID
        ],
        signInSuccessUrl: '#home'
    };
    // Init Firebase UI Authentication
    if (!_firebaseUI) {
        _firebaseUI = new firebaseui.auth.AuthUI(firebase.auth());
    }
    _firebaseUI.start('#firebaseui-auth-container', uiConfig);
    showLoader(false);
}

// show and hide tabbar
function hideTabbar(hide) {
    let tabbar = document.querySelector('#tabbar');
    if (hide) {
        tabbar.classList.add("hide");
    } else {
        tabbar.classList.remove("hide");
    }
}


// sign out user
function logout() {
    firebase.auth().signOut();
}

function appendUserData(user) {
    console.log(user);
    document.querySelector('#user-data').innerHTML = `
    <img class="profile-img" src="${user.photoURL || "img/placeholder.jpg"}">
    <h3>${user.displayName}</h3>
    <p>${user.email}</p>
  `;
}

const burger = document.querySelector('.fa-bars');
const curtain = document.querySelector('.curtain');
const close = document.querySelector('.fa-times');


burger.addEventListener('click', () => {
    curtain.classList.toggle("active");
})
close.addEventListener('click', () => {
    curtain.classList.toggle("active");
})