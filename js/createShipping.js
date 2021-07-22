$('#cadastro-transportadora').on('submit', function (e) {
    e.preventDefault();

    var transportadora = $('#transportadora').val()
    var nome = transportadora.toUpperCase()

    var shippingData = {
        nome
    }

    api.post('/transportadora', shippingData)
        .then(function (response) {
            $('#alerta').append(`
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            ${response.data.message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `)
        }).catch(function (error) {
            console.log(error);
        })
})
