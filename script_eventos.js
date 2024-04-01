const ativar = document.querySelector(".ativar");

function ativarAoClick(event) {
  console.log("Clicou em: ", ativar);
}

ativar.addEventListener("click", ativarAoClick);

console.log(ativar);
