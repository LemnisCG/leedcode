// Entrada: lista1 = [1,2,4], lista2 = [1,3,4]
//  Salida: [1,1,2,3,4,4]
// Ejemplo 2:

// Entrada: lista1 = [], lista2 = []
//  Salida: []
// Ejemplo 3:

// Entrada: lista1 = [], lista2 = [0]
//  Salida: [0]

var mergeTwoLists = function(list1, list2) {
    const listaOrdenada = [];

    if(list1.length > list2.length && list1.length < list2.length) return listaOrdenada

    

    for (let i = 0; i < list1.length; i++) {
        for (let j = 0; j < list2.length; j++) {
            if(list1[j] < list2[j]) {
                listaOrdenada.push(list1[i],list2[i])
            } 
        }
    }


    return listaOrdenada
    
};

const dummy = {
    val: -1,
    next: null
}
console.log(mergeTwoLists([1,2,4],[1,3,4]))
console.log(mergeTwoLists([],[]))
console.log(mergeTwoLists([],[0]))