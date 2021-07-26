function initUfSelect(select, uf) {
    for (var i = 0; i < uf.length; i++) {
        var ufs = uf[i].sigla

        $(select).append(`<option value="${ufs}">${ufs}</option>`)
    }
}

function getUf() {
    var api = axios.create({
        baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades'
    })

    api.get('/estados?orderBy=nome').then(function (response) {
        var uf_ibge = response.data

        initUfSelect('#uf', uf)
    })
}

getUf()