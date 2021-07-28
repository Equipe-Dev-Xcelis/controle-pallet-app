function getCity(callback) {
    var api = axios.create({
        baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades'
    })

    api.get('/municipios?orderBy=nome').then(function (response) {
        callback(response.data)
    })
}