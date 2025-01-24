const n = 21235;
const p = 17;





const pasosIncio = Math.floor(p / 2);
let pasosFinal = Math.floor((n - p) / 2)
if(n % 2 === 0 ) {
    pasosFinal = Math.floor((n + 1 - p) / 2)
}
console.log(pasosIncio,pasosFinal)

console.log(Math.min(pasosIncio,pasosFinal))
