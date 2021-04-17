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

// function buildList(list) {
//   $('tbody').empty();

//   for (let i = 0; i < list.length; i++) {
//     const gip = list[i]['gip'];
//     const destinatario = list[i]['destinatario'];
//     const quantidade_pallets_expedidos = list[i]['quantidade_pallets_expedidos']

//     $('tbody').append(`
//         <tr>
//           <td>${gip}</td>
//           <td>${quantidade_pallets_expedidos}</td>
//           <td>${destinatario}</td>
//          </tr>
//       `);
//   }
  
  
// }

function debitValue() {
  var originAreaCode = document.querySelector('#originAreaCode').value
  var destinationAreaCode = document.querySelector('#destinationAreaCode').value
  var minutes = document.querySelector('#minutes').value
  var plan = document.querySelector('#plan').value


  var apiSearchUrl = `http://localhost:3000/api/fares/search?origin=${originAreaCode}&destination=${destinationAreaCode}`

  axios.get(apiSearchUrl)
    .then(function (response) {

      var fare = response.data.fare
      var valueNoPlan = (fare * minutes).toFixed(2).toString().replace('.', ',')


      var chagedMinutes = (minutes > plan) ? (minutes - plan) : (0)

      var valueWithPlan = (chagedMinutes * (fare + (fare * 0.1))).toFixed(2).toString().replace('.', ',')



      $('tbody').append(`
      <tr>
        <td>${originAreaCode}</td>
        <td>${destinationAreaCode}</td>
        <td>${minutes}</td>
        <td>${plan}</td>
        <td>R$ ${valueWithPlan}</td>
        <td>R$ ${valueNoPlan}</td>
      </tr>
    `);

    })
    .catch(function (error) {
    });
}


$('#gip-search').on('submit', function (e) {
  e.preventDefault();

  const gipValida = validarGip();


  if (gipValida) {
    const apiFindByGipUrl = `${BASE_URL}/${gip}`;

    axios.get(apiFindByGipUrl)
      .then(function (response) {
        debitValue(response.data.data);
      })
      .catch(function (error) {
        // alert(error.data.message);
        console.log(error);
      });
  }
});

// $('#atualizar_vale_pallet').on('submit', function (e){
//   e.preventDefault()

//   const apiUpdateValePallet = `${BASE_URL}/gips/${gip}`

//   axios.put(apiUpdateValePallet)
//   .then(function (response) {
//     alert(response)
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
// })

function fetchList() {
  const apiFindAllUrl = `${BASE_URL}/${gip}`;

  axios.get(apiFindAllUrl)
    .then(function (response) {
      debitValue(response.data.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}



  // $('.delete').on('click', function (e) {
  //   e.preventDefault();

  //   const gip = $(e.currentTarget).data('gip');

  //   const isRemovalConfirmed = confirm(`Tem certeza que deseja remover o gip "${gip}"`);

  //   if (isRemovalConfirmed) {
  //     const apiDeleteUrl = `${BASE_URL}/gip/${gip}`;

  //     const token = localStorage.getItem('token');

  //     const header = `Authorization: Bearer ${token}`;

  //     axios.delete(apiDeleteUrl, { headers: { header } })
  //       .then(function (response) {
  //         fetchList();
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   }
  // });



fetchList();