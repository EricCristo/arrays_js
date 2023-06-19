const names = ["Pedro", "Jaci", "Rogerio"];

names.forEach(function (names) {
    console.log(names);
    
});

names.forEach((names) => {
    console.log(names);
    
});

function imprimeName (name){
    console.log(name)
}

names.forEach(imprimeName);