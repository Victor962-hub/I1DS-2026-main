const botao = document.getElementById("tema-btn");
const icone = document.getElementById("icone-tema");

botao.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        icone.src = "sol.png";
    } else {
        icone.src = "lua.png";
    }
});