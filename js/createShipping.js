$('#cadastro-transportadora').on('submit', function (e) {
    e.preventDefault();

    var nome = $('#transportadora').val()

    var shippingData = {
        nome
    }

    api.post('/transportadora', shippingData)
        .then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.log(error);
        })
})
