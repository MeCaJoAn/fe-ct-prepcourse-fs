"VARIABLES Y TIPOS DE DATOS EN JAVASCRIPT"

var a = "Hola mundo"

var palabra = "Thiago"

var numero1 = 12

var numero2 = -4

var numero3 = 11.75

var verdadero = true

var falso = false

var cajon1

var nada = null

console.log( "El numero de letras que tiene son  : " + a.length)

console.log(numero1)

console.log(numero2)

console.log(nada)

"OPERACIONES EN JAVASCRIPT"

var numero1 = 4

var numero2 = 5

console.log("La suma de los numero es : " + numero1 + numero2)

console.log("La resta de los numero es : " + numero1 - numero2)

console.log("La multiplicacion de los numero es : " + numero1 * numero2)

console.log("La division (Resto) de los numero es : " + numero1 % numero2)


console.log(3+5*2-8) //Rpta:5

console.log("Hola" + " Thiago")


"OPERADORES DE COMPARACION"

var numero = 4

var numero1 = 5

var numero2 = 4 

var numero3 = 1

console.log(numero < numero1)
console.log(numero2 >= numero)
console.log(numero1 === numero3)

// == => verfica solamnete si son iguale y ya
// === => verfica si son iguales y si son del mismo tipo de variable

"ASOCIATIVIDAD" // va de derecha a izquierda y en operaciones de izquierda a derecha

var a = 1 
var b = 2

var c = a = b
console.log(a)
console.log(b)
console.log(c)

var m = 16
var n = 2 
var y = 4 

console.log(m / n /y)

"FUNCIONES EN JAVASCRIPT"

function sumatres (x) {
    console.log("La suma de la funcion es = " + (x+3))
}
sumatres(5)

function sumados (x){
    return x+2
}

var sumauno = function (x){
    return x+1
}

var sumacuatro = (x) => {
    return x+4
}

function cuidadoconelconsolelog(nombre){
    console.log(nombre)
    return nombre
}

function otrafuncion(nombre){
    return (
        "el nombre retornado por la funcion 'cuidadoconelconsolelog' es : "
        + cuidadoconelconsolelog("camilo")
    )
}


"CODIGOS CONDICIONALES EN JAVASCRIPT" // if else

function viajar(destino){
    if (destino === "Brasil"){
        console.log("Gire a la izquierda")
    }else if (destino === "Argentina"){
        console.log("Gire a la derecha")
    }else{
        console.log("Nos Perdimos")
    }
}

viajar("afganistan")

function puedemanejar(edad){
    if (edad >= 18) {
        console.log("Puede manejar")
    }else{
        console.log("No puede manjear")
    }
}
puedemanejar(18)

var a = Math.round(0.49) // redondea al entro mas proximo
var b = Math.floor(5.93) // redopndea al entero menor mas cercano
var c = Math.ceil(3.27) //redonde al entero mayor mas cercano
console.log(a + " " + b + " " + c)

var d = Math.max(1,2,3,4,5,6) //manda la maximo de una lista de numero
var e = Math.min(4,5,6,7,1,3,4) // mando el minimo de una lista de numeros
console.log( d + " " + " " + e)

var f = Math.pow(2,5) // ptencia 2 elevado a la 5

var g = Math.random() // genera un numero decimal aleatorio entre 0 y 1

console.log(f + " " + " " + g)

