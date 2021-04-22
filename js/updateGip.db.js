var gip;
var data_expedicao;
var nota_fiscal;
var destinatario;
var cidade;
var uf;
var transportadora;
var motorista;
var quantidade_pallets_expedidos;
var numero_vale_pallet;
var quantidade_de_pallets_vale;
var data_retorno_vale_pallet;
var validade_vale_pallet;
var data_retorno_pallet_fisico;
var quantidade_pallets_devolvidos_fisico;
var quantidade_pallets_pendente_vale;
var quantidade_pallets_devolvidos_fisico_vale;
var obs;

function fetchData() {
    gip = window.location.href.split('=')[1];

    var token = localStorage.getItem('token')

    var config = {
        headers: {
            Authorization: 'Bearer ' + token
        }
    }
    api.get(`/gips/${gip}`, config)
        .then(function (response) {
            fillFields(response.data.gip)
        })
}

function fillFields(data) {
    // console.log(data);
    $('#data_expedicao').val(data['data_expedicao'] || '');
    $('#nota_fiscal').val(data['nota_fiscal'] || '');
    $('#destinatario').val(data['destinatario'] || '');
    $('#cidade').val(data['cidade'] || '');
    $('#uf').val(data['uf']);
    $('#transportadora').val(data['transportadora']);
    $('#motorista').val(data['motorista']);
    $('#quantidade_pallets_expedidos').val(data['quantidade_pallets_expedidos']);
    $('#numero_vale_pallet').val(data['numero_vale_pallet']);
    $('#quantidade_de_pallets_vale').val(data['quantidade_de_pallets_vale']);
    $('#data_retorno_vale_pallet').val(data['data_retorno_vale_pallet']);
    $('#validade_vale_pallet').val(data['validade_vale_pallet']);
    $('#data_retorno_pallet_fisico').val(data['data_retorno_pallet_fisico']);
    $('#quantidade_pallets_devolvidos_fisico').val(data['quantidade_pallets_devolvidos_fisico']);
    $('#quantidade_pallets_pendente_vale').val(data['quantidade_pallets_pendente_vale']);
    $('#quantidade_pallets_devolvidos_fisico_vale').val(data['quantidade_pallets_devolvidos_fisico_vale']);
    $('#obs').val(data['obs']);
}

$('#pallet-form').on('submit', function (e) {
    var gipData = {
        data_expedicao,
        nota_fiscal,
        destinatario,
        cidade,
        uf,
        transportadora,
        motorista,
        quantidade_pallets_expedidos,
        numero_vale_pallet,
        quantidade_de_pallets_vale,
        data_retorno_vale_pallet,
        validade_vale_pallet,
        data_retorno_pallet_fisico,
        quantidade_pallets_devolvidos_fisico,
        quantidade_pallets_pendente_vale,
        quantidade_pallets_devolvidos_fisico_vale,
        obs,
    }

    var token = localStorage.getItem('token')

    var config = {
        headers: {
            Authorization: 'Bearer ' + token
        }
    }

    api.put(`/gips/${gip}`, gipData, config)
        .then(function (response) {
            $('#alerta').append(`
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                 ${response.data.message}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `)
        })
        .catch(function (error) {
            console.log(error);
        })

})

fetchData();

