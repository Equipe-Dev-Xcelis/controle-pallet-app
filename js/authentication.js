// var btnLogin = document.getElementById('btnLogin');
// var inputEmail = document.getElementById('inputEmail');
// var inputPassword = document.getElementById('inputPassword');
// var btnLogout = document.getElementById('btnLogout');

// btnLogin.addEventListener('click', function () {
//   firebase.auth().signInWithEmailAndPassword(inputEmail.value, inputPassword.value).then(function (result) {
//     alert("Usuário Conectado!");
//     // console.log("Success!");
//     window.location.replace('menu.html');


//   }).catch(function (error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = "Usuario ou senha incorretos!";
//     alert(errorMessage);
//     // console.log("Failure!")
//   });
// });

// function signOut() {

//   firebase.auth().signOut().then(() => {
//     alert("Usuario desconectado!")
//     window.location.replace('index.html');
//   }).catch((error) => {
//     alert(error.message);
//   });
// }

let email;
let senha;

function validarEmail() {
  email = $('#email').val();

  const isEmailInvalid = !email;
  if (isEmailInvalid) {
    $('#email').css({ boxShadow: '0 0 5px red' });

    return false;
  }

  $('#email').css({ boxShadow: 'none' });

  return true;
}

function validarSenha() {
  senha = $('#senha').val();

  const isSenhaInvalid = !senha;

  if (isSenhaInvalid) {
    $('#senha').css({ boxShadow: '0 0 5px red' });

    return false;
  }

  $('#senha').css({ boxShadow: 'none' });

  return true;
}



$('#login-form').on('submit', function (e) {
  e.preventDefault();

  const emailValido = validarEmail();
  const senhaValida = validarSenha();


  if (emailValido && senhaValida) {

    const apiUserLogin = `${BASE_URL}/entrar`;

    const userData = {
      senha,
      email
    };



    axios.post(apiUserLogin, userData)
      .then(function (response) {
        console.log(response);
        localStorage.setItem('token', response.data.token);
        window.location.replace('menu.html');
        // alert(response.);

      })
      .catch(function (error) {
        // alert(error.data.message);
        
      });
  }
});




    // const token = localStorage.setItem('token');

    // const header = `Authorization: Bearer ${token}`;
    // { headers: { header } }