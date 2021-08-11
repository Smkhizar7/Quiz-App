function signin() {
    var email = document.getElementById('iemail');
    var password = document.getElementById('ipassword');
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log(user.email);
            localStorage.setItem("Email", email.value);
            localStorage.setItem("Password", password.value);
            // nameDiv.setAttribute('class', 'nameDiv');
            // username.innerHTML = localStorage.getItem("Email");
            // ...
        })
        .catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage)
        });
    email.value = "";
    password.value = "";
    // mainbox.innerHTML = '<h1>Quiz Application</h1><div class="login" id="login"><button onclick="text()" class="btn-primary btn">Start Quiz</button></div>';
    window.location.href = "./start.html";
}