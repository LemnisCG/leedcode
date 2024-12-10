const N = [73,67,38,33];


function gradingStudents(grades) {
    
    const newPromedios = [];

    grades.forEach((num) => {
        const siguienteMultiplo = Math.ceil((num / 5)) * 5
        const diferencia = siguienteMultiplo - num 
        console.log(diferencia)
        if (diferencia < 3 && num >= 38) {
            newPromedios.push(siguienteMultiplo)
        } else {
            newPromedios.push(num)
        }
    })
    return newPromedios
    
}
console.log(gradingStudents(N))