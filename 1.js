var isPalindrome = function(x) {
    let invertida = "";
    const cadena = x.toString();
    for(let i = 0; i < cadena.length; i++) {
        invertida = cadena[i] + invertida
    }
    return cadena === invertida
};

console.log(isPalindrome(121))