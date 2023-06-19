const alunos = ["joao", "ju", "vi", "pedro"]
const media = [10, 8, 7.5, 9];

const listaAlunosEMedias = [alunos, media];

//O includes() retorna true ou false, dependendo se o valor passado como parâmetro está presente ou não no array. O indexOf() retorna a posição no array do valor passado como parâmetro. Utilizamos esses dois métodos em conjunto para primeiro verificar se um aluno estava presente em uma lista, e depois obter sua posição para buscar sua nota em outra lista.
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