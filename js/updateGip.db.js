let gip;
let qtdPallets;
let transportadoraAg;
let motorista;
let cidade;
let uf;
let dtRetornoVale;
let qtdDevolucaoVale;
let dtRetornoFisico;
let qtdDevolucaoFisico;
let nmrValePallet;
let obs;

function fetchData() {
    gip = window.location.href.split('=')[1];
    const apiFindByIdUrl = `https://pallets-api.herokuapp.com/api/v1/gip/${gip}`;

    axios.get(apiFindByIdUrl)
        .then(function (response) {
            fillFields(response.data.data[0]);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function fillFields(data) {
    console.log(data);
    $('#qtdPallets').val(data['qtdPallets'] || '');
    $('#transportadoraAg').val(data['transportadoraAg'] || '');
    $('#motorista').val(data['motorista'] || '');
    $('#cidade').val(data['cidade'] || '');
    $('#uf').val(data['uf']);
    $('#dtRetornoVale').val(data['dtRetornoVale']);
    $('#qtdDevolucaoVale').val(data['qtdDevolucaoVale']);
    $('#dtRetornoFisico').val(data['dtRetornoFisico']);
    $('#qtdDevolucaoFisico').val(data['qtdDevolucaoFisico']);
    $('#nmrValePallet').val(data['nmrValePallet']);
    $('#obs').val(data['obs']);
}

function validarQtdPallets() {
    qtdPallets = $('#qtdPallets').val();

    const isQtdPalletsInvalid = !qtdPallets;
    if (isQtdPalletsInvalid) {
        $('#qtdPallets').css({ boxShadow: '0 0 5px red' });

        return false;
    }

    $('#qtdPallets').css({ boxShadow: 'none' });

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
//dtRetornoVale
    function validarDtRetornoVale() {
    dtRetornoVale = $('#dtRetornoVale').val();
    return true;
  }

function validarQtdDevolucaoVale() {
    qtdDevolucaoVale = $('#qtdDevolucaoVale').val();

    const isDevolucaoValeInvalid = !qtdDevolucaoVale;
    if (isDevolucaoValeInvalid) {
        $('#qtdDevolucaoVale').css({ boxShadow: '0 0 5px red' });

        return false;
    }

    $('#qtdDevolucaoVale').css({ boxShadow: 'none' });

    return true;
}


function validarDtRetornoFisico(){
  dtRetornoFisico = $('#dtRetornoFisico').val();
  return true;

}

//qtdDevolucaoFisico
function validarQtdDevolucaoFisico() {
    qtdDevolucaoFisico = $('#qtdDevolucaoFisico').val();

    const isDevolucaoFisicoInvalid = !qtdDevolucaoFisico;
    if (isDevolucaoFisicoInvalid) {
        $('#qtdDevolucaoFisico').css({ boxShadow: '0 0 5px red' });

        return false;
    }

    $('#qtdDevolucaoFisico').css({ boxShadow: 'none' });

    return true;
}

//nmrValePallet
function validarNmrPallet() {
    nmrValePallet = $('#nmrValePallet').val();

    const isNmrPalletInvalid = !nmrValePallet;
    if (isNmrPalletInvalid) {
        $('#nmrValePallet').css({ boxShadow: '0 0 5px red' });

        return false;
    }

    $('#nmrValePallet').css({ boxShadow: 'none' });

    return true;
}


function validarObs() {
    obs = $('#obs').val();

    const isObsLengthInvalid = !obs.length || obs.length < 1;
    if (isObsLengthInvalid) {
        $('#obs').css({ boxShadow: '0 0 5px red' });

        return false;
    }

    $('#obs').css({ boxShadow: 'none' });

    return true;
}

$('#gip-edit').on('submit', function (e) {
    e.preventDefault();
    
    const qtdPalletsValido = validarQtdPallets();
    const transportadoraAgValida = validarTransportadoraAg();
    const motoristaValido = validarMotorista();
    const cidadeValida = validarCidade();
    const ufValida = validarUf();
    const dtRetornoValeValida = validarDtRetornoVale();
    const qtdDevolucaoValeValido = validarQtdDevolucaoVale();
    const dtRetornoFisico = validarDtRetornoFisico();
    const qtdDevolucaoFisicoValido = validarQtdDevolucaoFisico();
    const nmrValePalletValido = validarNmrPallet();
    const obsValida = validarObs();
    
    if (qtdPalletsValido && transportadoraAgValida && motoristaValido && cidadeValida && ufValida && dtRetornoValeValida && qtdDevolucaoValeValido && dtRetornoFisico && qtdDevolucaoFisicoValido && nmrValePalletValido && obsValida) {

        const apiUpdateUrl = `https://pallets-api.herokuapp.com/api/v1/gip/${gip}`;

        const gpiData = {
            qtdPallets,
            transportadoraAg,
            motorista,
            cidade,
            uf,
            dtRetornoVale,
            qtdDevolucaoVale,
            dtRetornoFisico,
            qtdDevolucaoFisico,
            nmrValePallet,
            obs,
        };
        axios.put(apiUpdateUrl, gpiData)
            .then(function (response) {
                alert(response.data.message)
            })
            .catch(function (error) {
                alert(error)
                console.log(response.data.message);
            });
    }
});

fetchData();

