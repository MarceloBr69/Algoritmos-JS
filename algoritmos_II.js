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
//15