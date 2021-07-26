var nome;
var id;

function buildList(list) {
    $('tbody').empty

    for (let i = 0; i < list.length; i++) {
        const id = list[i]['id']
        const nome = list[i]['nome']

        $('tbody').append(`
        <tr>
            <td>${nome}</td>
            <td>
                <button class="delete" data-id="${id}" data-nome="${nome}">Remover</button>
            </td>
        </tr>
            `)
    }

    $('.delete').on('click', function (e) {
        e.preventDefault()

        const id = $(e.currentTarget).data('id')
        const nome = $(e.currentTarget).data('nome')

        const isRemovalConfirmed = confirm(`Tem certeza que deseja remover a transportadora ${nome}`)

        if (isRemovalConfirmed) {
            api.delete(`/transportadora/${id}`)
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
    api.get('/transportadora')
        .then(function (response) {
            buildList(response.data.shipp)
        }).catch(function (error) {
            console.log(error);
        })
}

fetchList()