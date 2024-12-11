// Ejercicios de Operadores Aritméticos
 //NIVEL FÁCIL
// Ejercicio 1: Suma de productos
const precioProducto1 = 5;
const precioProducto2 = 20;

const sumaProductos = precioProducto1 + precioProducto2;
console.log("El precio de la suma es" , sumaProductos);

// Ejercicio 2: Descuento en una compra
const precioOriginal = 50;
const descuento = 10;

const precioDescuento = precioOriginal - descuento;
console.log("El precio con descuento es de" , precioDescuento);

// Ejercicio 3: Calcula el IVA
const precio = 75;
const iva = 0.21;

const precioIva = precio + (precio * iva);
console.log("El precio total con IVA es de" , precioIva);

// Ejercicio 4: División de la cuenta
const totalCuenta = 225;
const numPersonas = 16;

const divisionCuenta = totalCuenta / numPersonas;
console.log("La división de la cuenta es" , divisionCuenta);

// Ejercicio 5: Resto de una división
const totalChocolates = 32;
const personas = 15;

const chocolates = totalChocolates % personas;
console.log("Los chocolates que sobran son" , chocolates);

// Ejercicio 6: ¿Es un número par?
let numero = 44;

if(numero % 2 === 0) {
    console.log("El 44 es número par");
}

if(numero % 2 === 1) {
    console.log("El número es impar");
}

// Ejercicio 7: Multiplica ingredientes
const cantidadOriginal = 150;
const factorMultiplicacion = 5;

const ingredientes = cantidadOriginal * factorMultiplicacion;
console.log("La cantidad de ingredientes que necesito es" , ingredientes);

// Ejercicio 8: Incremento en la cuenta
let totalAhorros = 840;
totalAhorros += 20;

console.log("El total de ahorros con el incremento es de" , totalAhorros);

// Ejercicio 9: Decremento de una deuda
let deuda = 348;
deuda -= 15;

console.log("La deuda se ha reducido en", deuda);

// Ejercicio 10: Calcula un exponente
const base = 6;
const exponente = 6;

console.log("El resultado de elevar base a exponente es de" , (base ** exponente));

// Ejercicio 11: Reducción de precios
let precioProducto = 54;
precioProducto *= 0.9;

console.log("El precio con descuento se queda en" , precioProducto);

// Ejercicio 12: Resto acumulado
let cantidad = 130;
cantidad %= 30;

console.log("El resto acumulado es" , cantidad);

// Ejercicio 13: Incremento antes del uso
let dias = 12;
console.log("Los días que nos quedan para irnos son" , ++dias);


// Ejercicio 14: Decremento después del uso
let tortillas = 54;
console.log("Se han llevado todas las tortillas que teníamos, ahora solo nos quedan" , --tortillas);

// Ejercicio 15: Ajuste del salario
let salario = 1650;
salario += 0.05;

let  ajusteSalarial = salario += (salario * 0.05);
console.log("El ajuste salarial es de" , ajusteSalarial);


//NIVEL MEDIO
// Ejercicio 16: Calcula el área de un rectángulo
const base1 = 20;
const altura = 14;

const areaRectangulo = base1 * altura;
console.log("El área de un rectángulo es" , areaRectangulo);

// Ejercicio 17: Divide un premio
const premioTotal = 460;
const numGanadores = 12;

const premio = premioTotal / numGanadores;
console.log("Cada uno recibirá" , premio);

// Ejercicio 18: Incremento en el inventario
let inventarioIncremento = 360;
inventarioIncremento += 50;

let incremento  = inventarioIncremento += inventarioIncremento;
console.log("El incremento del inventario es de" , incremento);

// Ejercicio 19: Gasto semanal
const gastoDiario = 34;
const gastoSemanal = gastoDiario * 7;
console.log("El gasto semanal es de" , gastoSemanal);

// Ejercicio 20: Conversión de monedas
const cantidadUSD = 240;
const tasaCambio = 0.94;

const conversion = cantidadUSD * tasaCambio;
console.log("El valor tras la conversión es de" , conversion);

// Ejercicio 21: Cálculo de descuentos acumulados
let precioInicial = 80;
precioInicial *= 0.80;
precioInicial *= 0.90;

console.log("El precio del pantalón con los descuentos quedaría en" , precioInicial);

// Ejercicio 22: ¿Qué edad tendré en 5 años?
let edadActual = 33;
edadActual += 5;

console.log("En 5 años cunpliré" , edadActual , "años");

// Ejercicio 23: Cuota mensual
let deudaTotal = 560;
let meses = 12;

let cuotaMensual = deudaTotal / meses;
console.log("La cuota mensual es" , cuotaMensual);

// Ejercicio 24: Incremento antes de imprimir
let puntos = 10;
console.log("El valor con el incremento es de" , ++puntos);

// Ejercicio 25: Decremento después de imprimir. EXPLICAR.
let turnos = 35;
console.log(turnos , "turnos");

turnos--;
console.log("Después de imprimir los turnos quedan en" , turnos);

// Ejercicio 26: Comprueba divisibilidad por 5
let numeroDivisible = 45;

if(numeroDivisible % 5 === 0) {
    console.log("El 45 es divisible por 5");
} else {
    console.log("El 45 no es divisible por 5");
}
// Ejercicio 27: Saldo restante después de un retiro
let saldo = 843;
let retiro = 286;

let SaldoDespuesDeRetiro = saldo - retiro;
console.log("El saldo que me queda después del retiro es de" , SaldoDespuesDeRetiro);

// Ejercicio 28: Cálculo del perímetro de un cuadrado
let lado = 102;
let perimetro = lado * 4;
console.log("El perímetro de un cuadrado es" , perimetro);

// Ejercicio 29: Conversión de días
let dias1 = 8;
let horas = 24;
let conversionDias = dias1 * horas;
console.log("8 días tienen" , conversionDias , "horas");

// Ejercicio 30: Cálculo de propinas
let cuenta = 280;
let propina = 0.15;
let cantidadPropina = cuenta + (cuenta * propina);

console.log("La cantidad con la propina añadida es" , cantidadPropina);

//NIVEL ALGO MÁS ALTO
// Ejercicio 31: Cálculo del volumen de un cubo
let ladoCubo = 6;
let volumen = ladoCubo ** 3;
console.log("El volumen del cubo es" , volumen);

// Ejercicio 32: Incremento acumulado
let cantidadAhorros = 1200;
cantidadAhorros += cantidadAhorros * 0.10;
cantidadAhorros += cantidadAhorros * 0.10;
cantidadAhorros += cantidadAhorros * 0.10;

console.log("La cantidad con el incremento acumulado es" , cantidadAhorros);

// Ejercicio 33: Conversión de horas a segundos
let horas1 = 18;
let segundos = 3600;
let conversionHorasASegundos = horas1 * segundos;

console.log("La conversión de horas a segundos es" , conversionHorasASegundos);

// Ejercicio 34: Cálculo de salario semanal
let horasTrabajadas = 40;
let pagoPorHora = 13.5;
let salarioSemanal = horasTrabajadas * pagoPorHora;

console.log("El salario semanal es de" , salarioSemanal);

// Ejercicio 35: Decremento acumulado
let peso = 88;
peso -= 2.5;
peso -= 2.5;
peso -= 2.5;
peso -= 2.5;

console.log("El peso acumulado es" , peso);
// Podría ser esta opción también?
//let peso = 88;
//peso -= 2.5 * 4;


// Ejercicio 36: Comprobación de múltiplos
let numeroMultiple = 160;

if(numeroMultiple % 3 === 0) {
    console.log("El" , numeroMultiple , "es múltiplo de 3");
} else {
    console.log("El" , numeroMultiple , "no es múltiplo de 3");
}

// Ejercicio 37: Incremento con decimales
let precioGasolina = 1.43;
precioGasolina += 0.25;
precioGasolina += 0.25;
precioGasolina += 0.25;

console.log("El precio de la gasolina está en" , precioGasolina);

// Ejercicio 38: Calcula el promedio de 5 números
let numero1 = 12;
let numero2 = 4;
let numero3 = 6;
let numero4 = 18;
let numero5 = 20;

let promedio = (numero1 + numero2 + numero3 + numero4 + numero5) / 5;
console.log("El promedio es" , promedio);

// Ejercicio 39: Cálculo del descuento acumulado
let precioInicio = 68;
precioInicio *= 0.70;
precioInicio *= 0.85;

console.log("Con los dos descuentos consecutivos la chaqueta se queda en" , precioInicio , "euros");

// Ejercicio 40: Ajuste de inventario con restos
let inventarioTotal = 1400;
let productosPorCaja = 25;

let inventarioFinal = inventarioTotal / productosPorCaja;
console.log("Los productos que sobran son" , inventarioFinal);

//NIVEL MUY ALTO
// Ejercicio 41: Cálculo del interés compuesto
let capitalInicial = 280;
let tasaIntereses = 0.4;
let periodos = 6;

let montofinal = capitalInicial * ( 1 + tasaIntereses) ** 6;
console.log("El monto final es" , montofinal);

// Ejercicio 42: Incremento y resto en un ciclo. EXPLICAR. 
let numerociclo = 88;
++numerociclo;
++numerociclo;
++numerociclo;
++numerociclo;
++numerociclo;
++numerociclo;
++numerociclo;

let resto = ++numerociclo % 5;
console.log("El resto es" , resto);

// Ejercicio 43: Comparación de superficies. EXPLICAR
let ladoCuadrado = 6;
let radioCirculo = 8;

let areaCuadrado = ladoCuadrado * 2;
let areaCirculo = Math.PI * (radioCirculo ** 2);
console.log("El área del cuadrado es" , areaCuadrado , "el área del círculo es" , areaCirculo);


// Ejercicio 44: Optimización de cajas de productos. EXPLICAR
let productosTotales = 63;
let capacidadCaja = 12;
let cajasCompletas = Math.ceil(productosTotales / capacidadCaja);

console.log("Las cajas completas son" , cajasCompletas);

// Ejercicio 45: Ahorro acumulado con bonificaciones

// Ejercicio 46: Comprobación de divisibilidad múltiple

// Ejercicio 47: Ajuste del precio con IVA y descuento

// Ejercicio 48: Cálculo del promedio ponderado

// Ejercicio 49: Cálculo de la raíz cúbica aproximada

// Ejercicio 50: Ajuste salarial acumulativo
