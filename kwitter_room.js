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
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " + user_name + " ! ";

    function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);1
      window.location = "kwitter_page.html";
    }









//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       row = "<div class='room_name' id ="+Room_names+" onclick='redirectToRoomName(this.id)' > #" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name) {

      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
