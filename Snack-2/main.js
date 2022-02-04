const squadre = [
    {
        nome : "Inter",
        "punti fatti" : 0,
        "falli subiti" : 0
    },
    {
        nome : "Napoli",
        "punti fatti" : 0,
        "falli subiti" : 0
    },
    {
        nome : "Milan",
        "punti fatti" : 0,
        "falli subiti" : 0
    },
    {
        nome : "Atalanta",
        "punti fatti" : 0,
        "falli subiti" : 0
    },
    {
        nome : "Juventus",
        "punti fatti" : 0,
        "falli subiti" : 0
    },
    {
        nome : "Roma",
        "punti fatti" : 0,
        "falli subiti" : 0
    },
    {
        nome : "Fiorentina",
        "punti fatti" : 0,
        "falli subiti" : 0
    },
    {
        nome : "Lazio",
        "punti fatti" : 0,
        "falli subiti" : 0
    },
    {
        nome : "Verona",
        "punti fatti" : 0,
        "falli subiti" : 0
    },
    {
        nome : "Torino",
        "punti fatti" : 0,
        "falli subiti" : 0
    },
    {
        nome : "Sassuolo",
        "punti fatti" : 0,
        "falli subiti" : 0
    },
    {
        nome : "Empoli",
        "punti fatti" : 0,
        "falli subiti" : 0
    },
    {
        nome : "Bologna",
        "punti fatti" : 0,
        "falli subiti" : 0
    },
    {
        nome : "Spezia",
        "punti fatti" : 0,
        "falli subiti" : 0
    },
    {
        nome : "Udinese",
        "punti fatti" : 0,
        "falli subiti" : 0
    },
    {
        nome : "Sampdoria",
        "punti fatti" : 0,
        "falli subiti" : 0
    },
    {
        nome : "Venezia",
        "punti fatti" : 0,
        "falli subiti" : 0
    },
    {
        nome : "Cagliari",
        "punti fatti" : 0,
        "falli subiti" : 0
    },
    {
        nome : "Genoa",
        "punti fatti" : 0,
        "falli subiti" : 0
    },
    {
        nome : "Salernitana",
        "punti fatti" : 0,
        "falli subiti" : 0
    }
];

let classifica = [];
let classificaArray = [];
let classificaOggetto = [];

for(let i = 0; i<squadre.length; i++) {
    
    // Assegno un valore casuale a gol fatti e falli subiti per ogni squadra dell'array
    squadre[i]["falli subiti"] = randomNumber(100, 300);
    squadre[i]["punti fatti"] = randomNumber(30, 100);

    // Prendo solamente il nome e il valore dei falli subiti e li assegno al nuovo array
    const {nome, 'falli subiti': falli} = squadre[i];
    classifica.push(nome, falli);

    // Array contenente altri array con nome e falli subiti
    classificaArray.push([nome, falli]);

    // Array di oggetti contenenti solo nome e falli subiti
    classificaOggetto.push({nome, falli});
}

console.log("Array con nomi e falli subiti: " + classifica);
console.log("Array di array con nomi e falli subiti: " + classificaArray);
console.log("Array di oggetti con nomi e falli subiti: " + classificaOggetto);


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
