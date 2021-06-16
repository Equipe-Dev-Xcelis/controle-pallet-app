var data_expedicao;
var nota_fiscal;
var destinatario;
var cidade;
var uf;
var transportadora;
var motorista;
var quantidade_pallets_expedidos;
var obs;

function validardata_expedicao() {
    data_expedicao = $('#data_expedicao').val();

    const isDataRetornoValePallet = !data_expedicao

    if (isDataRetornoValePallet) {
        $('#data_expedicao').css({ boxShadow: '0 0 5px red' })
        return false

    } else {
        $('#data_expedicao').css({ boxShadow: 'none' })
        return true
    }
}

function validarnota_fiscal() {
    nota_fiscal = parseInt($('#nota_fiscal').val());

    const isnota_fiscalInvalid = !nota_fiscal;
    if (isnota_fiscalInvalid) {
        $('#nota_fiscal').css({ boxShadow: '0 0 5px red' });

        return false;
    }

    $('#nota_fiscal').css({ boxShadow: 'none' });

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

    const isufBlank = !uf.length;
    if (isufBlank) {
        $('#uf').css({ boxShadow: '0 0 5px red' });

        return false;
    }

    $('#uf').css({ boxShadow: 'none' });

    return true;
}

function validarquantidade_pallets_expedidos() {
    quantidade_pallets_expedidos = $('#quantidade_pallets_expedidos').val();

    const isquantidade_pallets_expedidosInvalid = !quantidade_pallets_expedidos;
    if (isquantidade_pallets_expedidosInvalid) {
        $('#quantidade_pallets_expedidos').css({ boxShadow: '0 0 5px red' });

        return false;
    }

    $('#quantidade_pallets_expedidos').css({ boxShadow: 'none' });

    return true;
}

function validartransportadora() {
    transportadora = $('#transportadora').val();

    const istransportadoraBlank = !transportadora.length;
    if (istransportadoraBlank) {
        $('#transportadora').css({ boxShadow: '0 0 5px red' });

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

function validarObs() {
    obs = $('#obs').val();

    return true;
}

$(document).ready(function() {
    $('#transportadora').select2();
});

$(document).ready(function() {
    $('#destinatario').select2();
});

$(document).ready(function() {
    $('#cidade').select2();
});

$(document).ready(function() {
    $('#uf').select2();
});

$('#pallet-form').on('submit', (e) => {
    e.preventDefault();

    const dataExpedicaoValida = validardata_expedicao();
    const nota_fiscalValida = validarnota_fiscal();
    const destinatarioValido = validarDestinatatrio();
    const cidadeValida = validarCidade();
    const ufValida = validarUf();
    const transportadoraValida = validartransportadora();
    const motoristaValido = validarMotorista();
    const quantidade_pallets_expedidosValido = validarquantidade_pallets_expedidos();
    const obsValido = validarObs()


    if (dataExpedicaoValida && nota_fiscalValida && destinatarioValido && cidadeValida && ufValida && transportadoraValida && motoristaValido && quantidade_pallets_expedidosValido && obsValido) {

        var gipData = {
            data_expedicao,
            nota_fiscal,
            destinatario,
            cidade,
            uf,
            transportadora,
            motorista,
            quantidade_pallets_expedidos,
            obs,
        }

        var token = localStorage.getItem('token')

        var config = {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }



        api.post('/gips', gipData, config)
            .then(function(response) {
                $('#alerta').append(`
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            ${response.data.message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `)
            })
            .catch(function(error) {
                $('#alerta').append(`
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
            ${error.response.data.message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `)
            })
    }
})