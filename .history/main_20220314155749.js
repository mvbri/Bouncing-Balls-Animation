// let edad = prompt("Cuál es tu edad")
// // Nunber() sirve para convertir datos a tipo number.
// if(Number(edad) == edad) {
//     if(edad > 18) {
//         alert("Ya puedes conducir")
//     } else {
//         alert("No puedes condicir mano")
//     }
// } else {
//     alert("Introduce un número")
// }

// do {

//     let nota = prompt("Dime tu nota")
//     nota = Number(nota)

//     if(nota < 3 && nota >= 0) {
//         alert("Muy deficiente")
//       } else if (nota < 5) {
//         alert("Insuficiente")
//       } else if (nota < 6) {
//         alert("suficiente")
//       } else if (nota < 7) {
//         alert("Bien")
//       } else if (nota < 9) {
//         alert("Notable")
//       } else if (nota < 10) {
//         alert("Sobresaliente")
//       } else {
//         alert("Ingresa un numero entre los rangos")
//       }

// } while (nota != undefined)

/**
 * 3. Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar”   deben mostrarse todas las cadenas concatenadas con un guión -.
 */

// var resultado = "";
// //BUCLE DO WHILE PARA INTRODUCIR VARIAS CADENAS
// do {
//     //PEDIMOS LA CADENA POR TECLADO
//     var cadena = prompt("Introduce una cadena");
//     //SI LA VARIABLE RESULTADO ESTÁ VACÍA
//     if (resultado == "") {
//         //CONCATENAMOS SIN UTILIZAR GUIÓN
//         resultado = resultado + cadena;
//     }
//     //SINÓ
//     else {
//         //CONCATENAMOS CON GUIÓN
//         resultado = resultado + "-" + cadena;
//     }
//     //MIENTRAS SE PULSE ACEPTAR EN EL MENSAJE EMERGENTE CONFIRM
// } while (confirm("Desea seguir?"));
// //SI SE PULSÓ CANCELAR IMPRIMIMOS EL RESULTADO
// document.write(resultado);

// Ejercicio 3

/**
 * Pasos
 *
 * 1. hacer el ciclo do while
 * Este por ser el que realiza una acción al menos una vez antes de preguntar si la condición se cumple.
 *
 * 2. Confirmar que ciclo se cumpla agregando un promp que se debe mostar hasta que se le precio "cancelar"
 * a la ventana producina por el metodo confirm.
 *
 * 3. Crear la variable resultado que debe ser global para que pueda mostrarse fuera del ciclo.
 * La declararemos como una cadena de texto vacía.
 *
 * 4. Se crea la variable que guardará las cadenas de texto que introduzca el usuario.
 *
 * 5. Se crea una validación para comprobar que la variable resultado sea una variable de texto vacía, y si es así, que ahora tenga como valor el valor de la variable cadena.
 *
 * 6. Ahora al estar la cadena vacía y cumplirse el primer condicional, este se llena con el valor que se le pasa al prompt y está almacena en la variable cadena, al ya no cumplirse la primera condición pasa a la siguiente concional que no es otra formada por un else o :, y ya con el primer valor de nuestra cadena se empieza a concatenar con "-" antes de cada una de las siguientas cadenas que se le pasen a través del prompt.
 */

// let resultado = "";

// do {
//   let cadena = prompt("Ingresa una cadena de texto");

//   if (resultado == "") {
//     resultado = cadena;
//   } else {
//     resultado += ` - ${cadena}`;
//   }
// } while (confirm("¿Desea seguir?"));
// document.write(resultado);

let resultado = "";
do {
  let cadena = prompt("Ingresa una cadena de texto");
  resultado == "" ? (resultado = cadena) : (resultado += ` - ${cadena}`);
} while (confirm("¿Desea seguir?"));
document.write(resultado);
