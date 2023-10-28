//Simulador de plazo fijo sin renovación automática y con acreditación al vencimiento, repetido la cantidad de veces que quiera el usuario. 
//El simulador le pedirá al usuario que se identifique con su nombre.
//Solicitará que ingrese el monto inicial de inversión
//solicitará el % de tasa de interés anual actual ofrecida por el banco
//consultará si quiere repetir la operación hasta que el usuario diga "no"
//le devolverá al usuario el interés acumulado en el transcurso de los meses que pasaron y cuanto obtiene  de saldo acumulado de plazo filo al finalizar. 


function calcularPlazoFijo(montoInvertido, tasaInteres) {
    return montoInvertido * (tasaInteres / 100 / 12)
}
let usuario = prompt("Bienvenido/a al sistema para calcular el interés obtenido al realizar plazos fijos en el banco, con posibilidad de repetir la operación. Para comenzar, decime cuál es tu nombre: ")
let monto = parseFloat(prompt("Ingresá el monto inicial que querés invertir:"))
let tasaInteres = parseFloat(prompt("Ingresá la tasa de interés anual ofrecida por el banco (solo número):"))
let repetir = true;
let meses = 1
let interesesAcumulados = 0


if (isNaN(monto) || isNaN(tasaInteres) || usuario === null) {
    alert("Por favor, ingresá datos válidos en todos los campos.")
    console.error("El usuario dejó un campo vacío")
} else {
    do {
        const resultado = calcularPlazoFijo(monto, tasaInteres)
        monto += resultado
        alert(`El interés obtenido en el mes ${meses} es de: $${resultado.toFixed(2)} y el monto acumulado es: $${monto.toFixed(2)}`)
        let respuesta;
        do {
            respuesta = prompt("¿Deseas continuar con la operación? (Si/No)").toLowerCase()
            if (respuesta !== "si" && respuesta !== "no") {
                alert("Por favor, ingresá 'si' o 'no'.")
            }
        } while (respuesta !== "si" && respuesta !== "no");

        if (respuesta === "no") {
            repetir = false
        }
        interesesAcumulados += resultado
        repetir = respuesta === "si"
        meses++
    } while (repetir)

    if (meses === 2) {
        alert(`¡Felicitaciones ${usuario}! El total de intereses acumulados en el transcurso de ${meses - 1} mes serían: $${interesesAcumulados.toFixed(2)} y acumularías un saldo total final de $${monto.toFixed(2)} ¡Gracias por utilizar nuestro simulador`)
    }else{
        alert(`¡Felicitaciones ${usuario}! El total de intereses acumulados en el transcurso de ${meses - 1} meses serían: $${interesesAcumulados.toFixed(2)} y acumularías un saldo total final de $${monto.toFixed(2)} ¡Gracias por utilizar nuestro simulador`)
    }
}








