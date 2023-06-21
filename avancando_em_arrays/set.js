const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

                 //os elementos de um Set nao se repetem
//const meuSet = new Set(nomes);

const nomeAtualizados = [...new Set(nomes)];


console.log(nomeAtualizados);