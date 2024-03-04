//Primer ejercicio

function multiply(x,y) {
    console.log(x);
    console.log(y);
}
b = multiply(2,3);
console.log(b);

//Se imprime:
// 2, 3, 2, 3

//Segundo ejercicio

function multiply(x,y) {
    return x*y;
}
b = multiply(2,3);
console.log(b);
console.log(multiply(5,2));

//Se imprime:
//6, 10

//Tercer ejercicio

var x = [1,2,3,4,5,10];
for(var i=0; i<5; i++) {
   i = i + 3; 
   console.log(i);
}

//Se imprime:
//3, 7

//Cuarto ejercicio
var x=15;
console.log(x);
function awesome(){
    var x=10;
    console.log(x);
}
console.log(x);
awesome();
console.log(x);

//Se imprime:
//15,15,10,15

//Quinto ejercicio
for(var i=0; i<15; i+=2) {
    console.log(i);
}

//Se imprime:
//0, 2, 4, 6, 8, 10, 12, 14

//Sexto ejercicio:
for(var i=0; i<3; i++) {
   for(var j=0; j<2; j++) {
       console.log(i*j);
   }
}
//Se imprime:
//nulo

//Septimo ejercicio
function looping(x,y) {
    for(var i=0; i<x; i++) {
       for(var j=0; j<x; j++) {        
           console.log(i*j);
       } 
    }
 }
 z = looping(3,3);
 console.log(z);
 //Imprime 0,0,0,0,1,2,0,2,4 

 //Octavo ejercicio
 function looping(x,y) {
    for(var i=0; i<x; i++) {
       for(var j=0; j<y; j++) {        
          console.log(i*j);
       } 
    }
    return x*y;
 }
 z = looping(3,5);
 console.log(z);
//Se imprime: 
//0,0,0,0,0,0,1,2,3,4,0,4,6,8




//Parte 2

//Primer ejercicio
console.log('Parte2')
function printUpTo(x) {
    // your code here
    for(let i = 0; i<1001; i++){
        if(i % 2 === 0){
            console.log(i)
        }
    }
    if(x<0){
        console.log('false')
    }
}
printUpTo(1000); // debería imprimir todos los enteros de 1 to 1000
y = printUpTo(-10); // debería imprimir false
console.log(y); // debería imprimir false
  


//Segundo ejercicio
console.log('Segundo ejercicio')
function printSum(x) {
    var sum = 0;
    for(let i = 0; i<=x; i++){
        if(i % 2 === 0){
            console.log(i);
            sum += i;
        }
    }
    return sum
}
  y = printSum(255) // debería imprimir todos los enteros de 0 a 255 y que cada entero imprima la suma parcial.
  console.log(y) // debería imprimir 32640
  


//Terer ejercicio
console.log('tercer ejercicio')


function printSumArray(x) {
var sum = 0;
    for(var i=0; i<x.length; i++) {
        sum += x[i];
    }
    return sum;
}
console.log( printSumArray([1,2,3]) ); // debería imprimir 6


//Bonus
console.log('Bonus')

function largestElement(arr){
    let max = Math.max(...arr);
    console.log(max);
}

largestElement([1,30,5,7]);