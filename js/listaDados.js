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
  const apiFindAllUrl = 'https://pallets-api.herokuapp.com/api/v1/gip';

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
    const dataExpedicao = list[i]['dataExpedicao'];
    const destinatario = list[i]['destinatario'];
    const notafiscal = list[i]['notafiscal'];
    const endereco = list[i]['endereco'];

    $('tbody').append(`
        <tr>
          <td>${gip}</td>
          <td>${dataExpedicao}</td>
          <td>${destinatario}</td>
          <td>${notafiscal}</td>
          <td>${endereco}</td>
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
      const apiDeleteUrl = `https://pallets-api.herokuapp.com/api/v1/gip/${gip}`;
  
      axios.delete(apiDeleteUrl)
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
    const apiFindByGipUrl = `https://pallets-api.herokuapp.com/api/v1/gip/${gip}`;

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