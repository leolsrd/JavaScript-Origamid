function livro(nome, ano, autor) {
  const nomeMaior = nome.toUpperCase();
  const anosDeLancamento = 2024 - ano;
  const frase = nome + " " + autor;

  infoLivro = {
    nome: nomeMaior,
    anosDeLancamento: anosDeLancamento,
    ano: ano,
    autor: autor,
    frase: frase,
  };

  return infoLivro;
}

const livroRetorno = livro("O Senhor dos Anéis", 1954, "J. R. R. Tolkien");

console.log(livroRetorno.frase);
