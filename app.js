
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  import { getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword ,
    signInWithEmailAndPassword ,
    signOut as firebaseSignOut ,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDO52hL9LFEoNfgVUpRc0eatHW2ppNPU0I",
    authDomain: "fir-gn-up-9nd-s-gn-n.firebaseapp.com",
    projectId: "fir-gn-up-9nd-s-gn-n",
    storageBucket: "fir-gn-up-9nd-s-gn-n.appspot.com",
    messagingSenderId: "363178024015",
    appId: "1:363178024015:web:af7eeceb518348d75e1e3a",
    measurementId: "G-RHBJ6YWMP4"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  console.log("app=>",app);
const analytics = getAnalytics(app);

const auth = getAuth(app);
console.log("getauth>", auth);

const userEmail = document.getElementById("userEmail");
const userPassword = document.getElementById("userPassword");
const login_btn = document.getElementById("login_btn");

const addEmail = document.getElementById("addEmail");
const addPassword = document.getElementById("addPassword");
const Log_in = document.getElementById("Log_in");

const user_Email = document.getElementById("user_Email");
const logout_btn = document.getElementById("logout_btn");

const auth_container = document.getElementById("auth_container");
const user_container = document.getElementById("user_container");

login_btn.addEventListener("click" , createUserAccount);
Log_in.addEventListener("click" , logIn);
logout_btn.addEventListener("click" , signOut  );


onAuthStateChanged(auth, (user) => {
    if (user) { console.log("user login hai bhai")

      const uid = user.uid;
      auth_container.style.display = "none";
      user_container.style.display = "block";
      user_Email.innerText = user.email;
      
    } else { console.log("user abi log out haio")
    auth_container.style.display = "block";
    user_container.style.display = "none";
    user_Email.innerText = user.email;

    }
  });
  
  function createUserAccount  () {
    // console.log("email=>" ,userEmail.value);
    // console.log("pass=>" ,userPassword.value);
    createUserWithEmailAndPassword(auth, userEmail.value, userPassword.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
  });

  };


  function logIn( ) {
    console.log("addEmail=>" ,addEmail.value);
    console.log("addPassword=>" ,addPassword.value);

    signInWithEmailAndPassword(auth, addEmail.value, addPassword.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("user_login=>")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode)
    alert(errorMessage)
  });
  };


  function signOut() {
    firebaseSignOut(auth).then(() => {
        console.log("User logged out");
    }).catch((error) => {
        alert(error.message);
    });
}