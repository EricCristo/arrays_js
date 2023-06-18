const alunos = ["joao", "ju", "vi", "pedro"]
const media = [10, 8, 7.5, 9];

const listaAlunosEMedias = [alunos, media];

function showAlunosENotas(aluno) {
    if (listaAlunosEMedias[0].includes(aluno)){

        //const alunos = listaAlunosEMedias[0];
        //const medias = listaAlunosEMedias[1];
        const [alunos, media] = listaAlunosEMedias;
        

        //    console.log(`${aluno} está cadastrado!`);

        const indice = alunos.indexOf(aluno);

     //   console.log(indice);

        const medias = media[indice];

    //    console.log(media);
        console.log(`${aluno} tem a média ${medias}` )

} else {

        console.log(`"${aluno}" não foi encontrado!`);

    }
}

showAlunosENotas("vi");
showAlunosENotas("pedrinho");
showAlunosENotas("joao");