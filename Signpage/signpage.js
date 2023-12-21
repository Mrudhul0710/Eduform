import { auth } from "../firebase";

import{ createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const signupform = document.querySelector('.signup')
signupform.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = signupform.email.value
    const password = signupform.password.value

    createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
        console.log('user created:', cred.user)
        signupform.resset()
    })
    .catch((err) =>{
        console.log('err.message')
    })


})