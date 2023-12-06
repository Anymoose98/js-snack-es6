let bici_da_corsa = [
    {
        nome : "Trek Madone SLR 9 Disc",
        peso : 8,
    },
    {
        nome : "Specialized S-Works Tarmac",
        peso : 7,
    },
    {
        nome : "Canyon Ultimate CF SLX:",
        peso : 7,
    },
    {
        nome : "Pinarello Dogma F12",
        peso : 6,
    },
    {
        nome : "Cervélo R5",
        peso : 8,
    },
];

console.log(bici_da_corsa);

// Prendere solo i pesi
let pesi = bici_da_corsa.map(({peso}) => peso);
console.log(pesi)

// Prendere il numero più piccolo
function piuPiccolo(array_numeri){
    let peso_minore = 100

    for (let i = 0; i < array_numeri.length ; i++ ){

        if (peso_minore > array_numeri[i]) {
            peso_minore = array_numeri[i]
        }
        }
        return peso_minore
}


// Peso più leggero
let leggera = piuPiccolo(pesi)
console.log(leggera)


let bici_peso_minimo = bici_da_corsa.filter(function(bici_da_corsa){
    return bici_da_corsa.peso == leggera;
})
console.log(bici_peso_minimo)

