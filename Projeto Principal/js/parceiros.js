  let nome = document.getElementById("nome").value.trim();
  let telefone = document.getElementById("telefone").value.trim();
  let email = document.getElementById("email").value.trim();
  let mensagem = document.getElementById("mensagem").value.trim();

  if (nome == "" || telefone == "" || email == "" || mensagem == "") {
    alert("Preencha todos os campos!");
    return;
  } else {
    alert("Mensagem enviada com sucesso!");
  }

  this.reset();

const darkBtn = document.getElementById("darkModeBtn");
const logo = document.getElementById("logo");

darkBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

  // MODO ESCURO
  if (document.body.classList.contains("dark-mode")) {

    darkBtn.innerHTML = "☀️";

    // troca logo
    logo.src = "img/logo-dark.png";

  } else {

    darkBtn.innerHTML = "🌙";

    // volta logo clara
    logo.src = "img/logo-light.png";
  }

});