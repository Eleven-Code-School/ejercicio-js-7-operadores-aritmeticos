// Ejercicios de Operadores Aritméticos

// Ejercicio 1: Suma de productos

    const a = 3;
    const b = 2;

    let x = a + b;

    console.log("1 = ", x);

// Ejercicio 2: Descuento en una compra

    const precio = 10;
    const descuento = 1;

    let x2 = precio - descuento;

    console.log("2 = ", x2);
    

// Ejercicio 3: Calcula el IVA

    // let iva = (precio * 21) / 100;
    let iva = precio * 0.21;

    console.log("3 = ", iva);
    

// Ejercicio 4: División de la cuenta

    const personas = 4;

    let totalcuenta = precio / personas;

    console.log("4 = cada uno pagará : ", totalcuenta);
    

// Ejercicio 5: Resto de una división

    let sobrante = precio % personas;

    console.log("5 = ", sobrante);
    
// Ejercicio 6: ¿Es un número par?

    let paroimpar = precio % 2;

    if (paroimpar === 0) {
        console.log("6 = PAR");
        
    } else {
        console.log("6 = IMPAR");
    }

// Ejercicio 7: Multiplica ingredientes

    let x3 = a * b;

    console.log("7 = ", x3);
    

// Ejercicio 8: Incremento en la cuenta

    let totalAhorros = 10;
    totalAhorros += 10;

    console.log("8 = ", totalAhorros);
    

// Ejercicio 9: Decremento de una deuda

    totalAhorros -= 7;

    console.log("9 = ",totalAhorros);
    

// Ejercicio 10: Calcula un exponente

    const var1 = 3.12;
    const var2 = 7.32;

    let exponencial = var1 ** var2;

    console.log("10 = ",exponencial);

// Ejercicio 11: Reducción de precios

    let precioFinal = 10;
    precioFinal *= 0.9;

    console.log("11 = Precio final es: ",precioFinal);
    
// Ejercicio 12: Resto acumulado

    precioFinal %= 3;

    console.log("12 = y nos sobra ",precioFinal,"!!!");

// Ejercicio 13: Incremento antes del uso

    ++precioFinal;

    console.log("13 = ", precioFinal);
    
// Ejercicio 14: Decremento después del uso

    --precioFinal;

    console.log("14 = ", precioFinal);

// Ejercicio 15: Ajuste del salario

    let salario = 1200;

    salario *= 1.05;

    console.log("15 = ", salario);
    

// Ejercicio 16: Calcula el área de un rectángulo

    const base = 10;
    const altura = 2.5;

    let area = base * altura;

    console.log("16 = El area es de",area,"m2");

// Ejercicio 17: Divide un premio

    const premio = 3000;
    const jugadores = 12;

    let cada = premio / jugadores;

    console.log("17 = A cada uno le tocan", cada, "€.");

// Ejercicio 18: Incremento en el inventario

    let inventario = 100;
    inventario += 50;

    console.log("18 =Total inventario:", inventario);

// Ejercicio 19: Gasto semanal

    let gastoSemanal = precio * 7;

    console.log("19 = El gasto es de",gastoSemanal,"€");
    

// Ejercicio 20: Conversión de monedas

    const tasaCambio = 0.08;

    let conversion = precio * tasaCambio;

    console.log("20 = La tasa es de", conversion);

// Ejercicio 21: Cálculo de descuentos acumulados

    let precioInicial = 23.99;

    precioInicial *=0.8;
    precioInicial *=0.9;

    console.log("21 = descuento acumulado", precioInicial);

// Ejercicio 22: ¿Qué edad tendré en 5 años?

    let edad = 38;

    edad += 5;

    console.log("22 = Dentro de 5 años tendre",edad,"años.");

// Ejercicio 23: Cuota mensual

    const deuda = 9891;
    const meses = 12;

    let cuotaMensual = deuda / meses;

    console.log("23 = ",cuotaMensual,"€ al mes.");

// Ejercicio 24: Incremento antes de imprimir

    ++cuotaMensual;

    console.log("24 =",cuotaMensual,"€ al mes.");


// Ejercicio 25: Decremento después de imprimir

    --cuotaMensual;

    console.log("25 =",cuotaMensual,"€ al mes.");

// Ejercicio 26: Comprueba divisibilidad por 5

    let divisibilidad = cuotaMensual / 5;

    if (divisibilidad === 0) {
        console.log("26 = El numero anterior SI es divisible entre 5");
        
    } else {
        console.log("26 = El numero anterior NO es divisible entre 5");
        
    }

// Ejercicio 27: Saldo restante después de un retiro

    let saldo = a - b;

    console.log("27 = El saldo es:", saldo);
    

// Ejercicio 28: Cálculo del perímetro de un cuadrado

    let perCuad = a * 4;

    console.log("28 = El perimetro del cuadrado es de",perCuad,"metros");
    
// Ejercicio 29: Conversión de días

    const dias = 7;
    const horas = 24;
    const minutos = 60;
    const segundos = 60;

    let semana = dias * horas;

    console.log("29 = Total horas",semana,"en una semana.");
    
// Ejercicio 30: Cálculo de propinas

    let totalFactura = precio + iva;

    console.log("30 = La factura asciende a",totalFactura,"€");
    
// Ejercicio 31: Cálculo del volumen de un cubo

    let volcube = a ** 3;

    console.log("31 = EL volumen del cubo es de",volcube,"m3");
    

// Ejercicio 32: Incremento acumulado

    let montoAhorros = 10;
    montoAhorros += montoAhorros * 0.1;
    //es lo mismo que esto de debajo
    montoAhorros *= 1.1;
    montoAhorros *= 1.1;

    console.log("32 = Total ahorros",montoAhorros,"en euros.");
    

// Ejercicio 33: Conversión de horas a segundos

    let totalSemana = semana * 3600;

    // let totalSemana = dias * horas * minutos * segundos;

    console.log("33 = Hay",totalSemana,"segundos en una semana");
    

// Ejercicio 34: Cálculo de salario semanal

    const horasTrabajadas = 40;

    let salarioSemanal = precio * horasTrabajadas;

    console.log("34 = Esta semana deberias cobrar,",salarioSemanal,"€");

// Ejercicio 35: Decremento acumulado

    let peso = 98;

    peso -= 2.5 * 4;

    console.log("35 = Ahora pesa",peso,"Kgs");

// Ejercicio 36: Comprobación de múltiplos

    const numero = 12312736;

    let multiplo = numero % 3;

    if (multiplo === 0) {
        console.log("36 = El numero 12312736 SI es multiple de 3");
    } else {
        console.log("36 = El numero 12312736 NO es multiple de 3");
    }

// Ejercicio 37: Incremento con decimales

    let gasolino = 1.46;

    gasolino += 0.25;
    gasolino += 0.25;
    gasolino += 0.25;

    console.log("37 = Ahora cuesta la gasolina", gasolino);

// Ejercicio 38: Calcula el promedio de 5 números

    const c = 1;
    const d = 2;
    const e = 3;
    const f = 4;
    const g = 5;

    let promedio = (c + d + e + f+ g)/5;

    console.log("38 = El promedio es", promedio);

// Ejercicio 39: Cálculo del descuento acumulado

    precioInicial *= 0.3;
    precioInicial *= 0.15;

    console.log("39 = Descuento acumulado", precioInicial);
    

// Ejercicio 40: Ajuste de inventario con restos

    const articulos = 78162381726;
    const cajas = 981239;

    let sobran = articulos % cajas;

    console.log("40 = Sobran", sobran);
    
// Ejercicio 41: Cálculo del interés compuesto

    const capIni = 3000;
    const interes = 0.03;
    const periodo = 12;

    let intcomp = capIni * (1 + interes) ** periodo

    console.log("41 = El interes compuesto de",capIni,"€ despues de",
        periodo,"meses, es de",intcomp.toFixed(2),"€");
    


// Ejercicio 42: Incremento y resto en un ciclo
    
    let number = 8;

    ++number;
    ++number;
    ++number;
    ++number;
    ++number;
    ++number;
    ++number;

    number % 5;

    console.log("42 =",number);


// Ejercicio 43: Comparación de superficies

    const cuadrado = 3;
    const radiocirculo = 1;

    let cubearea = cuadrado ** 2;
    let circlearea = (radiocirculo ** 2) * 3.14;

    if (cubearea < circlearea) {
        console.log("43 = El cuadrado es menor que el circulo");
        
    } else {
        console.log("43 = El circulo es menor que el cuadrado");
        
    }

// Ejercicio 44: Optimización de cajas de productos

    const productosTotales = 12123;
    const capacidad = 123;

    let optimo = productosTotales / capacidad;

    console.log("44 = lo optimo son",Math.ceil(optimo),"cajas");
    
// Ejercicio 45: Ahorro acumulado con bonificaciones

    let iniAhorros = 1000;
    const bonificaciones =  0.10;

    iniAhorros += iniAhorros * bonificaciones;
    iniAhorros += iniAhorros * bonificaciones;
    iniAhorros += iniAhorros * bonificaciones;
    iniAhorros += iniAhorros * bonificaciones;
    iniAhorros += iniAhorros * bonificaciones;

    console.log("45 =",iniAhorros);
    
// Ejercicio 46: Comprobación de divisibilidad múltiple

    let numero2 = 400;

    if (numero2 % 4 === 0 && numero2 % 6 === 0) {
        console.log("46 = El numero 400 SI es divisible entre 4 y 6");
        
    } else {
        console.log("46 = El numero 400 NO es divisible entre 4 y 6");
    }

    

// Ejercicio 47: Ajuste del precio con IVA y descuento

    let precioProducto = 28.99;
    let iva2 = 0.21;
    let discount = 0.10;

    let finalprice = precioProducto + iva2 - (precioProducto * discount)

    console.log("47 = El precio final es de",finalprice,"€.");
    
// Ejercicio 48: Cálculo del promedio ponderado

    let nota1 = 1;
    let nota2 = 3;
    let nota3 = 8;

    let peso1 = 2;
    let peso2 = 4;
    let peso3 = 5;

    let prompond = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) 
                    /
                    (peso1 + peso2 + peso3);

    console.log("48 = El promedio ponderado es:",Math.ceil(prompond));
    

// Ejercicio 49: Cálculo de la raíz cúbica aproximada

    let aproximacion = numero2;

    aproximacion /= 3;
    aproximacion /= 3;
    aproximacion /= 3;
    aproximacion /= 3;
    aproximacion /= 3;

    console.log("49 = La aproximacion de",numero2,"es",aproximacion.toFixed(2));
    
// Ejercicio 50: Ajuste salarial acumulativo

    let salarioInicial = 1100;
    let incremento = 0.03;
    
    salarioInicial += salarioInicial * incremento;
    salarioInicial += salarioInicial * incremento;
    salarioInicial += salarioInicial * incremento;
    salarioInicial += salarioInicial * incremento;
    salarioInicial += salarioInicial * incremento;
    salarioInicial += salarioInicial * incremento;
    salarioInicial += salarioInicial * incremento;
    salarioInicial += salarioInicial * incremento;
    salarioInicial += salarioInicial * incremento;
    salarioInicial += salarioInicial * incremento;
    salarioInicial += salarioInicial * incremento;
    salarioInicial += salarioInicial * incremento;

    console.log("50 = El Salario tras subidas es de",salarioInicial.toFixed(2),"€");
    


