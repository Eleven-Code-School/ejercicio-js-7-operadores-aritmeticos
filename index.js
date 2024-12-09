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
let numero1 = 20;
let numero2 = 12;
let numero3 = 7;
let numero4 = 68;
let numero5 = 9;
const promedioNumeros = (numero1 + numero2 + numero3 + numero4 + numero5) / 5;

console.log("El Promedio resultante de los 5 numeros es de:", promedioNumeros);

// Ejercicio 39: Cálculo del descuento acumulado
let precioInicialEx39 = 40;
precioInicialEx39 *= 0.70;
precioInicialEx39 *= 0.85;

console.log("El Resultante del descuento tras aplicarle el 30 y 15 porciento de descuento es de:", precioInicialEx39);

// Ejercicio 40: Ajuste de inventario con restos
let inventarioTotal = 600;
let productosPorCaja = 4;

let productosSueltos = inventarioTotal % productosPorCaja;

if (productosSueltos > 0) {
    console.log("Ninguno de los Productos se quedara fuera de las cajas");
} else {
    console.log("Hay un total de:", productosSueltos, "productos que no podran meterse en cajas");
}
// Ejercicio 41: Cálculo del interés compuesto
let capitalInicial = 155000;
let tasaDeInteres = 0.01;
let periodos = 40;
let montoFinal = capitalInicial * (++tasaDeInteres) ** periodos;

console.log("El monto final es de:", montoFinal.toFixed(2));

// Ejercicio 42: Incremento y resto en un ciclo
let numeroDelEjercicio42 = 42;

numeroDelEjercicio42 = ++numeroDelEjercicio42;
numeroDelEjercicio42 = ++numeroDelEjercicio42;
numeroDelEjercicio42 = ++numeroDelEjercicio42;
numeroDelEjercicio42 = ++numeroDelEjercicio42;
numeroDelEjercicio42 = ++numeroDelEjercicio42;
numeroDelEjercicio42 = ++numeroDelEjercicio42;
numeroDelEjercicio42 = ++numeroDelEjercicio42;

numeroDelEjercicio42 %= 5

console.log("El resto sobrante del ejercicio 42 es de:", numeroDelEjercicio42);

// Ejercicio 43: Comparación de superficies
let ladoDelCuadrado = 7;
let radioDelCirculo = 7;

let areaDelCuadrado = ladoDelCuadrado ** 2;
let areaDelCirculo = Math.PI * radioDelCirculo ** 2;

if (areaDelCuadrado / areaDelCirculo >= 1) {
    if (areaDelCuadrado / areaDelCirculo === 1) {
        console.log("El area del circulo y el area del cuadrado son iguales");
    } else {
        console.log("El area del cuadrado es Mayor que la de el circulo");
    }
} else {
    console.log("El area del circulo es mayor que la del cuadrado");
}

// Ejercicio 44: Optimización de cajas de productos
let productosTotales = 404;
const capacidadCaja = 4;
let numeroDeCajasNecesarias = (productosTotales / capacidadCaja);

if ((productosTotales % capacidadCaja) === 0) {
    console.log("El numero de cajas que se necesitaran para almacenar todos los productos será de", numeroDeCajasNecesarias, "cajas");
} else {
    console.log("El numero de cajas que se necesitaran para almacenar todos los productos será de", Math.ceil(numeroDeCajasNecesarias), "cajas");
}

// Ejercicio 45: Ahorro acumulado con bonificaciones
let montoAhorro = 10;
let bonificacion = montoAhorro * 0.1;
montoAhorro += bonificacion;
montoAhorro += bonificacion;
montoAhorro += bonificacion;
montoAhorro += bonificacion;
montoAhorro += bonificacion;

console.log("El ahorro acumulado despues de aplicar 5 bonificaciones consecutivas sera de",montoAhorro);

// Ejercicio 46: Comprobación de divisibilidad múltiple
const numeroEjercicio46 = 240;

if ((numeroEjercicio46 % 4 === 0) && (numeroEjercicio46 % 6 === 0)) {
    console.log("El numero", numeroEjercicio46, "es divisible tanto por 4 como por 6");
} else {
    console.log("El numero", numeroEjercicio46, "no es divisible tanto por 4 como por 6");
}
// Ejercicio 47: Ajuste del precio con IVA y descuento
let precioInicialEjercicio47 = 10;
let ivaEjercicio47 = 0.21;
let descuentoEjercicio47 = 0.1;
const precioFinalDelProducto = precioInicialEjercicio47 + (precioInicialEjercicio47 * ivaEjercicio47) - ((precioInicialEjercicio47 + (precioInicialEjercicio47 * ivaEjercicio47)) * descuentoEjercicio47);

console.log("Precio Inicial del producto:", precioInicialEjercicio47);
console.log("Iva para el producto:", (precioInicialEjercicio47 * ivaEjercicio47));
console.log("Descuento para ese producto:", ((precioInicialEjercicio47 + (precioInicialEjercicio47 * ivaEjercicio47)) * descuentoEjercicio47));

console.log("El precio final del producto despues de aplicarle el iva y el descuento es de", precioFinalDelProducto);

// Ejercicio 48: Cálculo del promedio ponderado
let nota1 = 6;
let nota2 = 8;
let nota3 = 10;

let peso1 = 12;
let peso2 = 16;
let peso3 = 20;

promedio = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) / (peso1 + peso2 + peso3);

console.log("El promedio Ponderado entre las notas y el peso es de", promedio);

// Ejercicio 49: Cálculo de la raíz cúbica aproximada
let numeroEjercicio49 = 80;

numeroEjercicio49 /= 3;
numeroEjercicio49 /= 3;
numeroEjercicio49 /= 3;
numeroEjercicio49 /= 3;
numeroEjercicio49 /= 3;

console.log("La raiz cubica es de ", numeroEjercicio49, "aproximadamente");

numeroEjercicio49 = 80;
let raizCubica = Math.cbrt(numeroEjercicio49);


console.log("La raiz cúbica del numero", numeroEjercicio49, "es de", raizCubica);


// Ejercicio 50: Ajuste salarial acumulativo
