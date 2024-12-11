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
let cantidad = 5;

// CORRECCIÓN
cantidad %= 3;

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

// Ejercicio 14: Decremento después del uso
let cantidadDecremento = 8;

console.log("Decremento -1 cantidad", --cantidadDecremento);

// Ejercicio 15: Ajuste del salario
let salario = 3000;

let subidaSalario = salario * 0.05;

salario += subidaSalario;

console.log("Subida Salario", salario);


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


// Ejercicio 19: Gasto semanal
const gastoDiario = 20;

const gastoSemanal = gastoDiario * 7; 

console.log("Gasto semanal", gastoSemanal);

// Ejercicio 20: Conversión de monedas
let cantidadUSD = 20;

let tasaCambio = 2;

let conversionMoneda = cantidadUSD * tasaCambio;

console.log("La cantidad convertida es", conversionMoneda, "euros");

// Ejercicio 21: Cálculo de descuentos acumulados
let precioInicial = 100;

let descuento1 = precioInicial * 0.2;
precioInicial -= descuento1;

let descuento2 = precioInicial * 0.1;
precioInicial -= descuento2;

console.log("Precio final", precioInicial);

let precioInicial2 = 100;

precioInicial2 *= 0.8;
precioInicial2 *= 0.9;

console.log("Precio final 2", precioInicial2);

// Ejercicio 22: ¿Qué edad tendré en 5 años?
let edadActual = 28;

edadActual += 5;

console.log("En 5 años tendré", edadActual, "años");

// Ejercicio 23: Cuota mensual
const deudaTotal = 120;

const meses = 12;

const cuotaMensual = deudaTotal / meses;

console.log("La cuota mensual es de", cuotaMensual, "euros");

// Ejercicio 24: Incremento antes de imprimir
let puntos = 60;

console.log("Tengo", ++puntos, "puntos");

// Ejercicio 25: Decremento después de imprimir
let turno = 5;

console.log("Tengo", turno--, "turnos");

// Ejercicio 26: Comprueba divisibilidad por 5
const numeroResto = 25;

if (numeroResto % 5 === 0) {
	console.log("Es divisible", numeroResto);
}

if (numeroResto % 5 !== 0) {
	console.log("No es divisible", numeroResto);
}

// Ejercicio 27: Saldo restante después de un retiro
const saldo = 60;

const retiro = 30;

const saldoRestante = saldo - retiro;

console.log("Saldo Restante:", saldoRestante, "euros");

// Ejercicio 28: Cálculo del perímetro de un cuadrado
let lado = 5;

let perimetro = lado * 4;

console.log("Perímetro del cuadrado", perimetro);

// Ejercicio 29: Conversión de días
let diasConversion = 7;

let horas = diasConversion * 24;  

let minutos = horas * 60;

console.log(diasConversion + " días son " + horas + " horas y", minutos, "minutos");

// Ejercicio 30: Cálculo de propinas
let cuenta = 100; 

let propina = cuenta * 0.15;

let totalConPropina = cuenta + propina;

console.log("El total es", totalConPropina, "euros");

// Ejercicio 31: Cálculo del volumen de un cubo
let ladoCubo = 4;

volumen = ladoCubo ** 3;

console.log("Cálculo del volumen de un cubo", volumen);

// Ejercicio 32: Incremento acumulado
let cantidadAhorros = 50;

cantidadAhorros += cantidadAhorros * 3;
cantidadAhorros += cantidadAhorros * 3;
cantidadAhorros += cantidadAhorros * 3;

console.log("Incremento acumulado", cantidadAhorros);


// Ejercicio 33: Conversión de horas a segundos
let horasConversion = 24;

let segundosConversion = horasConversion * 3600;  

console.log(horasConversion + " horas son " + segundosConversion + " segundos");

// Ejercicio 34: Cálculo de salario semanal
let horasTrabajadas = 120;

let pagoPorHora = 20;

let salarioSemanal = horasTrabajadas * pagoPorHora;

console.log("Cálculo de salario semanal:", salarioSemanal);

// Ejercicio 35: Decremento acumulado
let peso = 65;

peso -= 2.5;
peso -= 2.5;
peso -= 2.5;
peso -= 2.5;

console.log("Peso actual", peso);

// Ejercicio 36: Comprobación de múltiplos
const numeroMultiplo = 25;

if (numeroMultiplo % 3 === 0) {
	console.log("El número", numeroMultiplo, "es múltiplo de 3");
} else {
	console.log("El número", numeroMultiplo, "no es múltiplo de 3");
}

// Ejercicio 37: Incremento con decimales
let precioGasolina = 1.48;

precioGasolina += 0.25;
precioGasolina += 0.25;
precioGasolina += 0.25;

console.log("El precio de la gasolina es", precioGasolina, "euros");

// Ejercicio 38: Calcula el promedio de 5 números
let numeroUno = 20;
let numeroDos = 30;
let numeroTres = 80;
let numeroCuatro = 10;
let numeroCinco = 5;

let totalSuma = numeroUno + numeroDos + numeroTres + numeroCuatro + numeroCinco;

totalSuma / 5;

console.log("El promedio es:", totalSuma);

// Ejercicio 39: Cálculo del descuento acumulado
let precioInicial3 = 50;

precioInicial3 *= 0.70;
precioInicial3 *= 0.85;

console.log("Descuento acumulado:", precioInicial3);

// Ejercicio 40: Ajuste de inventario con restos
let inventarioTotal = 2010;

let productosPorCaja = 50;

let productosSobrantes = inventarioTotal % productosPorCaja;

console.log("Sobran", productosSobrantes, "productos");

// Ejercicio 41: Cálculo del interés compuesto
let capitalInicial = 500;

let tasaInteres = 1.25;

let periodos = 3;

monto = capitalInicial * (1 + tasaInteres) ** periodos;

console.log("El interés compuesto es:", monto);

// Ejercicio 42: Incremento y resto en un ciclo

// Ejercicio 43: Comparación de superficies

// Ejercicio 44: Optimización de cajas de productos

// Ejercicio 45: Ahorro acumulado con bonificaciones

// Ejercicio 46: Comprobación de divisibilidad múltiple

// Ejercicio 47: Ajuste del precio con IVA y descuento

// Ejercicio 48: Cálculo del promedio ponderado

// Ejercicio 49: Cálculo de la raíz cúbica aproximada

// Ejercicio 50: Ajuste salarial acumulativo
