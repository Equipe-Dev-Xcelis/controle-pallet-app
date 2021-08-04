function getReciver(callback) {
    api.get('/').then(function (response) {
        callback(response.data)
    })
}