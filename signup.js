let allusers = [];
let users = localStorage.getItem("users");
if (users !== null && users !== "") {
    allusers = JSON.parse(users)
}
function signup() {
    var email = document.getElementById('uemail');
    var password = document.getElementById('upassword');
    let user = {
        email: email.value,
        password: password.value
    }
    allusers.push(user);
    localStorage.setItem("users", JSON.stringify(allusers))
    console.log("Sign Up Successfully!!!");
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
            var user = userCredential.user;
            console.log(user.email);
            window.location.href = "./index.html";
        })
        .catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage)
        });
}