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
        peso : 3,
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
        peso : 3,
    },
    {
        nome : "Giant",
        peso : 3,
    }
];

// Prendo i valori del primo oggetto dell'array
let {peso} = biciclette[0];
let {nome} = biciclette[0];

// Ciclo tutti i valori per vedere quello con il peso minore
for(let i = 0; i < biciclette.length; i++) {

    if(peso > biciclette[i].peso) {
        peso = biciclette[i].peso;
        nome = biciclette[i].nome;
    }
}

// Stampo qual è la bicicletta con il peso minore
console.log(`La bicicletta da corsa con il peso minore è ${nome} con ${peso} kg`);
document.getElementById('print').innerText =  `La bicicletta da corsa con il peso minore è ${nome} con ${peso} kg`;

// Nel caso ci fossero altre biciclette con lo stesso peso
// Creo un array per contenerle
let altreBiciclette = [];

// Ciclo tutti i valori per vedere le bici con lo stesso peso di quella con il peso minore trovata in precedenza e aggiungo i loro nomi all'array
for(let i = 0; i < biciclette.length; i++) {

    if(peso == biciclette[i].peso && nome !== biciclette[i].nome) {
         altreBiciclette.push(biciclette[i].nome);
    }
}

// Stampo tutte le altre biciclette con lo stesso peso
console.log(`Altre biciclette che pesano ${peso} kg sono: ${altreBiciclette}` )
document.getElementById('printOther').innerText =  `Altre biciclette che pesano ${peso} kg sono: ${altreBiciclette}`;
