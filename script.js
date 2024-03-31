const nav = document.querySelector("nav");
const produtos = document.querySelector(".produtos a");

nav.classList.add("add");

console.log(nav);
console.log(produtos.innerHTML);

// Objetos
const nome = "O Senhor dos Anéis";
const ano = 1954;
const autor = "J. R. R Tolkien";

const nomeFilme = "O Senhor dos Anéis";
const anoFilme = 2001;
const diretorFilme = "Peter Jackson";

const livro = {
  nome: "O Senhor dos Anéis",
  ano: 1954,
  autor: "J. R. R. Tolkien",
};

const filme = {
  nome: "O Senhor dos Anéis",
  ano: 2001,
  autor: "J. R. R. Tolkien",
  diretor: "Peter Jackson",
};

console.log(livro);

// Verificando apenas o ano de lançamento do livro
console.log(livro.ano);

// Verificando a quanto tempo o livro foi lançado
console.log(
  "Quantidade de tempo que o livro foi lançado: " + (2024 - livro.ano)
);

function linguagens(linguagem1, linguagem2, linguagem3 = null) {
  console.log(linguagem1, linguagem2, linguagem3);
}

linguagens("HTML", "CSS", "JavaScript");
