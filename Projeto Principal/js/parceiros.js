const formContato = document.getElementById("formContato");

if (formContato) {
  formContato.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const cidadeEstado = document.getElementById("Cidade/Estado")?.value.trim();
    const email = document.getElementById("email").value.trim();
    const parceria = document.getElementById("parceria")?.value.trim();
    const negocio = document.getElementById("negocio")?.value.trim();

    if (
      !nome ||
      !telefone ||
      !cidadeEstado ||
      !email ||
      !parceria ||
      !negocio
    ) {
      alert("Preencha todos os campos do formulário de parceria!");
      return;
    }

    alert("Solicitação enviada com sucesso! Entraremos em contato em breve.");
    formContato.reset();
  });
}
