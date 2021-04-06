let gip;
let dataExpedicao;
let notafiscal;
let destinatario;
let endereco;

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

  function validarEndereco() {
    endereco = $('#endereco').val();
  
    const isEnderecoBlank = !endereco.length;
    if (isEnderecoBlank) {
      $('#endereco').css({ boxShadow: '0 0 5px red' });
  
      return false;
    }
  
    $('#endereco').css({ boxShadow: 'none' });
  
    return true;
  }

  $('#pallet-form').on('submit', function (e) {
    e.preventDefault();

    const gipValida = validarGip();
    const dataExpedicaoValida = validarDataExpedicao();
    const notaFiscalValida = validarNotaFiscal();
    const destinatarioValido = validarDestinatatrio();
    const enderecoValido = validarEndereco();
 
  
    if (gipValida && dataExpedicaoValida && notaFiscalValida &&  destinatarioValido && enderecoValido ) {
      const apiCreateUrl = 'https://pallets-api.herokuapp.com/api/v1/gip';
  
      const gpiData = {
        gip,
        dataExpedicao,
        notafiscal,
        destinatario,
        endereco
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