let quantidade_pallets_expedidos
let destinatario

let gip;

function validarGip() {
    gip = parseInt($('#gip').val());

    const isGipInvalid = !gip;
    if (isGipInvalid) {
        $('#gip').css({ boxShadow: '0 0 5px red' });

        return false;
    }

    $('#gip').css({ boxShadow: 'none' });

    return true;
}

$('#gip-search').on('click', function (e) {
    e.preventDefault();

    const gipValida = validarGip()

    if (gipValida) {
        const apiFindByGipUrl = `http://localhost:3200/api/gips/${gip}`;

        axios.get(apiFindByGipUrl)
            .then(function (response) {
                buildList(response.data.data)
            })
            .catch(function (error) {
                // alert(error.data.message);
                console.log(error);
            });
    }
})

function buildList() {
    $('tbody').append(`
            <tr>
                <td>${gip}</td>
                <td>${quantidade_pallets_expedidos}</td>
                <td>${destinatario}</td>
            </tr>
        `)
}