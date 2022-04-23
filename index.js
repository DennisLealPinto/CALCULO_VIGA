/* 
    Diseño aflexion de viga
    Dennis Ferney Leal Pinto
    Estructuras 3, Grupo B
*/

alert("Hola, mi nombre es Dennis Leal Pinto, estudiante de ingeniería civil de la universidad de Pamplona, cursando la asignatura diseño de estructuras 3, Grupo B");
alert("Calculo de diseño de aflexion de viga, dale OK para continuar:");

// INPUTS
let b = prompt("Ingrese b en milimetros"); // BASE
let h = prompt("Ingrese h en milimetros");; // ALTURA TOTAL
let d = prompt("Ingrese d en milimetros");; // ALTURA EFECTIVA
let Mu = prompt("Ingrese Mu en newton milimetros");; //
let fc = prompt("Ingrese Fc en Mpa");; // RESISTENCIA AL CONCRETO - Megapascales
let fy = prompt("Ingrese Fy en Mpa");; // RESISTENCIA AL ACERO

const y = '';
const B1 = 0.85 - (0.05/7) * (fc - 28);
const Eu = '';

const factor_reducion_resistencia = 0.90; // EN VIGAS

// DETERMINAR EL RN
function determinar_rn () {
    return (Mu / (factor_reducion_resistencia * b * (d*d)));
}

// EVALUAR LA CUANTIA
function evaluar_cuantia () {
    const Rn = determinar_rn();
    return ((0.85*fc) / fy) * (1 - Math.sqrt(1 - ( ( 2*Rn ) / ( 0.85*fc ) )));
}

// CUANTIA MINIMA
function obtener_cuantia_minima () {
    return 1.41/fy;
}

// AREA DE ACERO
function evaluar_area_acero () {
    let p = evaluar_cuantia();
    return p*b*d;
}


document.write(`RESULTADOS:`);
document.write("<br>"); 
document.write(`Rn: ${determinar_rn().toFixed(2)}`);
document.write("<br>"); 
document.write(`Cuantia: ${evaluar_cuantia().toFixed(5)}`);
document.write("<br>");
document.write(`Area del acero: ${evaluar_area_acero().toFixed(2)} Milimetros`);