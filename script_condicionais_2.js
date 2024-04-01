const btnSomar = document.querySelector(".btn-mais-informacoes");

function somar() {
  let valorAtual = Number.parseInt(
    document.querySelector(".resultado").innerHTML
  );

  if (valorAtual <= 9) {
    document.querySelector(".resultado").innerHTML = valorAtual += 1;
  } else {
    console.log("O valor é maior que 10");
  }
}

if (document.body.contains(btnSomar)) {
  btnSomar.addEventListener("click", somar);
} else {
  console.log("Não existe botão na tela");
}
