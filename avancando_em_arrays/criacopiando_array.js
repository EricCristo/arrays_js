const notas = [7, 7, 8, 9];
                    //spread operator
const novasNotas = [...notas];

novasNotas.push(10);

console.log(`As novas notas sâo ${novasNotas}`);
console.log(`As notas originais sâo ${notas}`);
