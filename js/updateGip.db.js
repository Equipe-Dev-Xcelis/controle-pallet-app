var gip;

function fetchData() {
    gip = window.location.href.split('=')[1];

    var token = localStorage.getItem('token')

    var config = {
        headers: {
            Authorization: 'Bearer ' + token
        }
    }
    api.get(`/gipsnovos/${gip}`, config)
        .then(function(response) {
            fillFields(response.data.gips_novos)
        })
}

function fillFields(data) {
    $('#gip').val(data['gip'])
    $('#data_expedicao').val(data['data_expedicao'])
    $('#nota_fiscal').val(data['nota_fiscal'])
    $('#destinatario').val(data['destinatario'])
    $('#cidade').val(data['cidade'])
    $('#uf').val(data['uf'])
    $('#transportadora').val(data['transportadora'])
    $('#motorista').val(data['motorista'])
    $('#quantidade_pallets_expedidos').val(data['quantidade_pallets_expedidos'])
    $('#numero_vale_pallet').val(data['numero_vale_pallet'])
    $('#quantidade_de_pallets_vale').val(data['quantidade_de_pallets_vale'])
    $('#data_retorno_vale_pallet').val(data['data_retorno_vale_pallet'])
    $('#validade_vale_pallet').val(data['validade_vale_pallet'])
    $('#data_retorno_pallet_fisico').val(data['data_retorno_pallet_fisico'])
    $('#quantidade_pallet_devolvidos_fisico').val(data['quantidade_pallet_devolvidos_fisico'])
    $('#data_retorno_pallet_coletado').val(data['data_retorno_pallet_coletado'])
    $('#quantidade_pallets_devolvidos_fisico_vale').val(data['quantidade_pallets_devolvidos_fisico_vale'])
    $('#quantidade_pallets_pendente_vale').val(data['quantidade_pallets_pendente_vale'])
    $('#saldo_pendente').val(data['saldo_pendente'])
    $('#obs').val(data['obs'])
}

$('#pallet-form').on('submit', function(e) {
    e.preventDefault()

    var data_expedicao = $('#data_expedicao').val()
    var nota_fiscal = $('#nota_fiscal').val()
    var destinatario = $('#destinatario').val()
    var cidade = $('#cidade').val()
    var uf = $('#uf').val()
    var transportadora = $('#transportadora').val()
    var motorista = $('#motorista').val()
    var quantidade_pallets_expedidos = $('#quantidade_pallets_expedidos').val()
    var numero_vale_pallet = $('#numero_vale_pallet').val()
    var quantidade_de_pallets_vale = $('#quantidade_de_pallets_vale').val()
    var data_retorno_vale_pallet = $('#data_retorno_vale_pallet').val()
    var validade_vale_pallet = $('#validade_vale_pallet').val()
    var data_retorno_pallet_fisico = $('#data_retorno_pallet_fisico').val()
    var quantidade_pallet_devolvidos_fisico = $('#quantidade_pallet_devolvidos_fisico').val()
    var data_retorno_pallet_coletado = $('#data_retorno_pallet_coletado').val()
    var quantidade_pallets_devolvidos_fisico_vale = $('#quantidade_pallets_devolvidos_fisico_vale').val()
    var saldo_pendente = $('#saldo_pendente').val()
    var obs = $('#obs').val()

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
        quantidade_pallet_devolvidos_fisico,
        data_retorno_pallet_coletado,
        quantidade_pallets_devolvidos_fisico_vale,
        saldo_pendente,
        obs,
    }

    var token = localStorage.getItem('token')

    var config = {
        headers: {
            Authorization: 'Bearer ' + token
        }
    }

    api.put(`/gipsnovos/${gip}`, gipData, config)
        .then(function(response) {
            $('#alerta').append(`
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                 ${response.data.message}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `)
        })
        .catch(function(error) {
            console.log(error);
        })
})

fetchData();