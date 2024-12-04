// Ejercicios de Operadores Aritméticos

// Ejercicio 1: Suma de productos
const precioProducto1 = 5;
const precioProducto2 = 10;
const resultadoEjercicio1 = precioProducto1 + precioProducto2;

console.log("El resultado de la suma de los dos productos es:", resultadoEjercicio1);

// Ejercicio 2: Descuento en una compra
const precioOriginal = 30;
const descuento = 5;
const resultadoDelEjercicio2 = precioOriginal - descuento;

console.log("El producto con el descuento aplicado costaria:", resultadoDelEjercicio2);

// Ejercicio 3: Calcula el IVA
const precioSinIva = 25;
const iva = 21 / 100;
const ivaDelProducto = precioSinIva * iva;
const precioConIva = ivaDelProducto + precioSinIva;

console.log("El Precio del producto con el iva incluido seria de:", precioConIva);

// Ejercicio 4: División de la cuenta
const totalCuenta = 225;
const numeroDePersonas = 4;
const pagoPorPersona = totalCuenta / numeroDePersonas;

console.log("El precio a pagar por persona es de:", pagoPorPersona);

// Ejercicio 5: Resto de una división
const totalOnzasDeChocolate = 14;
const totalPersonasQueQuierenChocolate = 3;
const onzasDeChocolateRestantes = totalOnzasDeChocolate % totalPersonasQueQuierenChocolate;

console.log("Las onzas de chocolate que sobran despues de repartirlo equitativamente han sido de:", onzasDeChocolateRestantes);

// Ejercicio 6: ¿Es un número par?
const numero = 7;

if ((numero % 2) === 0) {
    console.log("El numero resultante es par:", numero);
} else {
    console.log("El numero resultante es inpar:", numero);
}

// Ejercicio 7: Multiplica ingredientes
let numeroDeRecetas = 4;

const ingrediente1 = 20 * numeroDeRecetas;
const ingrediente2 = 35 * numeroDeRecetas;
const ingrediente3 = 4 * numeroDeRecetas;
const ingrediente4 = 21 * numeroDeRecetas;
const cantidadObtenida = ingrediente1 + ingrediente2 + ingrediente3 + ingrediente4;

console.log("El numero de ingredientes no variara dependiendo de si aumentas la cantidad en la receta xD, pero su cantidad maxima resultante si:", cantidadObtenida);

// Ejercicio 8: Incremento en la cuenta
let totalAhorros = 40;
totalAhorros += 10;
totalAhorros += 10;
totalAhorros += 10;

console.log("al final del mes he conseguido un ahorro de:", totalAhorros);

// Ejercicio 9: Decremento de una deuda
let deuda = 200;
deuda -= 15;
deuda -= 15;
deuda -= 15;

console.log("Con lo pagado durante el mes mi deuda esta quedando en :", deuda);

// Ejercicio 10: Calcula un exponente
const base = 2;
let exponente = 3;
const resultadoejercicio10 = base ** exponente;

console.log("El resultado de elevar la base a un exponente es de:", resultadoejercicio10);

// Ejercicio 11: Reducción de precios
let precioProducto = 70;
precioProducto *= 0.9; // Aqui estoy calculando el 90% del precio original 

console.log("El producto con su descuenta aplicado es de", precioProducto);

// Ejercicio 12: Resto acumulado
let cantidad = 200;
cantidad %= 3;

console.log("El resto de una cantidad al dividirlo por 3 es de:", cantidad);

// Ejercicio 13: Incremento antes del uso
let dias = 7;
dias = ++dias;
dias = ++dias;
dias = ++dias;
dias = ++dias;

console.log("El resultado del ejercicio 13 es de:", dias, "dias");

// Ejercicio 14: Decremento después del uso
let cantidadEx14 = 50;
console.log("El resultado del ejercicio 14 es de:", cantidadEx14);
console.log("El resultado del ejercicio 14 es de:", cantidadEx14--);
console.log("El resultado del ejercicio 14 es de:", cantidadEx14--);
console.log("El resultado del ejercicio 14 es de:", cantidadEx14--);
console.log("El resultado del ejercicio 14 es de:", cantidadEx14--);

// Ejercicio 15: Ajuste del salario
let salario = 1540;
salario *= 1.05;

console.log("El salario se incrementara si le aplicamos un 5 porciento hasta un total de:", salario);

// Ejercicio 16: Calcula el área de un rectángulo
let baseDelRectangulo = 2;
let alturaDelRectangulo = 5;
const areaDelRectangulo = baseDelRectangulo * alturaDelRectangulo;

console.log("El area del rectangulo es:", areaDelRectangulo + "m²");

// Ejercicio 17: Divide un premio
let premioTotal = 72;
let numeroDeGanadores = 12;
const premioPorGanador = premioTotal / numeroDeGanadores;

console.log("El premio que recibira cada Ganador es de:", premioPorGanador);

// Ejercicio 18: Incremento en el inventario
let inventario = 200;
inventario += 50;

console.log("El inventario inicial de 200 al sumarle 50 resulta en:", inventario);

// Ejercicio 19: Gasto semanal
let gastoDiario = 4;
const gastoSemanal = gastoDiario * 7;

console.log("El gasto semanal sera de:", gastoSemanal);

// Ejercicio 20: Conversión de monedas
let cantidadUSD = 70;
let tasaDeCambio = 0.6;
const cantidadConLaTasaIncluida = cantidadUSD * tasaDeCambio;

console.log("La cantidad resultante aplicandole la tasa de cambio es de:", cantidadConLaTasaIncluida + "$");

// Ejercicio 21: Cálculo de descuentos acumulados
let precioInicial = 90;
precioInicial *= 0.8;
precioInicial *= 0.9;

console.log("El precio resultante tras aplicarle los dos descuentos '20%' y '10%' es de:", precioInicial);

// Ejercicio 22: ¿Qué edad tendré en 5 años?
let edadActual = 31;
edadActual += 5;

console.log("La edad inicial tras pasar 5 años sera de:", edadActual);

// Ejercicio 23: Cuota mensual
let deudaTotal = 8000;
let numeroDeMeses = 24;
const pagoPorMeses = deudaTotal / numeroDeMeses;

console.log("El pago mensual por la deuda será de:", pagoPorMeses);

// Ejercicio 24: Incremento antes de imprimir
let puntos = 40;
puntos = ++puntos;

console.log("El resultado del ejercicio 24 es de:", puntos);

// Ejercicio 25: Decremento después de imprimir
let puntosDelEjercicio25 = 30;

console.log("Los puntos antes del decremento es de:", puntosDelEjercicio25);

puntosDelEjercicio25 = --puntosDelEjercicio25;

console.log("Los puntos despues del decremento son de:", puntosDelEjercicio25);

// Ejercicio 26: Comprueba divisibilidad por 5
let numeroDelEjercicio26 = 327;

if (numeroDelEjercicio26 % 5 == 0) {
    console.log("El numero es divisible entre 5.", "numero:", numeroDelEjercicio26);

} else {
    console.log("El numero no es divisible entre 5.", "numero:", numeroDelEjercicio26);
}
// Ejercicio 27: Saldo restante después de un retiro
let saldo = 200;
let retiro = 20;
saldo -= retiro;

console.log("El saldo restante despues del retiro es de:", saldo);

// Ejercicio 28: Cálculo del perímetro de un cuadrado
let lado = 25;
const perimetroDeUnCuadrado = lado * 4;

console.log("El perimetro del cuadrado es de:", perimetroDeUnCuadrado);

// Ejercicio 29: Conversión de días
let totalDeDias = 46;
let horasEnUnDia = 24;
let diasReflejadosEnHoras = totalDeDias * horasEnUnDia;

console.log("El numero de horas totales segun los dias es de:", diasReflejadosEnHoras);

// Ejercicio 30: Cálculo de propinas
let cuentaSinPropina = 70;
let propina = cuentaSinPropina * (15 / 100);
let cuentaConPropina = cuentaSinPropina + propina;

console.log("La cuenta resultante tras añadir la propina es de:", cuentaConPropina);

// Ejercicio 31: Cálculo del volumen de un cubo
let ladoDeUnCubo = 5
let volumenDeUnCubo = ladoDeUnCubo ** 3;

console.log("El volumen del cubo sera de:", volumenDeUnCubo) + "m³";

// Ejercicio 32: Incremento acumulado
let montoDeAhorros = 10;
montoDeAhorros *= 1.1;
montoDeAhorros *= 1.1;
montoDeAhorros *= 1.1;

console.log("El monto resultante tras incrementar su valor 3 veces un 10% es de:", montoDeAhorros);

// Ejercicio 33: Conversión de horas a segundos
let horasEnTotal = 4;
let segundosEnUnHora = 3600;
let totalDeHorasEnSegundos = horasEnTotal * segundosEnUnHora;

console.log("El numero de horas totales reflejados en segundos es de:", totalDeHorasEnSegundos);

// Ejercicio 34: Cálculo de salario semanal
let horasTrabajadas = 40;
const pagoPorHora = 7.5;
let pagoSemanal = horasTrabajadas * pagoPorHora;

console.log("El pago semanal segun las horas trabajadas es de:", pagoSemanal);

// Ejercicio 35: Decremento acumulado
let pesoInicial = 70;
let perdidaPesoSemanal = 2.5;
let numeroDeSemanasTranscurridas = 4;
let pesoFinal = pesoInicial - (perdidaPesoSemanal * numeroDeSemanasTranscurridas);

console.log("Solucion-1: El peso final tras 4 semanas perdiendo peso es de:", pesoFinal);

pesoInicial -= 2.5 * 4;

console.log("Solucion-2 El peso final tras 4 semanas perdiendo peso es de:", pesoInicial);

// Ejercicio 36: Comprobación de múltiplos
let numeroDelEjercicio36 = 225;

if (numeroDelEjercicio36 % 3 == 0) {
    console.log("El numero:", numeroDelEjercicio36, "es multiplo de 3, puesto que al dividilo entro 3 el resto es 0");
} else {
    console.log("El numero:", numeroDelEjercicio36, "No es multiplo de 3");
}
// Ejercicio 37: Incremento con decimales
let precioGasolina = 42.20;
precioGasolina += 0.25;
precioGasolina += 0.25;
precioGasolina += 0.25;

console.log("El precio de la gasolina tras aumentarle 0.25 tres veces consecutivas es de:", precioGasolina);

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
