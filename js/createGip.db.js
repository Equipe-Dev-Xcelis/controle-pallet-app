let gip
let dataExpedicao
let notafiscal
let destinatario
let cidade
let uf
let transportadoraAg
let motorista
let qtdPalletsEx


function validarGip() {
  gip = parseInt($('#gip').val());

  const isGipInvalid = !gip;
  if (isGipInvalid) {
    $('#gip').css({ boxShadow: '0 0 5px red' });

    return false;
  }

  $('#gip').css({ boxShadow: 'none' });

  return true;
}

function validarDataExpedicao() {
  dataExpedicao = $('#dataExpedicao').val();
  return true;
}

function validarNotaFiscal() {
  notafiscal = parseInt($('#notafiscal').val());

  const isNotaFiscalInvalid = !notafiscal;
  if (isNotaFiscalInvalid) {
    $('#notafiscal').css({ boxShadow: '0 0 5px red' });

    return false;
  }

  $('#notafiscal').css({ boxShadow: 'none' });

  return true;
}


function validarDestinatatrio() {
  destinatario = $('#destinatario').val();

  const isDestinatarioBlank = !destinatario.length;
  if (isDestinatarioBlank) {
    $('#destinatario').css({ boxShadow: '0 0 5px red' });

    return false;
  }

  $('#destinatario').css({ boxShadow: 'none' });

  return true;
}

function validarQtdPalletsEx() {
  qtdPalletsEx = $('#qtdPalletsEx').val();

  const isqtdPalletsExInvalid = !qtdPalletsEx;
  if (isqtdPalletsExInvalid) {
    $('#qtdPalletsEx').css({ boxShadow: '0 0 5px red' });

    return false;
  }

  $('#qtdPalletsEx').css({ boxShadow: 'none' });

  return true;
}

function validarTransportadoraAg() {
  transportadoraAg = $('#transportadoraAg').val();

  const isTransportadoraAgBlank = !transportadoraAg.length;
  if (isTransportadoraAgBlank) {
    $('#transportadoraAg').css({ boxShadow: '0 0 5px red' });

    return false;
  }

  $('#uf').css({ boxShadow: 'none' });

  return true;
}

function validarMotorista() {
  motorista = $('#motorista').val();

  const isMotoristaLengthInvalid = !motorista.length || motorista.length < 1;
  if (isMotoristaLengthInvalid) {
    $('#motorista').css({ boxShadow: '0 0 5px red' });

    return false;
  }

  const hasMotoristaInvalidChar = !(/^[a-zA-Z\u00C0-\u00FF ]+$/g.test(motorista));
  if (hasMotoristaInvalidChar) {
    $('#motorista').css({ boxShadow: '0 0 5px red' });

    return false;
  }

  $('#motorista').css({ boxShadow: 'none' });

  return true;
}

function validarCidade() {
  cidade = $('#cidade').val();

  const isCidadeBlank = !cidade.length;
  if (isCidadeBlank) {
    $('#cidade').css({ boxShadow: '0 0 5px red' });

    return false;
  }

  $('#cidade').css({ boxShadow: 'none' });

  return true;
}

function validarUf() {
  uf = $('#uf').val();

  const isUfBlank = !uf.length;
  if (isUfBlank) {
    $('#uf').css({ boxShadow: '0 0 5px red' });

    return false;
  }

  $('#uf').css({ boxShadow: 'none' });

  return true;
}

$('#pallet-form').on('submit', function (e) {
  e.preventDefault();

  const gipValida = validarGip();
  const dataExpedicaoValida = validarDataExpedicao();
  const notaFiscalValida = validarNotaFiscal();
  const destinatarioValido = validarDestinatatrio();
  const cidadeValida = validarCidade();
  const ufValida = validarUf();
  const transportadoraAgValida = validarTransportadoraAg();
  const motoristaValido = validarMotorista();
  const qtdPalletsExValido = validarQtdPalletsEx();



  if (gipValida && dataExpedicaoValida && notaFiscalValida && destinatarioValido && cidadeValida && ufValida && transportadoraAgValida && motoristaValido && qtdPalletsExValido) {

    const apiCreateUrl = `${BASE_URL}/gip`;

    const gpiData = {
      gip,
      dataExpedicao,
      notafiscal,
      destinatario,
      cidade,
      uf,
      transportadoraAg,
      motorista,
      qtdPalletsEx,
    };

    axios.post(apiCreateUrl, gpiData)
      .then(function (response) {
        alert(response.data.message);

      })
      .catch(function (error) {
        alert(error.data.message);
        console.log(error);
        
      });
  }
});