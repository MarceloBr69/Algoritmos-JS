console.log('Primer ejercicio');
//Configura un array para que los valores negativos se transformen en 0. Por ejemplo, resetNegativos([1,2,-1,-3]) debiera dar como resultado [1,2,0,0].
function Negativo(Array0){
    for(let i = 0; i< Array0.length; i++){
        if(Array0[i]<0){
            Array0.splice([i], 1, 0);
        }
    }
    console.log(Array0);
}
Negativo([-1, 2, 7, -10]);


console.log('Segundo ejercicio');
//Dado un array, mueve todos los valores un espacio de derecha a izquierda eliminando el primer valor y dejando un 0 para el último valor. Por ejemplo, moverAdelante([1,2,3]) debiera dar como resultado [2,3,0].
function moverAdelante(ajuste){
    ajuste.shift();
    ajuste.push(0);
    console.log(ajuste);
}
moverAdelante([1,2,3]);



console.log('Tercer ejercicio');
//Configura un array para que el resultado sean los valores en el orden contrario. Por ejemplo, returnReverso([1,2,3]) debe dar [3,2,1].

function returnReverso(hola){
    hola.reverse();
    console.log(hola);
}
returnReverso([1,2,3]);



console.log('Cuarto ejercicio');
//Crea una función que cambie un array repitiendo sus valores originales (manteniendo el mismo orden). Por ejemplo, repetirValores([4,”Ulysses”, 42, false]) debiera dar [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].

function repetirValores(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray.push(arr[i]);
        newArray.push(arr[i]);
    }
    return newArray;
}
let arrayOriginal = [4, "Ulysses", 42, false];
let arrayRepetido = repetirValores(arrayOriginal);
console.log(arrayRepetido);
