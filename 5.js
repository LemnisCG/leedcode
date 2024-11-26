cadenas = ["flor", "fljo", "vuelo"]
var longestCommonPrefix = function(strs) {
  const longitudCorta = Math.min(...strs.map(str => str.length))
  let prefijoComun = "";
  for(let i = 0; i < longitudCorta; i++) {
    for(let j = 1; j < strs.length; j++) {
        if(strs[j][i] !== strs[0][i]) {
            return prefijoComun
        }
    }
    prefijoComun += strs[0][i]
  }

  return prefijoComun
}; 

console.log(longestCommonPrefix(cadenas))