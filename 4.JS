var longestCommonPrefix = function(strs) {
    let prefijosRepetidos = "";
    for(let i = 0; i < strs.length; i++){
        let prefijo = strs[i];
        for(let j = 0; j < prefijo.length; j++){
            prefijo[j].slice(0,2)
        }
    }
};

console.log(longestCommonPrefix(["flower","flow","flight"]));