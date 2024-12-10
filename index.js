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

const precioConIva = (precioOriginal * iva) + precioOriginal;

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
	console.log("El número", numero, "es un número par");
} else {
	console.log("El número", numero, "es un número impar");
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

precioProducto3 *= 0.9;

//El 0.9 viene de que el 0.1 sería el 10% descuento.

console.log("Precio reducido: ", precioProducto3, "€");

// Ejercicio 12: Resto acumulado

let cantidad = 5;

cantidad %= 3;

console.log("Resto acumulado: ", cantidad);

// Ejercicio 13: Incremento antes del uso

let dias = 2;

dias = ++dias;

console.log("Incremento de días: ", dias);

// Ejercicio 14: Decremento después del uso

cantidad = 44;

console.log("Cantidad actual: ", cantidad--);

console.log("Cantidad reduciéndose: ", cantidad--);

console.log("Cantidad reduciéndose: ", cantidad--);

console.log("Cantidad reduciéndose: ", cantidad);

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

console.log("Dentro de 5 años tendré", edadActual, "años");

// Ejercicio 23: Cuota mensual

let deudaTotal = 32000;

let meses = 8;

let cuotaMensual = deudaTotal / meses;

console.log("Tengo una cuota mensual a devolver de", cuotaMensual, "€ al mes durante los próximos", meses, "meses");

// Ejercicio 24: Incremento antes de imprimir

let puntos = 15;

++puntos;

console.log("He acumulado", puntos, "puntos");

// Ejercicio 25: Decremento después de imprimir

let turnos = 5;

console.log("Date prisa, quedan", turnos--, "turnos");

console.log("El final se acerca... ", turnos, "turnos restantes");

// Ejercicio 26: Comprueba divisibilidad por 5

numero = 32;

if (numero % 5 === 0) {
	console.log("El número", numero, "es múltiplo de 5");
} else {
	console.log("El número", numero, "no es múltiplo de entre 5");
}

// Ejercicio 27: Saldo restante después de un retiro

let saldo = 5000;

let retiro = 400;

let nuevoSaldo = saldo - retiro;

console.log("Tras retirar", retiro, "€, el saldo disponible es de", nuevoSaldo, "€");

// Ejercicio 28: Cálculo del perímetro de un cuadrado

let lado = 5;

let perimetroCuadrado = lado * 4;

console.log("Con", lado, "metros de lado, este cuadrado tiene un perímetro de", perimetroCuadrado, "metro");

// Ejercicio 29: Conversión de días

dias = 365;

let diasAHoras = dias * 24;

console.log("En", dias, "hay", diasAHoras, "horas");

// Ejercicio 30: Cálculo de propinas

let cuenta = 200;

let propina = cuenta * 0.15;

let cuentaFinal = cuenta + propina;

console.log("La cuenta final con  propina es de", cuentaFinal, "€");

// Ejercicio 31: Cálculo del volumen de un cubo

lado = 4;

let volumenCubo = lado ** 3;

console.log("Con", lado, "metros de lado, el volumen del cubo es de", volumenCubo, "m3");

// Ejercicio 32: Incremento acumulado

let montoAhorros = 1000;

montoAhorros += montoAhorros * 0.1;

console.log("Mis ahorros han aumentado a: ", montoAhorros, "€");

montoAhorros += montoAhorros * 0.1;

console.log("Mis ahorros han aumentado a: ", montoAhorros, "€");

montoAhorros += montoAhorros * 0.1;

console.log("Mis ahorros han aumentado a: ", montoAhorros, "€");

// Ejercicio 33: Conversión de horas a segundos

let horas = 24;

let horasASegundos = horas * 3600;

console.log("En", horas, "horas hay", horasASegundos, "segundos");

// Ejercicio 34: Cálculo de salario semanal

let horasTrabajadas = 40;

let pagoPorHora = 15;

let cobroMensual = horasTrabajadas * pagoPorHora;

console.log("Esta semana voy a cobrar", cobroMensual, "€");

// Ejercicio 35: Decremento acumulado

let peso = 106;

peso -= 2.5;

console.log("Ahora estoy en", peso, "kilos");

peso -= 2.5;

console.log("Ahora estoy en", peso, "kilos");

peso -= 2.5;

console.log("Ahora estoy en", peso, "kilos");

peso -= 2.5;

console.log("Ahora estoy en", peso, "kilos");

// Ejercicio 36: Comprobación de múltiplos

numero = 81;

if (numero % 3 === 0) {
	console.log("El número", numero, "es múltiplo de 3");
} else {
	console.log("El número", numero, "no es múltiplo de 3");
}

// Ejercicio 37: Incremento con decimales

let precioGasolina = 1.04;

console.log("El precio inicial de la gasolina es de", precioGasolina, "€ por litro");

precioGasolina += 0.25;

console.log("El precio de la gasolina a subido a", precioGasolina, "€");

precioGasolina += 0.25;

console.log("El precio de la gasolina a subido a", precioGasolina, "€");

precioGasolina += 0.25;

console.log("El precio de la gasolina a subido a", precioGasolina, "€");

// Ejercicio 38: Calcula el promedio de 5 números

let numero1 = 26;

let numero2 = 84;

let numero3 = 9;

let numero4 = 45;

let numero5 = 61;

let promedio = (numero1 + numero + numero3 + numero4 + numero5) / 5;

console.log("El promedio entre estos 5 números es de", promedio);

// Ejercicio 39: Cálculo del descuento acumulado

precioInicial = 100;

console.log("El precio de este producto es de", precioInicial, "€");

precioInicial *= 0.7;

console.log("El precio rebajado del producto es de", precioInicial, "€");

precioInicial *= 0.85;

console.log("El precio rebajado del producto ahora es de", precioInicial, "€");

// Ejercicio 40: Ajuste de inventario con restos

let inventarioTotal = 3480;

let productosPorCaja = 73;

let productosSobrantes = inventarioTotal % productosPorCaja;

console.log("Tras las ventas han sobrado", productosSobrantes, "productos");

// Ejercicio 41: Cálculo del interés compuesto

let capitalInicial = 20000;

let tasaInteres = 1.3;

let periodos = 2;

let montoFinal = capitalInicial * Math.pow((1 + tasaInteres) ** periodos);

console.log(montoFinal);

//ESTE NO LO PILLO

// Ejercicio 42: Incremento y resto en un ciclo

numero = 62;

console.log(++numero);
console.log(++numero);
console.log(++numero);
console.log(++numero);
console.log(++numero);
console.log(++numero);
console.log(++numero);

let restoNumero = numero % 5;

console.log("El resto es ", restoNumero);

// Ejercicio 43: Comparación de superficies

let ladoCuadrado = 4;

let areaCuadrado = ladoCuadrado ** 2;

let radioCirculo = 3;

let areaCirculo = radioCirculo ** 2 * Math.PI;

console.log(areaCirculo);
if (areaCuadrado > areaCirculo) {
	console.log(
		"Si el cuadrado tiene",
		ladoCuadrado,
		"metros de lado y el círculo",
		radioCirculo,
		"metros de radio, el área del cuadrado es mayor que la del círculo"
	);
} else {
	console.log(
		"Si el cuadrado tiene",
		ladoCuadrado,
		"metros de lado y el círculo",
		radioCirculo,
		"metros de radio, el área del círculo es mayor que la del cuadrado"
	);
}

// Ejercicio 44: Optimización de cajas de productos

let productosTotales = 93;

let capacidadCaja = 8;

let numeroCajasNecesarias = productosTotales / capacidadCaja;

console.log("Necesitamos", Math.round(numeroCajasNecesarias), "cajas para guardar todos los productos");

// Ejercicio 45: Ahorro acumulado con bonificaciones

let montoAhorro = 1300;

let bonificacion = 0.1;

montoAhorro += montoAhorro * bonificacion;

console.log(montoAhorro);

montoAhorro += montoAhorro * bonificacion;

console.log(montoAhorro);

montoAhorro += montoAhorro * bonificacion;

console.log(montoAhorro);

montoAhorro += montoAhorro * bonificacion;

console.log(montoAhorro);

montoAhorro += montoAhorro * bonificacion;

console.log("El ahorro acumulado es de:", montoAhorro, "€");

// Ejercicio 46: Comprobación de divisibilidad múltiple

numero = 48;

if (numero % 4 === 0 && numero % 6 === 0) {
	console.log("El número", numero, "es múltiplo de 4 y de 6");
} else {
	console.log("El número", numero, "no es múltiplo de 4 y de 6");
}

// Ejercicio 47: Ajuste del precio con IVA y descuento

precioInicial = 1540;

iva = 0.21;

let ivaAplicado = precioInicial * iva;

descuento = 0.1;

let descuentoAplicado = precioInicial * descuento;

let precioFinal = precioInicial + ivaAplicado - descuentoAplicado;

console.log("El precio tras aplicar IVA y descuentos es de", precioFinal, "€");

// Ejercicio 48: Cálculo del promedio ponderado

// El valor del peso es sobre una nota de 10. Ej: un peso de 0.2 es un 20% sobre los 10 puntos de la nota final.

let nota1 = 9;
let nota2 = 4;
let nota3 = 8.5;

let peso1 = 0.2;
let peso2 = 0.5;
let peso3 = 0.3;

let promedioPonderado = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3);

console.log("La nota final tras realizar el promedio ponderado entre las evaluaciones es de", promedioPonderado);

// Ejercicio 49: Cálculo de la raíz cúbica aproximada

//Dudo del enunciado de este ejercicio

numero = 729;



// Ejercicio 50: Ajuste salarial acumulativo

salarioInicial = 1200;

let aumentoMensual = salarioInicial * 0.03;

salarioAumentado = salarioInicial += aumentoMensual;

console.log(salarioAumentado);

aumentoMensual;

console.log(salarioAumentado);


