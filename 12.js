// Detalle de escalera

// Esta es una escalera de tamaño:

//    #
//   ##
//  ###
// ####
// Su base y altura son ambas iguales aSe dibuja utilizando #símbolos y espacios. La última línea no está precedida por ningún espacio.

// Escriba un programa que imprima una escalera de tamaño.

// Descripción de la función

// Complete la función de escalera en el editor a continuación.

// La escalera tiene los siguientes parámetros:

// int n : un entero
// Imprimir

// Imprima una escalera como se describe arriba.

// Formato de entrada

// Un solo entero,, que indica el tamaño de la escalera.

// Restricciones

// .

// Formato de salida

// Imprime una escalera de tamañoutilizando #símbolos y espacios.

// Nota : La última línea debe tenerespacios en el mismo.

// Entrada de muestra

// 6 
// Ejemplo de salida

//      #
//     ##
//    ###
//   ####
//  #####
// ######
// Explicación

// La escalera está alineada a la derecha, compuesta de #símbolos y espacios, y tiene una altura y un ancho de.



const caracter = "#"
const numPiramide = 6;
const rowsPiramide = [];
let guardarPiramides = "";
let repeatEspacios = []

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + caracter.repeat(rowNumber);
}


for(let i = 1; i < numPiramide; i++) {
    rowsPiramide.push();
}
console.log(rowsPiramide)

let result = "";

for(const rowPiramide of rowsPiramide) {
    result +=  rowPiramide + "\n";
}

function piramide(n) {
    for(let i = 0; i < n; i++) {
        let row = " ".repeat(n - i) + 
        "#".repeat(i)
        console.log(row)
    }
}

console.log(piramide(5));


console.log()