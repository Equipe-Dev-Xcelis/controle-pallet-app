var nome_destinatario;
var id;

function buildList(list) {
    $('tbody').empty

    for (var i = 0; i < list.length; i++) {
        const id = list[i]['id']
        const nome_destinatario = list[i]['nome_destinatario']

        $('tbody').append(`
        <tr>
            <td>${nome_destinatario}</td>
            <td>
                <button class="delete" data-id="${id}" data-nome_destinatario="${nome_destinatario}">Remover</button>
            </td>
        </tr>
        `)
    }

    $('.delete').on('click', function (e) {
        e.preventDefault()

        const id = $(e.currentTarget).data('id')
        const nome_destinatario = $(e.currentTarget).data('nome_destinatario')

        const isRemovalConfirmed = confirm(`Tem certeza de que deseja remover o Detinatario ${nome_destinatario}`)

        if (isRemovalConfirmed) {
            api.delete(`/destinatario/${id}`)
                .then(function (response) {
                    $('#alerta').append(`
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        ${response.data.message}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                        `)
                }).catch(function (error) {
                    console.log(error);
                })
        }
    })

}

function fetchList() {
    api.get('/destinatario')
        .then(function (response) {
            buildList(response.data.recivers)
        }).catch(function (error) {
            console.log(error);
        })
}

fetchList()