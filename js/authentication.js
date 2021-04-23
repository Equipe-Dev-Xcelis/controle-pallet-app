let email
let senha

function validarEmail() {
  email = $('#email').val();

  const isEmailInvalid = !email;
  if (isEmailInvalid) {
    $('#email').css({ boxShadow: '0 0 5px red' })

    return false
  }

  $('#email').css({ boxShadow: 'none' })

  return true
}

function validarSenha() {
  senha = $('#senha').val();

  const isSenhaInvalid = !senha;

  if (isSenhaInvalid) {
    $('#senha').css({ boxShadow: '0 0 5px red' })

    return false
  }

  $('#senha').css({ boxShadow: 'none' })

  return true
}

console.log('testando auth');

$('#login-form').on('submit', function (e) {
  e.preventDefault();

  const emailValido = validarEmail()
  const senhaValida = validarSenha()


  if (emailValido && senhaValida) {

    const userData = {
      senha,
      email
    }

    api.post('/entrar', userData)
      .then(function (response) {
        localStorage.setItem('token', response.data.token)
        alert(response.data.message)
        window.location.replace('menu.html')

      })
      .catch(function (error) {
        // window.location.replace('404.html')
      })
  }
})