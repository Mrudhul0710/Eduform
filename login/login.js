import { auth } from "../firebase.js";

import{ signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const loginform = document.getElementById('login')

loginform.addEventListener('submit', (e) =>{
    e.preventDefault();
    var form = e.target;
    var email = form.elements['email'].value;
    var password = form.elements['password'].value;

    console.log(email, password)

    signInWithEmailAndPassword(auth, email, password)
    .then((cred) =>{
        console.log('user logged in:', user.cred)
    })
    .catch((err) =>{
        console.log(err.message)
    })

})

