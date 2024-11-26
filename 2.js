var digitoAEntero = function(s) {
    const num = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    const valores = [1,5,10,50,100,500,1000]
    if(s.length === 1){
        for(let i = 0; i < num.length; i++){
            if(s === num[i]) {
                return valores[i] 
            }
        }
    }
};

function romanoAEntero(numeroRomano) {
    let total = 0
    for(let i = 0; i < numeroRomano.length - 1; i++) {
        
        if(digitoAEntero(numeroRomano[i]) < digitoAEntero(numeroRomano[i + 1])) {
            console.log(digitoAEntero(numeroRomano[i]) + " < " + digitoAEntero(numeroRomano[i + 1]))
            total -= digitoAEntero(numeroRomano[i])
        } else {
            console.log(digitoAEntero(numeroRomano[i]) + " > " + digitoAEntero(numeroRomano[i + 1]))
            total += digitoAEntero(numeroRomano[i])
        }
    }
    return total + digitoAEntero(numeroRomano[numeroRomano.length - 1])
}
console.log(romanoAEntero('IV'))