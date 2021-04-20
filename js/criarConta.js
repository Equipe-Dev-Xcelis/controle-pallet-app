let nome;
let email;
let senha;

function validarNome() {
  nome = $('#nome').val();

  const isNomeInvalid = !nome;
  if (isNomeInvalid) {
    $('#nome').css({ boxShadow: '0 0 5px red' });

    return false;
  }

  $('#nome').css({ boxShadow: 'none' });

  return true;
}

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



$('#create_account_form').on('submit', function (e) {
  e.preventDefault();

  const nomeValido = validarNome();
  const emailValido = validarEmail();
  const senhaValida = validarSenha();


  if (nomeValido && emailValido && senhaValida) {

    const apiCreateAccount = `http://localhost:3200/api/cadastrar`;

    const userData = {
      nome,
      senha,
      email
    };

    axios.post(apiCreateAccount, userData)
      .then(function (response) {
        localStorage.setItem('token', response.data.token)
        alert(response.data.message);
        window.location.replace('menu.html')
      })
      .catch(function (error) {
        window.location.replace('404.html')
      });
  }
});