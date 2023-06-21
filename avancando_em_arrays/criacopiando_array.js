const notas = [7, 7, 8, 9];
                    //spread operator
const novasNotas = [...notas];

novasNotas.push(10);

console.log(`As novas notas sâo ${novasNotas}`);
console.log(`As notas originais sâo ${notas}`);

let num1 = 10;
let num2 = num1;

num2 += 5;
num1 += 1;

console.log(`Num1 é ${num1}. Num2 é ${num2}`);

let numeroOriginal = 10;

function alteraNumero(numero) {
  numero = 50;

  console.log(`numero do parâmetro é ${numero}. numeroOriginal é ${numeroOriginal}`);
}

alteraNumero(numeroOriginal);