const notas = [10, 6, 8, 5.5, 10];

notas.pop();

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(`A média é ${media}`);

const arrayVazia = [,,,];
console.log(arrayVazia.length);
console.log(arrayVazia[0]);
console.log(arrayVazia[1]);
console.log(arrayVazia[2]);

const arrayVazia2 = [,,,];
console.log(arrayVazia.length);
arrayVazia.push(50);
console.log(arrayVazia);
console.log(arrayVazia.length);

// teste de mistura de arrays

const strings = ["eric", "vitoria"];
                                                                                                // funciona
const testeDeStringsENumerais = ((notas[0] + notas[1] + notas[2] + notas[3]) / notas.length) + ` é a média das notas de ${strings[0]}`; 
console.log(testeDeStringsENumerais);
