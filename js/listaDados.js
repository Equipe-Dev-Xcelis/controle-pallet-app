var gip;

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

function buildList(list) {
    $('tbody').empty()

    for (var i = 0; i < list.length; i++) {
        const gip = list[i]['gip']
        const data_expedicao = list[i]['data_expedicao']
        const quantidade_pallets_expedidos = list[i]['quantidade_pallets_expedidos']
        const data_retorno_vale_pallet = list[i]['data_retorno_vale_pallet']
        const validade_vale_pallet = list[i]['validade_vale_pallet']


        $('tbody').append(`
            <tr>
                <td>${gip}</td>
                <td>${data_expedicao}</td>
                <td>${quantidade_pallets_expedidos}</td>
                <td>${data_retorno_vale_pallet}</td>
                <td>${validade_vale_pallet}</td>
                <td>
                    <a class="edit" href="editarDados.html?id=${gip}">Editar</a>
                </td>
            </tr>
        `)
    }
}

function fetchList() {
    var token = localStorage.getItem('token')

    var config = {
        headers: {
            Authorization: 'Bearer ' + token
        }
    }

    api.get('/gips', config)
        .then(function (response) {
            buildList(response.data.gips)
        })
        .catch(function (error) {
            console.log(error);
        })
}


$('#gip-search').on('submit', function (e) {
    e.preventDefault()

    const gipValido = validarGip()

    if (gipValido) {
        var token = localStorage.getItem('token')

        var config = {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }

        api.get(`/gips/${gip}`, config)
            .then(function (response) {
                buildList([response.data.gip])
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
fetchList()