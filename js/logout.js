function signOut(){    
    var deletedToken = delete window.sessionStorage.token
    console.log(deletedToken);

    if(deletedToken == true){
        return window.location.replace('index.html')
    }
}