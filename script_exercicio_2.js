function mouseMovel(event) {
  const mouseLeft = event.clientX;
  const mouseTop = event.y;

  const circuloMovimento = document.querySelector("#circuloId");

  circuloMovimento.style.top = mouseTop + "px";
  circuloMovimento.style.left = mouseLeft + "px";
  console.log(event.clientX);
}

window.addEventListener("mousemove", mouseMovel);
