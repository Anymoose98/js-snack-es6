function numeriCasuali() {
    return Math.floor(Math.random()* 10 +1)
}


// squadre di calcio
let squadreDiCalcio = [
    {
        nome: "Roma",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Lazio",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0,
    },
];

console.log(squadreDiCalcio)

// Sostituisco con i numeri casuali
squadreDiCalcio.forEach(squadra => {
    squadra.puntiFatti = numeriCasuali();
    squadra.falliSubiti = numeriCasuali();
});

squadreDiCalcio.puntiFatti = numeriCasuali() 
console.log(squadreDiCalcio);

let nomeEFalli = squadreDiCalcio.map(({nome, falliSubiti}) => ({ nome, falliSubiti }));
console.log(nomeEFalli)