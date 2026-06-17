const formContato = document.getElementById("formContato");

if (formContato) {
  formContato.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !telefone || !email || !mensagem) {
      alert("Preencha todos os campos!");
      return;
    }

    alert("Mensagem enviada com sucesso!");
    formContato.reset();
  });
}
