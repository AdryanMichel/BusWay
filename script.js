// Configuração copiada do Firebase
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

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);

// Função de login
function login() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, senha)
    .then(userCredential => {
      alert("Login realizado com sucesso!");
      // Redireciona ou carrega painel admin aqui
    })
    .catch(error => {
      alert("Erro ao fazer login: " + error.message);
    });
}

// Função de cadastro
function register() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("password").value;

  firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then(userCredential => {
      alert("Conta criada com sucesso!");
    })
    .catch(error => {
      alert("Erro ao cadastrar: " + error.message);
    });
}
