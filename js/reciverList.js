function getReciver(callback) {
    api.get('/destinatario').then(function (response) {
        callback(response.data.recivers)
    })
}