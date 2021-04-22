var gip;
var quantidade_pallets_expedidos;
var saldo_pendente;
var data_retorno_pallet_fisico;
var quantidade_pallets_devolvidos_fisico;
var data_retorno_pallet_coletado_vale;
var quantidade_pallets_devolvidos_fisico_vale;

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
    quantidade_pallets_devolvidos_fisico = parseInt($('#quantidade_pallets_devolvidos_fisico').val());

    const isQuantidadePalletsDevolvidosFisicoInvalid = !quantidade_pallets_devolvidos_fisico;
    if (isQuantidadePalletsDevolvidosFisicoInvalid) {
        $('#quantidade_pallets_devolvidos_fisico').css({ boxShadow: '0 0 5px red' });

        return false;
    }
    $('#quantidade_pallets_devolvidos_fisico').css({ boxShadow: 'none' });

    return true;
}

function validarDataRetornoPalletColetadoVale() {
    data_retorno_pallet_coletado_vale = $('#data_retorno_pallet_coletado_vale').val();

    const isDataRetornoPalletColetadoVale = !data_retorno_pallet_coletado_vale

    if (isDataRetornoPalletColetadoVale) {
        $('#data_retorno_pallet_coletado_vale').css({ boxShadow: '0 0 5px red' })
        return false

    } else {
        $('#data_retorno_pallet_coletado_vale').css({ boxShadow: 'none' })
        return true
    }
}


function validarQuantidadePalletsDevolvidosFisicoVale() {
    quantidade_pallets_devolvidos_fisico_vale = parseInt($('#quantidade_pallets_devolvidos_fisico_vale').val());

    const isQuantidadePalletsDevolvidosFisicoValeInvalid = !quantidade_pallets_devolvidos_fisico_vale;
    if (isQuantidadePalletsDevolvidosFisicoValeInvalid) {
        $('#quantidade_pallets_devolvidos_fisico_vale').css({ boxShadow: '0 0 5px red' });

        return false;
    }
    $('#quantidade_pallets_devolvidos_fisico_vale').css({ boxShadow: 'none' });

    return true;
}

function fillFields(data) {
    $('#quantidade_pallets_expedidos').val(data['quantidade_pallets_expedidos'] || ' ');
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
                        Gip nao localizado
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
    const dataRetornoPalletColetadoValeValido = validarDataRetornoPalletColetadoVale()
    const quantidadePalletsDevolvidosFisicoValeValido = validarQuantidadePalletsDevolvidosFisicoVale()


    if (gipValido && dataRetornoPalletFisicoValida && quantidadePalletsDevolvidosFisicoValido && dataRetornoPalletColetadoValeValido && quantidadePalletsDevolvidosFisicoValeValido) {

        var gipData = {
            data_retorno_pallet_fisico,
            quantidade_pallets_devolvidos_fisico,
            data_retorno_pallet_coletado_vale,
            quantidade_pallets_devolvidos_fisico_vale,
        }

        var token = localStorage.getItem('token')

        var config = {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }

        api.put(`/gips/${gip}`, gipData, config)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
})