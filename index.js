// Ejercicios de Operadores Aritméticos

// Ejercicio 1: Suma de productos
const precioProducto1 = 5;

const precioProducto2 = 3;

const sumaProductos = precioProducto1 + precioProducto2;

console.log("Precio total", sumaProductos);

// Ejercicio 2: Descuento en una compra
const precioOriginal = 20;

const descuento = 10;

const precioConDescuento = precioOriginal - descuento;

console.log("Precio con descuento", precioConDescuento);

// Ejercicio 3: Calcula el IVA
const precio = 30;

const iva = 0.21;

const ivaDelPrecio = precio * iva;

const precioYIva = precio + ivaDelPrecio;

console.log("Precio + IVA", precioYIva);

// Ejercicio 4: División de la cuenta
const totalCuenta = 60;

const numPersonas = 3;

const divisionDeLaCuenta = totalCuenta / numPersonas;

console.log("División de la cuenta", divisionDeLaCuenta);

// Ejercicio 5: Resto de una división
const totalChocolates = 10;

const personas = 4;

const porcionChocolate = totalChocolates % personas;

console.log("Porciones de chocolate", porcionChocolate);

if (porcionChocolate > 1) {
	console.log("Con esto me harto");
}
if (porcionChocolate < 1) {
	console.log("HO, yo quería uno más");
}

// Ejercicio 6: ¿Es un número par?
const numero = 20 % 2;

console.log("¿Es par?", numero);

if (numero === 1) {
	console.log("Impar");
}
if (numero === 0) {
	console.log("Par");
}

// Ejercicio 7: Multiplica ingredientes
const cantidadOriginal = 2;

const factorMultiplicacion = 3;

const multiplicaIngredientes = cantidadOriginal * factorMultiplicacion;

console.log("¿Cuántos ingredientes necesito?", multiplicaIngredientes);

if (multiplicaIngredientes < 6) {
	console.log("Podemos hacerla");
}
if (multiplicaIngredientes > 3) {
	console.log("Nos hace falta varias cositas más");
}

// Ejercicio 8: Incremento en la cuenta
let totalAhorros = 3000;

totalAhorros += 10;

console.log("Incremento en Cuenta", totalAhorros);

if (totalAhorros < 1000) {
	console.log("Con esto podemos irnos de viaje");
}
if (totalAhorros > 1000) {
	console.log("Tengo que ahorrar más");
}
// Ejercicio 9: Decremento de una deuda
let deuda = 70;

deuda -= 15;

console.log("Total de la deuda", deuda);

if (deuda < 60) {
	console.log("Deuda pagada");
}
if (deuda > 60) {
	console.log("Tengo que pagar un poco aún");
}

// Ejercicio 10: Calcula un exponente
const base = 2;

const exponente = 6;

const resultadoExponente = base ** exponente;

console.log("Resultado Exponente", resultadoExponente);

// Ejercicio 11: Reducción de precios

let precioProducto = 50;

precioProducto *= 0.09;

console.log("Reducción de precio", precioProducto);

if (precioProducto < 5) {
	console.log("Podría reducirlo un poco más");
}
if (precioProducto > 5) {
	console.log("Eso que me ahorro");
}

// Ejercicio 12: Resto acumulado
const cantidad = 10 % 3;

console.log("Resultado resto acumulado", cantidad);

if (cantidad === 1) {
	console.log("Impar");
}
if (cantidad === 0) {
	console.log("Par");
}

// Ejercicio 13: Incremento antes del uso
let dias = 10;

console.log("Incremento +1 día", ++dias);

if (dias < 1) {
	console.log("Son pocos días");
}
if (dias > 1) {
	console.log("Son muchos días");
}

// Ejercicio 14: Decremento después del uso
let cantidadDecremento = 8;

console.log("Decremento -1 cantidad", --cantidadDecremento);

if (cantidadDecremento < 1) {
	console.log("Es poca cantidad");
}
if (cantidadDecremento > 1) {
	console.log("Es mucha cantidad");
}

// Ejercicio 15: Ajuste del salario
let salario = 3000;

let subidaSalario = salario * 0.05;

salario += subidaSalario;

console.log("Subida Salario", salario);

if (salario < 3000) {
	console.log("Podrían subirlo un poco más");
} else if (salario > 3000) {
	console.log("Que sueldazo");
}

// Ejercicio 16: Calcula el área de un rectángulo
const baseTriangulo = 10;

const altura = 5;

const area = baseTriangulo * altura;

console.log("Área del rectángulo:", area);

// Ejercicio 17: Divide un premio
const premioTotal = 50;

const numGanadores = 2;

const divisionPremio = premioTotal / numGanadores;

console.log("Cada uno recibe", divisionPremio);

// Ejercicio 18: Incremento en el inventario
let inventario = 100;

inventario += 50;

console.log("Incremento de inventario", inventario);

if (salario < 100) {
	console.log("Nos falta material");
} else if (salario > 100) {
	console.log("Vamos bien de inventario");
}

// Ejercicio 19: Gasto semanal
const gastoDiario = 20;

const gastoSemanal = gastoDiario * 7;

console.log("Gasto semanal", gastoSemanal);

if (gastoSemanal < 50) {
	console.log("Si seguimos así podemos ahorrar");
} else if (gastoSemanal > 50) {
	console.log("Deberíamos ajustar el gasto semanal");
}

// Ejercicio 20: Conversión de monedas
let cantidadUSD = 20;

let tasaCambio = 2;

let conversionMoneda = cantidadUSD * tasaCambio;

console.log("La cantidad convertida es", conversionMoneda, "euros");

// Ejercicio 21: Cálculo de descuentos acumulados
let precioInicial = 200;

let descuento1 = precioInicial * 0.2;
precioInicial -= descuento1;

let descuento2 = precioInicial * 0.1;
precioInicial -= descuento2;

console.log("Precio final", precioInicial);

// Ejercicio 22: ¿Qué edad tendré en 5 años?
let edadActual = 28;

edadActual += 5;

console.log("En 5 años tendré", edadActual, "años");

if (edadActual > 30) {
	console.log("Que depresión");
} else if (edadActual < 30) {
	console.log("Aquí me tendría que quedar");
}

// Ejercicio 23: Cuota mensual
const deudaTotal = 120;

const meses = 12;

const cuotaMensual = deudaTotal / meses;

console.log("La cuota mensual es de", cuotaMensual, "euros");

if (cuotaMensual > 30) {
	console.log("Ya podría ser menos €");
} else if (cuotaMensual < 30) {
	console.log("Está bien, puedo pagarlo poco a poco");
}

// Ejercicio 24: Incremento antes de imprimir
let puntos = 60;

console.log("Tengo", ++puntos, "puntos");

if (puntos > 30) {
	console.log("Dentro de poco consigo el premio");
} else if (puntos < 30) {
	console.log("Qué poquitos");
}

// Ejercicio 25: Decremento después de imprimir
let turno = 5;

console.log("Tengo", --turno, "turnos");

if (turno > 10) {
	console.log("Qué pereza");
} else if (turno < 2) {
	console.log("Bueno son pocos");
}

// Ejercicio 26: Comprueba divisibilidad por 5

// Ejercicio 27: Saldo restante después de un retiro

// Ejercicio 28: Cálculo del perímetro de un cuadrado

// Ejercicio 29: Conversión de días

// Ejercicio 30: Cálculo de propinas

// Ejercicio 31: Cálculo del volumen de un cubo

// Ejercicio 32: Incremento acumulado

// Ejercicio 33: Conversión de horas a segundos

// Ejercicio 34: Cálculo de salario semanal

// Ejercicio 35: Decremento acumulado

// Ejercicio 36: Comprobación de múltiplos

// Ejercicio 37: Incremento con decimales

// Ejercicio 38: Calcula el promedio de 5 números

// Ejercicio 39: Cálculo del descuento acumulado

// Ejercicio 40: Ajuste de inventario con restos

// Ejercicio 41: Cálculo del interés compuesto

// Ejercicio 42: Incremento y resto en un ciclo

// Ejercicio 43: Comparación de superficies

// Ejercicio 44: Optimización de cajas de productos

// Ejercicio 45: Ahorro acumulado con bonificaciones

// Ejercicio 46: Comprobación de divisibilidad múltiple

// Ejercicio 47: Ajuste del precio con IVA y descuento

// Ejercicio 48: Cálculo del promedio ponderado

// Ejercicio 49: Cálculo de la raíz cúbica aproximada

// Ejercicio 50: Ajuste salarial acumulativo
