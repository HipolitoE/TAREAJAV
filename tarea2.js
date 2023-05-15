//const array1 = ['rojo','azul','amarillo'];
//const array2 = ['blanco','negro','rojo'];
const array1 = [4, 3, true, 'manzana'];
const array2 = ['pera', 3, false, true, 3, true];


function coincidencia(array1,array2) {
    let mis_coincidencias = []; 
    for (i = 0; i <= array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array2.includes(array1[i])){
            mis_coincidencias.push(array1[i]);
            break;
        } 
    }
}
    return mis_coincidencias;
}


let correccion_ejercicio = coincidencia(array1,array2);
console.log("El primer array contiene los siguientes elementos: "+ array1);
console.log("El segundo array contiene los siguientes elementos: "+ array2);
console.log("Los elementos que coinciden entre ellos son: " + correccion_ejercicio);



//2) Escribir una funcion que reciba 2 array y devuelva un array con todos los elementos que coinciden entre ellos

//Ejemplo:
//Array1: ['rojo', 'azul', 'amarillo']
//Array2: ['blanco', 'negro', 'rojo']
//Resultado: ['rojo']

//Ejemplo 2:
//Array1: [4, 3, true, 'manzana']
//Array2: ['pera', 3, f alse, true, 3, true]
//Resultado: [3, true]