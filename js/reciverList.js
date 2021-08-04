function getReciver() {
    api.get('/destinatario').then(function (response) {
        var dest = response.data.recivers

        initReciverSelect('#destinatario', dest)
    })
}

function initReciverSelect(select, shippingCom) {
    for (var i = 0; i < shippingCom.length; i++) {
        var shipp = shippingCom[i].nome_destinatario

        $(select).append(`<option value="${shipp}">${shipp}</option>`)
    }
}

getReciver()