const contagemPallets = document.getElementById("contagemPallets");
const saldoBtn = document.getElementById("saldoBtn");

const database2 = firebase.firestore();
const collection2 = database2.collection('saldoPallets');


saldoBtn.addEventListener('click', e => {
    e.preventDefault();
    collection2.doc(contagemPallets.value).set({
        contagemPallets_: contagemPallets.value
    })
    .then(() => {alert('Dados enviados');})
    .catch(error => {console.error(error)});
});

lerSaldo.addEventListener('click', e => {
    e.preventDefault();
    collection2.get()
    .then(snapshot => {
        snapshot.forEach(contagemPallets => {
            console.log(contagemPallets.id, ' => ', contagemPallets.data());
        });
        alert("Dados carregados com sucesso! Aperte F12 para visualizar!")
    })
    .catch(error => {
        console.log(error);
    });
});
