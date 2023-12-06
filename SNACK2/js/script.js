function numeriCasuali() {
    return Math.floor(Math.random()* 10 +1)
}


// squadre di calcio
let squadreDiCalcio = [
    {
        nome: "Roma",
        puntiFatti: numeriCasuali(),
        falliSubiti: numeriCasuali()
    },
    {
        nome: "Lazio",
        puntiFatti: numeriCasuali(),
        falliSubiti: numeriCasuali()
    },
    {
        nome: "Milan",
        puntiFatti: numeriCasuali(),
        falliSubiti: numeriCasuali()
    },
];




let numeri=numeriCasuali()
console.log(numeri)

squadreDiCalcio.puntiFatti = numeriCasuali() 
console.log(squadreDiCalcio);

