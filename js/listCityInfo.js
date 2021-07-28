function initUfSelect(select, uf) {
    for (var i = 0; i < uf.length; i++) {
        var ufs = uf[i].sigla

        $(select).append(`<option value="${ufs}">${ufs}</option>`)
    }
}

function initCitySelect(select, city){
    for(var i = 0; i < city.length; i++){
        var citys = city[i].nome

        $(select).append(`<option value="${citys}">${citys}</option>`)
    }

}

function getCityInfo() {
    var api = axios.create({
        baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades'
    })

    api.get('/estados?orderBy=nome').then(function (response) {
        var uf_ibge = response.data

        initUfSelect('#uf', uf_ibge)
    })

    api.get('/municipios?orderBy=nome').then(function (response) {
        var city_ibge = response.data

        initCitySelect('#cidade', city_ibge)
    })
}

getCityInfo()