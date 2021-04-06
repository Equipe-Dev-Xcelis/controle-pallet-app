var btnLogin = document.getElementById('btnLogin');
var inputEmail = document.getElementById('inputEmail');
var inputPassword = document.getElementById('inputPassword');
var btnLogout = document.getElementById('btnLogout');

btnLogin.addEventListener('click', function () {
  firebase.auth().signInWithEmailAndPassword(inputEmail.value, inputPassword.value).then(function (result) {
    alert("Usuário Conectado!");
    // console.log("Success!");
    window.location.replace('menu.html');


  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = "Usuario ou senha incorretos!";
    alert(errorMessage);
    // console.log("Failure!")
  });
});

function signOut() {

  firebase.auth().signOut().then(() => {
    alert("Usuario desconectado!")
    window.location.replace('index.html');
  }).catch((error) => {
    alert(error.message);
  });
}


