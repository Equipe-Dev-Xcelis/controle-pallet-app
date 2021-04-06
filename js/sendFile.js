//Upload de arquivos
function upload() {
    // Get the file from DOM
    var file = document.getElementById("file").files[0];
    console.log(file);
    // Created a Storage Reference with root dir
    var storageRef = firebase.storage().ref('/Arquivos Pallets');

    //dynamically set reference to the file name
    var thisRef = storageRef.child(file.name);

    //put request upload file to firebase storage
    thisRef.put(file).then(snapshot => snapshot.ref.getDownloadURL())
        .then(url => {
            var postKey = firebase.database().ref('Posts/').push().key;
            var updates = {};
            var postData = {
                fileName: file.name,
                url: url
            }
            updates['/Posts/' + postKey] = postData;
            firebase.database().ref().update(updates);
            alert("Arquivo enviado com sucesso!");
            console.log(url);

        });
}
