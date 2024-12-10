const s = 2;
const t = 3;
const a = 1;
const b = 5;
const m = 1;
const n = 1;

const mDistancia = [2];
const nDistancia = [-2];
const newMDistancia = [];
const newNDistancia = [];

let sumarDistanciaM = mDistancia.forEach( mNumeros => newMDistancia.push( mNumeros + a))
let sumarDistanciaN = nDistancia.forEach( nNumeros => newNDistancia.push( nNumeros + b))
let cuantasManzanas = 0;
let cuantasNaranjas = 0;

for (let i = 0; i < newMDistancia.length; i++) {
    if (newMDistancia[i] >= s && newMDistancia[i] <= t) {
        cuantasManzanas += 1
    }
}

for (let i = 0; i < newNDistancia.length; i++) {
    if (newNDistancia[i] >= s && newNDistancia[i] <= t) {
        cuantasNaranjas += 1
    }
}



let countApple = 0;
let countOrange = 0;

for (const apple of mDistancia ) {
    let appleNewDistancia = apple + a;
    if (appleNewDistancia >= s && appleNewDistancia <= t) {
        countApple++;
    }
}

for (const orange of nDistancia ) {
    let orangeNewDistancia = orange + b;
    if (orangeNewDistancia >= s && orangeNewDistancia <= t) {
        countOrange++;
    }
}

console.log(countApple)
console.log(countOrange)