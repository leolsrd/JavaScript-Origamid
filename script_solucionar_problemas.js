const imagens = document.querySelectorAll(".galeria li img");

function galeriaTrocar(event) {
  const imgPrincipal = document.querySelector("#imagem-principal");
  const imgClicada = event.currentTarget;
  // Mudando a imagem principal
  imgPrincipal.src = imgClicada.src;
  imgPrincipal.alt = imgClicada.alt;
}

function galeriaClique(imagem) {
  imagem.addEventListener("click", galeriaTrocar);
}

imagens.forEach(galeriaClique);
