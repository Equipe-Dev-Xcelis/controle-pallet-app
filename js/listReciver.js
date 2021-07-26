function getReciver() {
    api.get('/destinatario').then(function (response) {
        var dest = response.data.recivers
        // console.log(dest);
        initReciverSelect('#destinatario', dest)
    })
}

function initReciverSelect(select, reciver) {
    for (var i = 0; i < reciver.length; i++) {
        var recivers = reciver[i].nome_destinatario

        $(select).append(`<option value="${recivers}">${recivers}</option>`)
    }
}

getReciver()