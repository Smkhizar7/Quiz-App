let allusers = [];
let users = localStorage.getItem("users");
if(users !== null && users !== ""){
    allusers = JSON.parse(users)
}
function signin() {
    var email = document.getElementById('iemail');
    var password = document.getElementById('ipassword');
    let filteruser = allusers.filter(data => data.email === email.value && data.password === password.value)
    if(filteruser.length){
        localStorage.setItem("Logined User Email",email.value);
        localStorage.setItem("Logined User Password",password.value);
        console.log("Login successfully!");
    }
    else{
        console.log("Incorrect email and password!")
    }
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
            var user = userCredential.user;
            console.log(user.email);
            window.location.href = "./start.html";
        })
        .catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage)
        });
}