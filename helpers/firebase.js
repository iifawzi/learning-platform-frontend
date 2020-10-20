const firebase = require("firebase/app");
require("firebase/auth");
  const firebaseConfig = {
    apiKey: "AIzaSyD1PPKfkUfGgLzBjkmsqZ1aOvMCMF4Z9ws",
    authDomain: "e-learning-90f2c.firebaseapp.com",
    databaseURL: "https://e-learning-90f2c.firebaseio.com",
    projectId: "e-learning-90f2c",
    storageBucket: "e-learning-90f2c.appspot.com",
    messagingSenderId: "1087171383032",
    appId: "1:1087171383032:web:dbb8073a46df50684ef50d",
    measurementId: "G-W2YM9N3DV1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  module.exports = firebase;