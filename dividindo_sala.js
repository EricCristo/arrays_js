const alunos = ["fabio", "eric", "juan", "bruno", "mario", "cleiton", "daria", "marcio", "adao", "katia"];

//function quantidadeAlunos() {
//    return(alunos.length);
//}

//let sala1 = alunos.slice(0, quantidadeAlunos);
let sala1 = alunos.slice(0, alunos.length / 2);
const sala2 = alunos.slice(alunos.length / 2);

console.log(sala1);
console.log(sala2);