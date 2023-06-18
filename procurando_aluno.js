const alunos = ["joao", "ju", "vi", "pedro"]
const notas = [10, 8, 7.5, 9];

const listaAlunosEMedias = [alunos, notas];

function showAlunosENotas(aluno) {
    if (listaAlunosEMedias[0].includes(aluno)){
    //    console.log(`${aluno} está cadastrado!`);

        const indice = listaAlunosEMedias[0].indexOf(aluno);

     //   console.log(indice);

        const media = listaAlunosEMedias[1][indice]

    //    console.log(media);
        console.log(`${aluno} tem a média ${media}` )

} else {

        console.log(`"${aluno}" não foi encontrado!`);

    }
}

showAlunosENotas("vi");
showAlunosENotas("pedrinho");
showAlunosENotas("joao");