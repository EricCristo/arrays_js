const notas = [10, 9.5, 8, 7, 6];

// reescrever arrays
const notasAtualizadas = notas.map((notas) =>{
    return notas + 1 >= 10 ? 10 : notas +1;
})

console.log(notasAtualizadas)