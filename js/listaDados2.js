function buildList(list) {

    for (let i = 0; i < list.length; i++) {
        var gip = $('#gip')
        var quantidade_pallets_expedidos = $('#quantidade_pallets_expedidos')
        var destinatario = $('#destinatario')

        $('tbody').append(`
                <tr>
                    <td>${gip}</td>
                    <td>${quantidade_pallets_expedidos}</td>
                    <td>${destinatario}</td>
                </tr>
            `)
    }
}

function fetchList() {
    const apiFindAllUrl = `http://localhost:3000/api/gips/`;

    axios.get(apiFindAllUrl)
        .then(function (response) {
            console.log(response.data.data);
            buildList(response.data.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

$('#gip-search').on('click', function (e) {
    e.preventDefault();

    var gip = $('#gip').val()

    const apiFindByGipUrl = `http://localhost:3000/api/gips/${gip}`;

    axios.get(apiFindByGipUrl)
        .then(function (response) {
            // console.log(response.data.data);
            buildList(response.data.data);
        })
        .catch(function (error) {
            // alert(error.data.message);
            console.log(error);
        });
})

fetchList()