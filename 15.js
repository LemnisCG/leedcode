const hora = '13:05:45PM'; 

function timeConvertion(s) {
    const obtenerHora = parseInt(hora.slice(0,2))
    if(obtenerHora > 12 && obtenerHora < 23) {
        return `${obtenerHora}${s.slice(2,-2)}`
    }

    if(s.slice(8) === 'PM') {
        if(obtenerHora === 12) {
            return `${obtenerHora}${s.slice(2,-2)}`
        }
        return `${obtenerHora + 12}${s.slice(2, -2)}`
    } else if (s.slice(8) === 'AM') {
        if(obtenerHora === 12) {
            return `00${s.slice(2,-2)}`
        }
        return s.slice(0,-2)
    } 
} 

console.log(timeConvertion(hora))