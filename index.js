// Ejercicios de Operadores Aritméticos

// Ejercicio 1: Suma de productos

let precioProducto1 = 4;

let precioProducto2 = 8;

const sumaDeProductos = precioProducto1 + precioProducto2;

console.log("Suma de productos: ", sumaDeProductos, "€");

// Ejercicio 2: Descuento en una compra

let precioOriginal = 45;

let descuento = 5;

const precioConDescuento = precioOriginal - descuento;

console.log("Precio con descuento: ", precioConDescuento, "€");

// Ejercicio 3: Calcula el IVA

precioOriginal = 100;

iva = 21 / 100;

const precioConIva = precioOriginal * iva + precioOriginal;

console.log("Precio con IVA: ", precioConIva, "€");

// Ejercicio 4: División de la cuenta

let totalCuenta = 245;

let personas = 10;

const aPagar = totalCuenta / personas;

console.log("Precio por persona: ", aPagar, "€");

// Ejercicio 5: Resto de una división

let totalChocolates = 18;

personas = 4;

const chocolatesSobrantes = totalChocolates % personas;

console.log("Chocolates sobrantes: ", chocolatesSobrantes, "chocolates");

// Ejercicio 6: ¿Es un número par?

let numero = 12;

if (numero % 2 === 0) {
	console.log("El ", numero, "es un número par");
} else {
	console.log("El", numero, "es un número impar");
}

// Ejercicio 7: Multiplica ingredientes

let cantidadOriginal = 7;

let factorMultiplicacion = cantidadOriginal * 2;

console.log("Ingredientes duplicados: ", factorMultiplicacion, "ingredientes");

factorMultiplicacion = cantidadOriginal * 3;

console.log("Ingredientes triplicados: ", factorMultiplicacion, "ingredientes");

// Ejercicio 8: Incremento en la cuenta

let totalAhorros = 100;

totalAhorros += 10;

console.log("Ahorros: ", totalAhorros, "€");

// Ejercicio 9: Decremento de una deuda

let deuda = 250;

deuda -= 15;

console.log("Deuda: ", deuda, "€");

// Ejercicio 10: Calcula un exponente

let base = 3;

let exponente = 4;

const numeroElevado = base ** exponente;

console.log("Base elevada al exponente: ", numeroElevado);

// Ejercicio 11: Reducción de precios

let precioProducto3 = 200;

const precioReducido = (precioProducto3 *= 0.9);

//El 0.9 viene de que el 0.1 sería el 10% descuento.

console.log("Precio reducido: ", precioReducido, "€");

// Ejercicio 12: Resto acumulado

let cantidad = 5;

let restoAcumulado = (cantidad %= 3);

console.log("Resto acumulado: ", restoAcumulado);

// Ejercicio 13: Incremento antes del uso

let dias = 2;

dias = ++dias;

console.log("Incremento de días: ", dias);

// Ejercicio 14: Decremento después del uso

cantidad = 44;

console.log("Cantidad actual: ", cantidad);

console.log("Cantidad reduciéndose: ", --cantidad);

console.log("Cantidad reduciéndose: ", --cantidad);

console.log("Cantidad reduciéndose: ", --cantidad);

// Ejercicio 15: Ajuste del salario

let salario = 2500;

salario += (salario * 5) / 100;

console.log("Nuevo salario: ", salario, "€");

// Ejercicio 16: Calcula el área de un rectángulo

base = 14;

let altura = 8;

let areaRectangulo = base * altura;

console.log("Área del rectángulo: ", areaRectangulo, "m2");

// Ejercicio 17: Divide un premio

let premioTotal = 400000;

let numGanadores = 20;

let premioPorCabeza = premioTotal / numGanadores;

console.log("Premio por ganador: ", premioPorCabeza, "€");

// Ejercicio 18: Incremento en el inventario

let inventario = 25;

inventario += 50;

console.log("Inventario incrementado: ", inventario);

// Ejercicio 19: Gasto semanal

let gastoDiario = 45;

let gastoSemanal = gastoDiario * 7;

console.log("Gasto semanal: ", gastoSemanal);

// Ejercicio 20: Conversión de monedas

let cantidadUSD = 1500;

let tasaCambio = 0.94;

let cambioEUR = cantidadUSD * tasaCambio;

console.log("Con ", cantidadUSD, "$ tengo ", cambioEUR, "€");

// Ejercicio 21: Cálculo de descuentos acumulados

let precioInicial = 300;

precioInicial *= 0.8;

//Hice primero precioInicial -=precioInicial*=0.2; 0.8 implica el 80% del precio inicial, que es lo que vale ahora

console.log("Primer precio reducido: ", precioInicial, "€");

precioInicial *= 0.9;

//Hice primero precioInicial -=precioInicial*=0.1; misma razón que la primera reducción

console.log("Segundo precio reducido: ", precioInicial, "€");

// Ejercicio 22: ¿Qué edad tendré en 5 años?

let edadActual = 37;

edadActual += 5;

console.log("Tengo", edadActual, "años. Dentro de 5 años tendré", edadActual, "años");

// Ejercicio 23: Cuota mensual

let deudaTotal = 32000;

let meses = 8;

let cuotaMensual = deudaTotal / meses;

console.log("Tengo una cuota mensual a devolver de", cuotaMensual, "€ al mes durante los próximos", meses, "meses");

// Ejercicio 24: Incremento antes de imprimir

let puntos = 15;

++puntos;

console.log(puntos);

// Ejercicio 25: Decremento después de imprimir

let turnos = 5;

console.log("El final se acerca... ", turnos, "turnos restantes");

console.log("El final se acerta... ", --turnos, "turnos restantes");

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
