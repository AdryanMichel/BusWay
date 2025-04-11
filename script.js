// Inicialização Firebase usando módulos compatíveis com CDN
const firebaseConfig = {
  apiKey: "AIzaSyA-UgOXLstg1j8MBpLndSu1S2HqXRc6c",
  authDomain: "busway-4df70.firebaseapp.com",
  databaseURL: "https://busway-4df70-default-rtdb.firebaseio.com",
  projectId: "busway-4df70",
  storageBucket: "busway-4df70.appspot.com",
  messagingSenderId: "868839435550",
  appId: "1:868839435550:web:761e4319b05a1f8578b5f",
  measurementId: "G-94KF7C5DLZ"
};

// Inicializa o Firebase App
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Login
function login() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, senha)
    .then(() => {
      alert("Login realizado com sucesso!");
      // redirecionar ou mostrar painel
    })
    .catch(error => {
      alert("Erro ao logar: " + error.message);
    });
}

// Cadastro
function register() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, senha)
    .then(() => {
      alert("Usuário cadastrado com sucesso!");
    })
    .catch(error => {
      alert("Erro ao cadastrar: " + error.message);
    });
}
