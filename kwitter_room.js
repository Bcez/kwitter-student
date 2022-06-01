// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCKgV3PivwitPbUmjkJhAwEtORbCeKpY5o",
      authDomain: "kwitter-adb3e.firebaseapp.com",
      databaseURL: "https://kwitter-adb3e-default-rtdb.firebaseio.com",
      projectId: "kwitter-adb3e",
      storageBucket: "kwitter-adb3e.appspot.com",
      messagingSenderId: "355868779836",
      appId: "1:355868779836:web:3c48839fcedeca16a8ea39"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
