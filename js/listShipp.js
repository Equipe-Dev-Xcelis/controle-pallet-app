function getShippingCom(callback) {
    api.get('/transportadora').then(function (response) {
        callback(response.data.shipp)
    })
}