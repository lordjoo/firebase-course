const firebase= require("firebase/app");
require("firebase/auth");
require("firebase/firestore");
const firebaseConfig = require("./config");
firebase.initializeApp(firebaseConfig);

module.exports = firebase;

// app = firebase