let firebaseConfig = {
    apiKey: "AIzaSyC8mSnRMFQlnpLjErWGj02p1lZe-odxSrg",
    authDomain: "hernando-reptile.firebaseapp.com",
    databaseURL: "https://hernando-reptile-default-rtdb.firebaseio.com",
    projectId: "hernando-reptile",
    storageBucket: "hernando-reptile.appspot.com",
    messagingSenderId: "655419173124",
    appId: "1:655419173124:web:c0bbc29423cae1e0cf8851"
};
firebase.initializeApp(firebaseConfig);

let uploader = document.getElementById('uploader');
let fileButton = document.getElementById('fileButton');

fileButton.addEventListener('change', function (e) {
    let file = e.target.files[0];
    let storageRef = firebase.storage().ref('images/' + file.name);

    storageRef.put(file);
})
