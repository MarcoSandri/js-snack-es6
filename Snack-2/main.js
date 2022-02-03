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

// Assegno un valore casuale a gol fatti e falli subiti per ogni squadra dell'array
for(let i = 0; i<squadre.length; i++) {

    squadre[i]["falli subiti"] = randomNumber(100, 300);
    squadre[i]["punti fatti"] = randomNumber(30, 100);
    console.log(squadre[i]["falli subiti"]);

    // Prendo solamente il nome e il valore dei falli subiti e li assegno al nuovo array
    const {nome, 'falli subiti': falli} = squadre[i];
    classifica.push(nome, falli);
}

console.log(classifica);



function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
