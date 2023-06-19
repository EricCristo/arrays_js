const notas = [10, 6.5, 8, 7.5];


let somaDasNotas = 0;


for ( let nota of notas) {
    somaDasNotas += nota
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}`);

const numerosPares = [];

for (let i = 0; i <= 100; i += 2) {
  numerosPares.push(i);
}

console.log(numerosPares);