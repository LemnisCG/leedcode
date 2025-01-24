
const numPrimos = [];
for(let i = 1; i < 100; i++) {
    let count = 0;
    for(let j = 1; j <= i; j++) {
        if(i % j === 0) {
            count++;
        }
    }
  
    if(count === 2) {
        numPrimos.push(i);
    }
}




const MCM = [12,8];
const divisor = []

function factoresPrimosA(a) {

    for(let i = 0; i < numPrimos.length; i++) {
        while(a % numPrimos[i] === 0) {
            divisor.push(numPrimos[i])
            a = a / numPrimos[i]
        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    }
    return divisor
}

function factoresPrimos(b){
    const factores = [];
    let divisor = 2;

    while(b >= 2) {
        if(b % divisor === 0) {
            factores.push(divisor);
            b = b / divisor;
        } else {
            divisor++
        }
    }

    return factores
}


