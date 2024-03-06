//Ejercicio 1
function a(x,y){
    return 5;
}
console.log(a(5,5));
//Se imprime: 
//5


//Ejercicio 2
function a(x,y){
    let z = []
    z.push(x);
    z.push(y);
    z.push(5);
    console.log(z);
    return z;
}
b = a(2,2)
console.log(b);
console.log(a(6,8));
//Se imprime:
//[2,2,5]
//[6,8,5]


//Ejercicio 3
function a(x){
    z = [];
    z.push(x);
    z.pop();
    z.push(x);
    z.push(x);
    return z;
 }
 y = a(2);
 y.push(5);
 console.log(y);
//Se imprime
//[2,2]
//[2,2,5]
//[2,2,5]

//Ejercicio 4
function a(x){
    if(x[0] < x[1]) {
       return true;
    }
    else {
       return false;
    }
}
b = a([2,3,4,5])
console.log(b);
//Se imprime:
//true

//Ejercicio 5
function a(x){
    for(var i=0; i<x.length; i++){
      if(x[i] > 0){
           x[i] = "Coding"; 
        }
    }
    return x;
}
console.log(a([1,2,3,4]));
//Se imprime:
//["Coding", "Coding", "Coding", "Coding"]

//Ejercicio 6
function a(x){
    for(var i=0; i<x.length; i++){
      if(x[i] > 5){
           x[i] = "Coding";
      }
      else if(x[i] < 0){
           x[i] = "Dojo";
      }
    }
    return x;
}
console.log(a([5,7,-1,4]))
//Se imprime
//5, 'Dojo', 'Coding', 4


//Ejercicio 7
function a(x){
    if(x[0] > x[1]) {
        return x[1];
    }
    return 10;
}
let b = a([5,10])
console.log(b);
//Se imprime
//10

//Ejercicio 8
function sum(x){
    sum = 0;
    for(var i=0; i<x.length; i++){
       sum = sum + x[i];
       console.log(sum);
    }
    return sum;
}
//Se imprime
//Nulo 


//PARTE 2

//Ejercicio 1
//Analiza los valores de un array y obtén el promedio (average) de esos valores.

let y = printAverage([1,2,3]);
let z = printAverage([2,5,8]);

function printAverage(x){
    let sum = 0;
    for(let i = 0; i< x.length; i++){
        sum += x[i];
    }
    let div = sum/x.length
    console.log(div)
}


//Ejercicio 2
//Crea un array con todos los enteros impares (odd integers) entre 1 y 255 (inclusive)

function returnOddArray(){
    for(i = 0; i<=255; i++){
        if(i % 2 != 0){
            console.log(i);
        }
    }
}
returnOddArray();// should log [1,3,5,...,253,255]


//Ejercicio 3
//Cuadra cada valor con un array dado, obteniendo el mismo array con valores cambiados..

function squareValue(x){
    for(i = 0; i < x.length; i++){
        x[i] = x[i] * x[i];
    }
    return x;
}
 y = squareValue([1,2,3]);
 console.log(y); // should log [1,4,9]
   
 y = squareValue([2,5,8]);
 console.log(y); // should log [4,25,64]
 