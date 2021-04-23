var gip;
var quantidade_pallets_expedidos;
var saldo_pendente;
var data_retorno_pallet_fisico;
var quantidade_pallet_devolvidos_fisico;
var data_retorno_pallet_coletado;
var quantidade_pallets_devolvidos_fisico_vale;
var quantidade_de_pallets_vale;

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

function validarDataRetornoPalletFisico() {
    data_retorno_pallet_fisico = $('#data_retorno_pallet_fisico').val();

    const isDataRetornoPalletFisico = !data_retorno_pallet_fisico

    if (isDataRetornoPalletFisico) {
        $('#data_retorno_pallet_fisico').css({ boxShadow: '0 0 5px red' })
        return false

    } else {
        $('#data_retorno_pallet_fisico').css({ boxShadow: 'none' })
        return true
    }
}

function validarQuantidadePalletsDevolvidosFisico() {
    quantidade_pallet_devolvidos_fisico = parseInt($('#quantidade_pallet_devolvidos_fisico').val());

    const isQuantidadePalletsDevolvidosFisicoInvalid = !quantidade_pallet_devolvidos_fisico;
    if (isQuantidadePalletsDevolvidosFisicoInvalid) {
        $('#quantidade_pallet_devolvidos_fisico').css({ boxShadow: '0 0 5px red' });

        return false;
    }
    $('#quantidade_pallet_devolvidos_fisico').css({ boxShadow: 'none' });

    return true;
}

function validarDataRetornoPalletColetado() {
    data_retorno_pallet_coletado = $('#data_retorno_pallet_coletado').val();

}



function validarQuantidadePalletsDevolvidosFisicoVale() {
    quantidade_pallets_devolvidos_fisico_vale = parseInt($('#quantidade_pallets_devolvidos_fisico_vale').val());

    return true;
}

function validarSaldoPendente(){
    saldo_pendente = parseInt($('#saldo_pendente').val());

    return true
}



function fillFields(data) {
    
    var quantidadePalletExpedidos = parseInt(data['quantidade_pallets_expedidos'])
    var dataRetornoPalletFisico = data['data_retorno_pallet_fisico']
    var quantidadePalletDevolvidoFisco = parseInt(data['quantidade_pallet_devolvidos_fisico'])
    var quantidadePalletsDevolvidosFisicoVale = data['quantidade_pallets_devolvidos_fisico_vale'] ? parseInt(data['quantidade_pallets_devolvidos_fisico_vale']) : 0
    var dataRetornoPalletColetado = data['data_retorno_pallet_coletado']
    var saldoPendente = parseInt(data['saldo_pendente'])

    $('#quantidade_pallets_expedidos').val(quantidadePalletExpedidos)
    $('#data_retorno_pallet_fisico').val(dataRetornoPalletFisico)
    $('#quantidade_pallet_devolvidos_fisico').val(quantidadePalletDevolvidoFisco)
    $('#quantidade_pallets_devolvidos_fisico_vale').val(quantidadePalletsDevolvidosFisicoVale)
    $('#data_retorno_pallet_coletado').val(dataRetornoPalletColetado)
    $('#saldo_pendente').val(saldoPendente = quantidadePalletExpedidos - (quantidadePalletDevolvidoFisco + quantidadePalletsDevolvidosFisicoVale))
}

$('#search-gip').on('submit', function (e) {
    e.preventDefault()

    const gipValido = validarGip()

    if (gipValido) {
        var token = localStorage.getItem('token')

        var config = {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }
    }

    api.get(`/gips/${gip}`, config)
        .then(function (response) {
            fillFields(response.data.gip);
        })
        .catch(function (error) {
            $('#alerta').append(`
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        GIP não localizado
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
        `)
        })
})

$('#atualizar_datas_pallet').on('submit', function (e) {
    e.preventDefault()

    const gipValido = validarGip()
    const dataRetornoPalletFisicoValida = validarDataRetornoPalletFisico()
    const quantidadePalletsDevolvidosFisicoValido = validarQuantidadePalletsDevolvidosFisico()
    const dataRetornoPalletColetadoValeValido = validarDataRetornoPalletColetado()
    const quantidadePalletsDevolvidosFisicoValeValido = validarQuantidadePalletsDevolvidosFisicoVale()
    const saldoPendenteValido = validarSaldoPendente()

    var gipData = {
        data_retorno_pallet_fisico,
        quantidade_pallet_devolvidos_fisico,
        data_retorno_pallet_coletado,
        quantidade_pallets_devolvidos_fisico_vale,
        saldo_pendente,
    }

    console.log('dsadaw',gipData);

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
            console.log(error)
        })
})