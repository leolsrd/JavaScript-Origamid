const btnMaisInformacoes = document.querySelector(".btn-mais-informacoes");

function mostrar() {
  const texto = document.querySelector(".texto");
  texto.classList.toggle("ativar");
}

btnMaisInformacoes.addEventListener("click", mostrar);
