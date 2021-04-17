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

function fetchList() {
  const apiFindAllUrl = `http://localhost:3200/api/gips`;

  axios.get(apiFindAllUrl)
    .then(function (response) {
      buildList(response.data.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function buildList(list) {
  $('tbody').empty();

  for (let i = 0; i < list.length; i++) {
    const gip = list[i]['gip'];
    const data_expedicao = list[i]['data_expedicao'];
    const destinatario = list[i]['destinatario'];
    const nota_fiscal = list[i]['nota_fiscal'];

    $('tbody').append(`
        <tr>
          <td>${gip}</td>
          <td>${data_expedicao}</td>
          <td>${destinatario}</td>
          <td>${nota_fiscal}</td>
          <td>
            <a class="edit" href="editarDados.html?id=${gip}">Editar</a>
          </td>
         <td>
            <button class="delete" data-gip="${gip}">Remover</button>
          </td>
        </tr>
      `);
  }


  $('.delete').on('click', function (e) {
    e.preventDefault();

    const gip = $(e.currentTarget).data('gip');

    const isRemovalConfirmed = confirm(`Tem certeza que deseja remover o gip "${gip}"`);

    if (isRemovalConfirmed) {
      const apiDeleteUrl = `${BASE_URL}/gip/${gip}`;

      const token = localStorage.getItem('token');

      const header = `Authorization: Bearer ${token}`;

      axios.delete(apiDeleteUrl, { headers: { header } })
        .then(function (response) {
          fetchList();
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  });

}

$('#gip-search').on('submit', function (e) {
  e.preventDefault();

  const gipValida = validarGip();


  if (gipValida) {
    const apiFindByGipUrl = `http://localhost:3200/api/gips/${gip}`;

    axios.get(apiFindByGipUrl)
      .then(function (response) {
        buildList(response.data.data);
      })
      .catch(function (error) {
        // alert(error.data.message);
        console.log(error);
      });
  }
});


fetchList();