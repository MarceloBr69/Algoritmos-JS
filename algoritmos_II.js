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