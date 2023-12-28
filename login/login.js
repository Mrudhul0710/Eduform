import { auth } from "../firebase.js";

import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const loginform = document.getElementById('login')

loginform.addEventListener('submit', (e) => {
    e.preventDefault();
    var form = e.target;
    var email = form.elements['email'].value;
    var password = form.elements['password'].value;

    console.log(email, password)

    signInWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            console.log('user logged in:', cred)
            if (cred._tokenResponse) {
                sessionStorage.setItem('token', cred._tokenResponse.idToken);
                sessionStorage.setItem('refreshToken', cred._tokenResponse.refreshToken);
                alert('login successful ')
                window.location.href = "../../Home/Home.html"
            }
        })
        .catch((err) => {
            console.log('login failed ', err.message);
            alert('login failed ', err.message)
        })

})

