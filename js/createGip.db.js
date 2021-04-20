var gip = $('#gip').val()
let data_expedicao = $('#data_expedicao').val()
let nota_fiscal = $('#nota_fiscal').val()
let destinatario = $('#destinatario')
let cidade = $('#cidade').val()
let uf = $('#uf').val
let transportadora = $('#transportadora').val()
let motorista = $('#motorista').val()
let quantidade_pallets_expedidos = $('#quantidade_pallets_expedidos').val()
let obs = $('#obs').val()


// function validarGip() {
//   gip = parseInt($('#gip').val());

//   const isGipInvalid = !gip;
//   if (isGipInvalid) {
//     $('#gip').css({ boxShadow: '0 0 5px red' });

//     return false;
//   }

//   $('#gip').css({ boxShadow: 'none' });

//   return true;
// }

// function validardata_expedicao() {
//   data_expedicao = $('#data_expedicao').val();
//   return true;
// }

// function validarnota_fiscal() {
//   nota_fiscal = parseInt($('#nota_fiscal').val());

//   const isnota_fiscalInvalid = !nota_fiscal;
//   if (isnota_fiscalInvalid) {
//     $('#nota_fiscal').css({ boxShadow: '0 0 5px red' });

//     return false;
//   }

//   $('#nota_fiscal').css({ boxShadow: 'none' });

//   return true;
// }


// function validarDestinatatrio() {
//   destinatario = $('#destinatario').val();

//   const isDestinatarioBlank = !destinatario.length;
//   if (isDestinatarioBlank) {
//     $('#destinatario').css({ boxShadow: '0 0 5px red' });

//     return false;
//   }

//   $('#destinatario').css({ boxShadow: 'none' });

//   return true;
// }

// function validarquantidade_pallets_expedidos() {
//   quantidade_pallets_expedidos = $('#quantidade_pallets_expedidos').val();

//   const isquantidade_pallets_expedidosInvalid = !quantidade_pallets_expedidos;
//   if (isquantidade_pallets_expedidosInvalid) {
//     $('#quantidade_pallets_expedidos').css({ boxShadow: '0 0 5px red' });

//     return false;
//   }

//   $('#quantidade_pallets_expedidos').css({ boxShadow: 'none' });

//   return true;
// }

// function validartransportadora() {
//   transportadora = $('#transportadora').val();

//   const istransportadoraBlank = !transportadora.length;
//   if (istransportadoraBlank) {
//     $('#transportadora').css({ boxShadow: '0 0 5px red' });

//     return false;
//   }

//   $('#uf').css({ boxShadow: 'none' });

//   return true;
// }

// function validarMotorista() {
//   motorista = $('#motorista').val();

//   const isMotoristaLengthInvalid = !motorista.length || motorista.length < 1;
//   if (isMotoristaLengthInvalid) {
//     $('#motorista').css({ boxShadow: '0 0 5px red' });

//     return false;
//   }

//   const hasMotoristaInvalidChar = !(/^[a-zA-Z\u00C0-\u00FF ]+$/g.test(motorista));
//   if (hasMotoristaInvalidChar) {
//     $('#motorista').css({ boxShadow: '0 0 5px red' });

//     return false;
//   }

//   $('#motorista').css({ boxShadow: 'none' });

//   return true;
// }

// function validarCidade() {
//   cidade = $('#cidade').val();

//   const isCidadeBlank = !cidade.length;
//   if (isCidadeBlank) {
//     $('#cidade').css({ boxShadow: '0 0 5px red' });

//     return false;
//   }

//   $('#cidade').css({ boxShadow: 'none' });

//   return true;
// }

// function validarUf() {
//   uf = $('#uf').val();

//   const isUfBlank = !uf.length;
//   if (isUfBlank) {
//     $('#uf').css({ boxShadow: '0 0 5px red' });

//     return false;
//   }

//   $('#uf').css({ boxShadow: 'none' });

//   return true;
// }

$('#pallet-form').on('submit', function (e) {
  e.preventDefault();

  // const gipValida = validarGip();
  // const dataExpedicaoValida = validardata_expedicao();
  // const nota_fiscalValida = validarnota_fiscal();
  // const destinatarioValido = validarDestinatatrio();
  // const cidadeValida = validarCidade();
  // const ufValida = validarUf();
  // const transportadoraValida = validartransportadora();
  // const motoristaValido = validarMotorista();
  // const quantidade_pallets_expedidosValido = validarquantidade_pallets_expedidos();



  // if (gipValida && dataExpedicaoValida && nota_fiscalValida && destinatarioValido && cidadeValida && ufValida && transportadoraValida && motoristaValido && quantidade_pallets_expedidosValido) {

    const apiCreateUrl = `http://localhost:3200/api/gips`;

    const gpiData = {
      gip,
      data_expedicao,
      nota_fiscal,
      destinatario,
      cidade,
      uf,
      transportadora,
      motorista,
      quantidade_pallets_expedidos,
      obs,
    };

    axios.post(apiCreateUrl, gpiData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        // alert(error.data.message);
        console.log(error);
        
      });
  // }
});