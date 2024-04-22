// --------------------------------------------------------------
// -------------------------Reto-1--------------------------------
/*let calificacionesString = prompt("Ingrese las calificaciones del estudiante separadas por comas:");

let calificacionesArray = calificacionesString.split(",");

let sumaCalificaciones = calificacionesArray.reduce(function(total, calificacion) {
    return total + parseFloat(calificacion.trim());
}, 0); 

let promedio = sumaCalificaciones / calificacionesArray.length;

alert("El promedio de calificaciones del estudiante es: " + promedio.toFixed(2));*/

// --------------------------------------------------------------
// -------------------------Reto-2--------------------------------

let calificacionesString = prompt("Ingrese las calificaciones de los estudiantes separadas por comas:");

let calificacionesArray = calificacionesString.split(",").map(Number);

let sumaCalificaciones = calificacionesArray.reduce(function(total, calificacion) {
    return total + calificacion;
}, 0);
let promedio = sumaCalificaciones / calificacionesArray.length;

let calificacionMaxima = Math.max(...calificacionesArray);

let calificacionMinima = Math.min(...calificacionesArray);

let aprobados = calificacionesArray.filter(function(calificacion) {
    return calificacion >= 70;
}).length;

let reprobados = calificacionesArray.filter(function(calificacion) {
    return calificacion < 70;
}).length;

let calificacionesOrdenadas = calificacionesArray.slice().sort(function(a, b) {
    return b - a;
});

console.log("Estadísticas de Calificaciones:");
console.log("Promedio de Calificaciones: " + promedio.toFixed(2));
console.log("Calificación Máxima: " + calificacionMaxima);
console.log("Calificación Mínima: " + calificacionMinima);
console.log("Número de Aprobados: " + aprobados);
console.log("Número de Reprobados: " + reprobados);
console.log("Lista de Calificaciones Ordenadas de Mayor a Menor:");
console.log(calificacionesOrdenadas.join(", "));
