const biciclette = [
    {
        nome : "Atala",
        peso : 7,
    },
    {
        nome : "Basso",
        peso : 8,
    },
    {
        nome : "Btwin",
        peso : 5,
    },
    {
        nome : "Merida",
        peso : 6,
    },
    {
        nome : "Trek",
        peso : 4,
    },
    {
        nome : "Specialized",
        peso : 6,
    },
    {
        nome : "Cannondale",
        peso : 8,
    },
    {
        nome : "Kona",
        peso : 9,
    },
    {
        nome : "Santa Cruz",
        peso : 5,
    },
    {
        nome : "Giant",
        peso : 3,
    }
];

let {peso} = biciclette[0];
let {nome} = biciclette[0];

for(let i = 0; i < biciclette.length; i++) {

    if(peso > biciclette[i].peso) {
        peso = biciclette[i].peso;
        nome = biciclette[i].nome;
    }
}

console.log(nome);
console.log(peso);
console.log(`La bicicletta da corsa con il peso minore è ${nome} con ${peso} kg`);

