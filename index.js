// Ejercicios de Operadores Aritméticos

// Ejercicio 1: Suma de productos

let precioProducto1 = 34;

let precioProducto2 = 25;

const precioTotal = precioProducto1 + precioProducto2;

console.log("El precio total es de", precioTotal);

if(precioTotal >= 100) {
    console.log("Que lo compre su prima")
} else {;
    console.log("Me lo puedo permitir")
}
// Ejercicio 2: Descuento en una compra

let precioOriginal = 26;

let descuento = 5;

const precioFinal = precioOriginal - descuento;

console.log("El producto queda rebajado a", precioFinal);
// Ejercicio 3: Calcula el IVA

let precio = 73;
let iva = 21;

// Cálculo del precio total incluyendo el IVA
const precioTotalConIva = precio * (1 + iva / 100);

console.log("El precio total con el iva es del", precioTotalConIva);
// Ejercicio 4: División de la cuenta

let totalCuenta = 134;

let numPersonas = 3;

const divisionDeLaCuenta = totalCuenta / numPersonas;

console.log("Cada uno toca a", divisionDeLaCuenta);
// Ejercicio 5: Resto de una división

let totalChocolates = 38;

let personas = 5;

const chocolatesQueSobran = totalChocolates % personas;

console.log("Sobran la cantidad de", chocolatesQueSobran, "chocolates");

// Ejercicio 6: ¿Es un número par?

const numero = 44;

console.log("El número", numero);

if(numero % 2 === 0) {
    console.log("Es par")
} else {
    console.log("Es impar")
};
// Ejercicio 7: Multiplica ingredientes

const cantidadOriginal = 345; 

let factorMultiplicacion = 2;

let cantidadFinal = cantidadOriginal * factorMultiplicacion;

console.log("La cantidad de ingredientes si los duplico es de", cantidadFinal);

factorMultiplicacion = 3;

cantidadFinal = cantidadOriginal * factorMultiplicacion;

console.log("La cantidad de los ingredientes ahora es", cantidadFinal);
// Ejercicio 8: Incremento en la cuenta

let totalAhorros = 2050; 

totalAhorros += 10;

console.log("Los ahorros de estos ultimos años ascienden a", totalAhorros);

// Ejercicio 9: Decremento de una deuda

let deuda = 102783;

deuda -= 15;

console.log("La deuda es un total de", deuda, "euros");

// Ejercicio 10: Calcula un exponente

let base = 40; 

let exponente = 4;

const numeroFinalTrasExponente = base ** exponente;

console.log("Queda en", numeroFinalTrasExponente);

// Ejercicio 11: Reducción de precios

let precioProducto = 345;

precioProducto *= 0.9;

console.log ("El precio final tras el descuento es de", precioProducto);

// Ejercicio 12: Resto acumulado

let cantidad = 346;

cantidad %= 3;

console.log("El resto acumulado es", cantidad);

// Ejercicio 13: Incremento antes del uso


let dias = 14;

console.log("El incremento del uso de dias es de", ++dias);

// Ejercicio 14: Decremento después del uso

let cantidadDecremento = 25;

console.log("Ahora no se vera el decremento, hasta despues de mostrar el resultado", cantidadDecremento--);

// Ejercicio 15: Ajuste del salario

let salario = 1345;

salario += salario * 0.05;

console.log("El salario actualizado sera de", salario);// Ejercicio 16: Calcula el área de un rectángulo

// Ejercicio 16: Clacula el área de un rectángulo

let baseDeUnRectangulo = 25;

let alturaDeUnRectangulo = 16;

let area = baseDeUnRectangulo * alturaDeUnRectangulo;

console.log("El area del rectangulo es de", area);

// Ejercicio 17: Divide un premio

let premioTotal = 14567;

let numGanadores = 4;

premioCaadaUno = premioTotal / numGanadores;

console.log("Cada uno de los ganadores toca a", premioCaadaUno);
// Ejercicio 18: Incremento en el inventario

let inventario = 35;

inventario += inventario;

console.log("El incremento del inventario se queda en", inventario);

// Ejercicio 19: Gasto semanal

let gastoDiario = 89;

let gastoSemanal = gastoDiario * 7;

console.log("El gasto semanal es de", gastoSemanal);
// Ejercicio 20: Conversión de monedas


let cantidadUSD = 3456; 

let tasaCambio = 0.7;

let cantidadGBP = cantidadUSD * tasaCambio;

console.log("La cantidad que obtienes en libras es de", cantidadGBP);

// Ejercicio 21: Cálculo de descuentos acumulados

let precioInicial = 345;

precioInicial *= 0.8;

console.log("El precio tras el primer descuento sera", precioInicial);


precioInicial *= 0.9;

console.log("El precio final sera de",precioInicial);

// Ejercicio 22: ¿Qué edad tendré en 5 años?

let edadActual = 30;

edadActual += 5;

console.log("Mi edad en cinco años sera de", edadActual);

// Ejercicio 23: Cuota mensual

let deudaTotal = 3409;

let meses = 5;

let deudaMensual = deudaTotal / meses;

console.log("La deuda a pagar cada mes restante es de", deudaMensual);

// Ejercicio 24: Incremento antes de imprimir

let puntos = 5;

console.log("Los puntos que me van a dar son un total de", ++puntos);

// Ejercicio 25: Decremento después de imprimir

let turnos =7;

console.log("Me quedan un totral de", turnos--);

// Ejercicio 26: Comprueba divisibilidad por 5

let numeroDivisible = 3455;

numeroDivisible %= 5;

console.log("Este numero divido entre 5 da de resto", numeroDivisible);

// Ejercicio 27: Saldo restante después de un retiro

let saldo = 45;

let retiro = 23;

let saldoRestante = saldo - retiro;

console.log("Me quedan un total de", saldoRestante, "peniques");

// Ejercicio 28: Cálculo del perímetro de un cuadrado

let lado = 7;

let perimetro = lado * 4;

console.log("El cuadrado tiene un perimetro de", perimetro);

// Ejercicio 29: Conversión de días

let diasQueLlevoSinBeber = 56;

let horasQueLlevoSinBeber = diasQueLlevoSinBeber * 24;

console.log("Lleo un total de", horasQueLlevoSinBeber, "horas sin probar alcohol");

// Ejercicio 30: Cálculo de propinas

let cuenta = 789;

let propina = cuenta * 0.15;

let cuentaTotal = cuenta + propina;

console.log("El total de la cuenta asciende a", cuentaTotal);

// Ejercicio 31: Cálculo del volumen de un cubo

let ladoVolumen = 78;

let volumen = ladoVolumen ** 3;

console.log("El volumen es igual a", volumen);

// Ejercicio 32: Incremento acumulado

let montoAhorros = 100;

montoAhorros += montoAhorros * 0.1;
montoAhorros += montoAhorros * 0.1;
montoAhorros += montoAhorros * 0.1;

console.log("El ahorro al finalizar sera de", montoAhorros);

// Ejercicio 33: Conversión de horas a segundos

let horasConverse = 45;

let horaToSeconds = horasConverse * 3600;

console.log("45 horas es lo mismo que", horaToSeconds, "segundos");

// Ejercicio 34: Cálculo de salario semanal

let horasTrabajadas = 567;

let pagoPorHora = 12;

let salarioSemanal = horasTrabajadas * pagoPorHora;

console.log("El computo total semanal es de", salarioSemanal);

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
