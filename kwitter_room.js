// Your web app's Firebase configuration
var firebaseConfig = {
       apiKey: "AIzaSyAoaZk7xKYxmDIwYJT3I45cEsCN6seKLm0",
  authDomain: "sfsdf-7dc68.firebaseapp.com",
  databaseURL: "https://sfsdf-7dc68-default-rtdb.firebaseio.com",
  projectId: "sfsdf-7dc68",
  storageBucket: "sfsdf-7dc68.appspot.com",
  messagingSenderId: "22693425736",
  appId: "1:22693425736:web:5577cd2d5859c961eb9e7d"
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
