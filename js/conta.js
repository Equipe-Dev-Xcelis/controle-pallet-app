const btnConta = document.querySelector("#btnConta");

btnConta.addEventListener("click", () => {
  const formData = {
    nome: document.querySelector("#registrarNome").value,
    email: document.querySelector("#registrarEmail").value,
    senha: document.querySelector("#registrarPassword").value
  };
  
  firebase.auth().createUserWithEmailAndPassword(formData.email, formData.senha).then(data => {
    const uid = data.user.uid;

    const database = firebase.firestore();
    const collection = database.collection('users');

    collection.doc(uid).set({
      email: formData.email,
      nome: formData.nome
    });

    alert("Usuario criado com sucesso!");
    
  }).catch(error => {
    if(error.code == 'auth/email-already-in-use'){
        alert("Esse e-mail ja esta sendo usado por outro usuario!");
    }else{
      alert(error.message);
    }
    console.log(error);
  });
  
});