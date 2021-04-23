var gip;
var quantidade_pallets_expedidos;
var destinatario;
var numero_vale_pallet;
var quantidade_de_pallets_vale;
var data_retorno_vale_pallet;
var validade_vale_pallet;


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

function validarNumeroValePallet() {
    numero_vale_pallet = parseInt($('#numero_vale_pallet').val());

    const isNumeroValePallet = !numero_vale_pallet;
    if (isNumeroValePallet) {
        $('#numero_vale_pallet').css({ boxShadow: '0 0 5px red' });

        return false;
    }

    $('#numero_vale_pallet').css({ boxShadow: 'none' });

    return true;
}

function validarQuantidadeDePalletsVale() {
    quantidade_de_pallets_vale = parseInt($('#quantidade_de_pallets_vale').val());

    const isQuantidadeDePalletsVale = !quantidade_de_pallets_vale;
    if (isQuantidadeDePalletsVale) {
        $('#quantidade_de_pallets_vale').css({ boxShadow: '0 0 5px red' });

        return false;
    }

    $('#quantidade_de_pallets_vale').css({ boxShadow: 'none' });

    return true;
}

function validarDataRetornoValePallet() {
    data_retorno_vale_pallet = $('#data_retorno_vale_pallet').val();

    const isDataRetornoValePallet = !data_retorno_vale_pallet

    if (isDataRetornoValePallet) {
        $('#data_retorno_vale_pallet').css({ boxShadow: '0 0 5px red' })
        return false

    } else {
        $('#data_retorno_vale_pallet').css({ boxShadow: 'none' })
        return true
    }
}

function validarValidadeValePallet() {
    validade_vale_pallet = $('#validade_vale_pallet').val();

    const isValidadeValePallet = !validade_vale_pallet

    if (isValidadeValePallet) {
        $('#validade_vale_pallet').css({ boxShadow: '0 0 5px red' })
        return false

    } else {
        $('#validade_vale_pallet').css({ boxShadow: 'none' })
        return true
    }
}


$('#search-gip').on('submit', function (e) {
    e.preventDefault()

    const gipValida = validarGip();

    if (gipValida) {
        var token = localStorage.getItem('token')

        var config = {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }

        api.get(`/gips/${gip}`, config)
            .then(function (response) {
                $('tbody').empty()

                $('#gip-list').append(`
                    <tr>
                        <td>${response.data.gip.gip}</td>
                        <td>${response.data.gip.quantidade_pallets_expedidos}</td>
                        <td>${response.data.gip.destinatario}</td>
                    </tr>
                `)
            })
            .catch(function (error) {
                $('#alerta').append(`
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        Gip nao localizado
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
        `)
            })
    }
})

$('#atualizar_vale_pallet').on('submit', function (e) {
    e.preventDefault()

    const gipValido = validarGip()
    const numeroValePalletvalido = validarNumeroValePallet()
    const quantidadeDePalletsVale = validarQuantidadeDePalletsVale()
    const dataRetornoValePalletValido = validarDataRetornoValePallet()
    const validadeValePalletValido = validarValidadeValePallet()

    if (gipValido && numeroValePalletvalido && quantidadeDePalletsVale && validadeValePalletValido) {

        var gipData = {
            numero_vale_pallet,
            quantidade_de_pallets_vale,
            data_retorno_vale_pallet,
            validade_vale_pallet,
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
    }
})