function getReciver() {
    api.get('/destinatario').then(function (response) {
        var recivers = response.data.recivers

        initReciverSelect('#destinatario', recivers)
    })
}

function initReciverSelect(select, recivers) {
    for (var i = 0; i < recivers.length; i++) {
        var reciver = recivers[i].nome_destinatario

        $(select).append(`<option value="${reciver}">${reciver}</option>`)
    }
}

getReciver()