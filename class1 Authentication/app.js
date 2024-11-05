import {
  auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut
} from "./firebase.js"

//_________________onAuthStateChanged Function________________________
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("user ", user);
  } else {
    console.log("user not exist");
  }
});

//__________________SignUp Function________________________
let signup = () => {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
      const user = res.user;
      console.log('User: ', user);

    })
    .catch((error) => {
      console.log(error.code);

    });
};

let signUpBtn = document.getElementById("signupbtn");
signUpBtn.addEventListener("click", signup);


//__________________SignIn Function________________________
let signin = () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      console.log(error.code);
    });
}
let sign_in = document.getElementById("sign_in");
sign_in.addEventListener("click", signin);

//__________________Send Email Verification_______________________
let sendMail = () => {
  sendEmailVerification(auth.currentUser)
    .then(() => {
      console.log("Email verification sent!");
    });
}
let verification = document.getElementById("verification")
verification.addEventListener("click", sendMail)


//__________________Sign out Function_______________________
let signout = () => {
  signOut(auth).then(() => {
    console.log("Sign-out successful.");

  }).catch((error) => {
    console.log(error)
  });
}
let sign_out = document.getElementById("sign_out")
sign_out.addEventListener("click", signout)