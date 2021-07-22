function getShippingCom() {
    api.get('/transportadora').then(function (response) {
        var shippingCom = response.data.shipp

        initShippingComSelect('#transportadora', shippingCom)
    })
}

function initShippingComSelect(select, shippingCom) {
    for (var i = 0; i < shippingCom.length; i++) {
        var shipp = shippingCom[i].nome

        $(select).append(`<option value="${shipp}">${shipp}</option>`)
    }
}

getShippingCom()