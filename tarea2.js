console.log("Tarea 2");

let array1 = [1, 4, 3, true, 'pera'];
let array2 = ['pera', 3, false, true, 3, true];
let elementos_que_coinciden = [];

coincidencia(array1,array2,elementos_que_coinciden);
console.log("El primer array contiene los siguientes elementos: "+ array1);
console.log("El segundo array contiene los siguientes elementos: "+ array2);
console.log("Los elementos que coinciden entre ellos son: " + array_coincidencias);

function coincidencia(array1,array2,elementos_que_coinciden) {
    array_coincidencias.splice(0,elementos_que_coinciden.length); //me aseguro de borrarle los datos al "array_coincidencias" antes de usarlo
    for (i = 0; i <= array1.length; i++) {
        if (array2.includes(array1[i])){
            elementos_que_coinciden.push(array1[i]);
        } 
    }
    return elementos_que_coinciden;
}
