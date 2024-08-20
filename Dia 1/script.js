//Ejercicio 1

function imprimir(Frase){
    document.write(Frase)
}
var edad, año=2024;
edad=prompt("Por favro ingresa tu edad: ");
console.log("Hola");
console.log("Eres del año: "+(año-edad));

//Ejercicio 2

function pasar(celsius){
    document.write(celsius)
}
celsi=prompt("Por favor ingresa los grados Celsius: ");
var fahrenheir;
fahrenheir=(9*(celsi/5))+32;
console.log("Los grados Celsius convertidos a Fahrenheir son: "+(fahrenheir))

//Ejercicio 3

function promocion(descuento){
    document.write(descuento)
}
descu=prompt("Cual es tu posición en los clientes? ")
if (descu>20){
    console.log("Tienes un descuento de 10%")
}

//Tipos de variables
//Var

function varT(){
    var x =1;
    {
        var x = 2;
        console.log(x);
    }
    console.log(x);
}
varT();

//Let

function letT(){
    let x =1;
    {
        let x =2;
        console.log(x);
    }
    console.log(x);
}
letT();

//Const

const foo = {bar:10, baz:12}
const { bar } = foo;
console.log(bar);//10

const gg = ['23', 34];
const [ num1, num2 ] = gg;
console.log(num2);//34

// Parametros sin retorno

function mensaje(Hola){
    console.log(Hola);
}
mensaje("Hello");

// Parametro con retorno

function suma(a, b){
    return a + b;
}
const resultado = suma(5, 3);
console.log(resultado);

// sin parametros con retorno

function numero(){
    return Math.random();
}
const numeros = numero();
console.log(numeros);

// sin parametro sin retorno 

function mensajes(){
    console.log("Hello");
}
mensajes();