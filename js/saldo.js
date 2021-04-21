var gip
var quantidade_pallets_expedidos

function validarGip() {
    gip = parseInt($('#gip').val())

    const isGipInvalid = !gip
    if (isGipInvalid) {
        $('#gip').css({ boxShadow: '0 0 5px red' })

        return false
    }

    $('#gip').css({ boxShadow: 'none' })

    return true
}

function validarquantidade_pallets_expedidos() {
    quantidade_pallets_expedidos = $('#quantidade_pallets_expedidos').val()

    const isquantidade_pallets_expedidosInvalid = !quantidade_pallets_expedidos
    if (isquantidade_pallets_expedidosInvalid) {
        $('#quantidade_pallets_expedidos').css({ boxShadow: '0 0 5px red' })
        return false
    }

    $('#quantidade_pallets_expedidos').css({ boxShadow: 'none' })

    return true
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
        //quantidade_pallets_expedidos

        api.get(`/gips/${gip}`, config)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
})