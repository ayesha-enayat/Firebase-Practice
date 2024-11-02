import { auth, createUserWithEmailAndPassword } from "./firebase.js"

let signup = () => {
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;
    createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
            const user = res.user;
            console.log('User: ', user);
            
        })
        .catch((error) => {
           console.log(error.code);
           
        });
};

let signUpBtn=document.getElementById("signupbtn");
signUpBtn.addEventListener("click",signup);
