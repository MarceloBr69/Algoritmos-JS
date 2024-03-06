console.log('Ejercicio 1');

//Dados un array y un valor Y, cuenta e imprime (print) el número de valores del array que sean mayores que Y. 
let Y = 3;
let array = [2,6,1,8,5,10,20];
let ConteoSum = 0;

function Conteo(){
    for(let i = 0; i< array.length; i++){
        if(Y < array[i]){
            ConteoSum++;
        }
        
    }
    console.log(ConteoSum);
}
Conteo(array);

console.log('Ejercicio 2');
//Dado un array, imprime los valores máximos (max), mínimos (min) y promedio (average) para el array. 
let array2 = [2,6,1,8,5,10,20];
let suma = 0;
function arrayMaxMinAvg(){
    let Max = Math.max (...array2);
    console.log(Max);

    let Min = Math.min (...array2);
    console.log(Min);

    for(let i = 0; i < array2.length; i++){
        suma += array2[i]
    }
    let div = suma/array2.length;
    console.log(div);
    console.log("promedio redondeado = " + (Math.round(div)));
}
arrayMaxMinAvg(array2);


console.log('Ejercicio 3');
//Dado un array de números, crea una función que dé como resultado un nuevo array donde los valores negativos se reemplacen por el texto (string) ‘Dojo’. Por ejemplo, reemplazarNegativos([1,2,-3,-5,5]) debiera devolver [1,2, “Dojo”, “Dojo”, 5].

function Negativos(reemplazarNegativos){
    for(let i = 0; i<reemplazarNegativos.length; i++){
        if(reemplazarNegativos[i] < 0){
            reemplazarNegativos.splice([i], 1, "DOJO");
        }
    }
    console.log(reemplazarNegativos);
}

Negativos([1,2,-3,-5,5]);



console.log('Ejercicio 4');
//Dado un array y su respectivo índice, remueve los valores en el rango del índice dado( acortando el array). Por ejemplo, removerRango([20,30,40,50,60,70],2,4)debiera devolver [20,30,70].

function removerRango(arr, inicio, fin) {
    arr.splice(inicio, fin - inicio + 1); 
    return arr;
}

let resultado = removerRango([20, 30, 40, 50, 60, 70], 2, 4);
console.log(resultado); 
