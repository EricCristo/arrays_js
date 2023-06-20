const alunos =["alexya", "anny", "Samara"];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((aluno, i) =>  {
    return medias[i] < 7;
})

console.log(reprovados);