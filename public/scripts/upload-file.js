let uploader = document.getElementById('uploader');
let fileButton = document.getElementById('file-button');

fileButton.addEventListener('change', function (e) {
    // get file
    const file = e.target.files[0];
    // create storage ref: ex. ('folder_name/file_name)
    const storageRef = firebase.storage().ref('images/' + file.name);
    // upload file
    const task = storageRef.put(file);
    //update progress bar
    task.on('state_changed',

        function progress(snapshot) {
            const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            uploader.value = percentage;
        },
        function error(err) {
            if (err) throw err;
        },
        function complete() {
            firebase.storage().ref('images/' + file.name).getDownloadURL()
                .then((url) => {
                    // delete console.log before production
                    console.log(url)
                    // inserted into an <img> element
                    var img = document.getElementById('create-image');
                    img.setAttribute('src', url);
                })
        }
    );
});
