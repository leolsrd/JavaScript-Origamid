const links = document.querySelectorAll("nav a");

function ativarLink(event) {
  links.forEach((element) => {
    if (element.href === document.location.href) {
      const body = document.body;
      body.style.background = "black";
      element.style.color = "white";
    } else {
      element.style.color = "yellow";
    }
  });
}

ativarLink();
