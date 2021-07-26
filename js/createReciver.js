$('#cadastro-destinatario').on('submit', function (e) {
    e.preventDefault()

    var destinatario = $('#destinatario').val();
    var nome_destinatario = destinatario.toUpperCase()

    var reciverData = {
        nome_destinatario
    }

    api.post('/destinatario', reciverData)
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