// Ejercicios de Operadores Aritméticos

// Ejercicio 1: Suma de productos

const precioProducto1 = 5;
const precioProducto2 = 8;

const precioTotal = precioProducto1 + precioProducto2;

console.log ("El precio del producto es de " + precioTotal + " euros")

// Ejercicio 2: Descuento en una compra

const precioOriginal = 8;
let descuento = 2;

const precioFinalConDescuento = precioOriginal - descuento;

console.log ("El precio final aplicando el descuento es de "  + precioFinalConDescuento + " euros")

// Ejercicio 3: Calcula el IVA

const precio = 500;
const iva = 21 / 100;

const precioTotalConIva = precio * iva + precio;

console.log ("El precio total con el iva es de " + precioTotalConIva + " euros")

// Ejercicio 4: División de la cuenta

const totalCuenta = 200;
const numPersonas = 8;

const cuentaDividida = totalCuenta / numPersonas;

console.log ("La cuenta sale a " + cuentaDividida + " euros cada uno")

// Ejercicio 5: Resto de una división

const totalChocolates = 63;
const personas = 4;

const chocolatesSobrantes = totalChocolates % personas;

console.log ("Sobran " + chocolatesSobrantes + " chocolates")

// Ejercicio 6: ¿Es un número par?

let numero = 627;

if (numero % 2 === 0){
    console.log ("El numero es par")
}

if (numero % 2 === 1) {
    console.log ("El numero es impar")
}

// Ejercicio 7: Multiplica ingredientes

const cantidadOriginal = 20;
const factorMultiplicacion = 2;

const cantidadDeRecetaDuplicada = cantidadOriginal * factorMultiplicacion;

console.log ("La cantidad de gramos duplicada de harina es de " + cantidadDeRecetaDuplicada)

// Ejercicio 8: Incremento en la cuenta

let totalAhorros = 10;

totalAhorros += 10;

console.log ("Incrementando 10 al total de ahorros se queda en "  + totalAhorros)

// Ejercicio 9: Decremento de una deuda

let deuda = 40;

deuda -= 15;

console.log ("Valor reducido despues de la deuda " + deuda)

// Ejercicio 10: Calcula un exponente

let base = 20;
let exponente = 4;

let baseXExponente = base ** exponente;

console.log ("La base elevada al exponente es igual a " + baseXExponente)

// Ejercicio 11: Reducción de precios

let precioProducto = 30;

precioProducto *= 0.9;

console.log ("El precio del producto con un 10% de descuento es de " + precioProducto)

// Ejercicio 12: Resto acumulado

let cantidad = 40;

cantidad %= 3;

console.log ("El sobrante de la division entre 3 es de " + cantidad)

// Ejercicio 13: Incremento antes del uso

let dias = 30;

++dias

console.log ("Incremento " + dias)

// Ejercicio 14: Decremento después del uso

cantidad = 60;

--cantidad

console.log ("Decremento " + cantidad)

// Ejercicio 15: Ajuste del salario

let salario = 5000;

salario += salario * 5 / 100;

console.log ("Salario + incremento es igual a " + salario)

// Ejercicio 16: Calcula el área de un rectángulo

base = 20;
let altura = 10;

let area = base * altura;

console.log ("El area es de " + area)

// Ejercicio 17: Divide un premio

let premioTotal = 600;
let numDeGanadores = 3;

let premioTotalDividido = premioTotal / numDeGanadores;

console.log ("El premio total ya repartido es de " + premioTotalDividido)

// Ejercicio 18: Incremento en el inventario

let inventario = 30;

inventario += 50;

console.log ("Incremento en el inventario " + inventario)

// Ejercicio 19: Gasto semanal

let gastoDiario = 40;

gastoSemanal = gastoDiario * 7;

console.log ("El gasto semanal es de " + gastoSemanal)

// Ejercicio 20: Conversión de monedas

let cantidadUSD = 40;
let tasaCambio = 2;

let conversionDeMoneda = cantidadUSD * tasaCambio;

console.log ("La conversión de divisa cuesta " + conversionDeMoneda)

// Ejercicio 21: Cálculo de descuentos acumulados

let precioInicial = 100;

precioInicial *= 0.30;

console.log ("El descuento incluido es de " + precioInicial)

// Ejercicio 22: ¿Qué edad tendré en 5 años?

let edadActual = 21;

edadActual += 5;

console.log ("Mi edad dentro de 5 años será de " + edadActual + " años")

// Ejercicio 23: Cuota mensual

let deudaTotal = 200;
let meses = 4;

// deudaTotal /= meses;

let cuotaMensual = deudaTotal / meses;

console.log ("La deuda será de " + cuotaMensual + " euros cada mes")

// Ejercicio 24: Incremento antes de imprimir

let puntos = 10000;

puntos = ++puntos;

console.log (puntos)

// Ejercicio 25: Decremento después de imprimir

let turnos = 4;

console.log ("Turnos " + turnos)

turnos = --turnos;

console.log ("Turnos " + turnos)

// Ejercicio 26: Comprueba divisibilidad por 5

numero = 101;

if (numero % 5 === 0) {
    console.log ("El número es divisible por 5")
}

if (numero % 5 === 1) {
    console.log ("El número no es divisible por 5")
}

// Ejercicio 27: Saldo restante después de un retiro

let saldo = 1000;
let retiro = 200;

saldo -= retiro;

console.log ("El saldo es de " + saldo)

// Ejercicio 28: Cálculo del perímetro de un cuadrado

let lado = 20;

lado *= 4;

console.log ("El perímetro es de " + lado + " cm")

// Ejercicio 29: Conversión de días

dias = 9;

dias *= 24;

console.log ("En 9 días hay " + dias + " horas")

// Ejercicio 30: Cálculo de propinas

let cuenta = 400;
let propina = 0.15;

propina = cuenta * propina;
cuenta = cuenta + propina;

console.log ("La cuenta es de " + cuenta + " euros con propina incluida")

// Ejercicio 31: Cálculo del volumen de un cubo

lado = 4;

lado = lado ** 3;

console.log ("El volumen del cubo es de " + lado)

// Ejercicio 32: Incremento acumulado

let cantidadAhorros = 400;

cantidadAhorros += cantidadAhorros * 0.9 * 3;

console.log ("Incremento acumulado " + cantidadAhorros)

// Ejercicio 33: Conversión de horas a segundos

let horas = 24;

horas = horas * 3600;

console.log ("Son " + horas + " segundos")

// Ejercicio 34: Cálculo de salario semanal

let horasTrabajadas = 72;
let pagoPorHora = 12;

let pagoSemanal = horasTrabajadas * pagoPorHora;

console.log ("El salario semanal es de " + pagoSemanal + " euros")

// Ejercicio 35: Decremento acumulado

let peso = 80;

peso -= 2.5 * 4;

console.log ("El peso después de 4 semanas es de " + peso + " kg")

// Ejercicio 36: Comprobación de múltiplos

numero = 100;

if (numero % 3 === 0) {
    console.log ("El número es múltiplo de 3")
}

if (numero % 3 !== 0) {
    console.log ("El número no es múltiplo de 3")
}

// Ejercicio 37: Incremento con decimales

let precioGasolina = 10;

precioGasolina += 0.25 * 3;

console.log ("Incremento de la gasolina " + precioGasolina)

// Ejercicio 38: Calcula el promedio de 5 números

let numero1 = 10;
let numero2 = 20;
let numero3 = 30;
let numero4 = 40;
let numero5 = 50;

let totalNumeros = numero1 + numero2 + numero3 + numero4 + numero5 / 5;

console.log ("El promedio es de " + totalNumeros)

// Ejercicio 39: Cálculo del descuento acumulado

// Ejercicio 40: Ajuste de inventario con restos