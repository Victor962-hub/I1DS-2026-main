const darkBtn = document.getElementById("darkModeBtn");
const logo = document.getElementById("logo");

darkBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

  // MODO ESCURO
  if (document.body.classList.contains("dark-mode")) {

    darkBtn.innerHTML = "☀️";

    // troca logo
    logo.src = "img/switch (1).png";

  } else {

    darkBtn.innerHTML = "🌙";

    // volta logo clara
    logo.src = "img/logo-light.png";
  }

});

const darkmode = document.getElementById ("darkmodebtn");
const logo = document.getElementById ("logo");


darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        darkBtn.src = "img/switch (1).png";
        logo.src = "img/logo-dark.png";

    } else {

        darkBtn.src = "img/Switch.png";
        logo.src = "img/bola cinza.png";

    }
});