function signup() {
    var email = document.getElementById('uemail');
    var password = document.getElementById('upassword');
    // var cpass = document.getElementById('cpassword').value;
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
            var user = userCredential.user;
            console.log(user.email);
            localStorage.setItem("Email", email.value);
            localStorage.setItem("Password", password.value);
            window.location.href = "./index.html";
        })
        .catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage)
        });
    email.value = "";
    password.value = "";
    // mainbox.innerHTML = '<h1>Quiz Application</h1><div class="login" id="login"><button onclick="text()" class="btn-primary btn">Start Quiz</button></div>';
}