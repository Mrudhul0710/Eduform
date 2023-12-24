import { auth } from "../firebase.js";

import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const signUpForm = document.getElementById('signup')

signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    var form = e.target;
    var email = form.elements['email'].value;
    var password = form.elements['password'].value;

    console.log(email, password)

    createUserWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            console.log('user created:', cred.user);
            signUpForm.reset();
        })
        .catch((err) => {
            console.log('err.message');
        })


})