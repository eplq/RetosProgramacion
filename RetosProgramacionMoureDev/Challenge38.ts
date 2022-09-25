/*
 * Enunciado: Crea un programa se encargue de transformar un número binario
 * a decimal sin utilizar funciones propias del lenguaje que 
 * lo hagan directamente.
 */

/**
 * Transforma un número del binario a la representación decimal.
 * 
 * El motivo de usar strings es que si metemos un número directamente
 * el propio lenguaje hace la conversión porque son el mismo número,
 * pero escrito de diferentes maneras. Entonces con el string podemos
 * ir procesando dígito a dígito.
 * 
 * @param numberInBinary Número binario en forma de string
 */
function bin2dec(numberInBinary: string): number | null {

    if (!numberInBinary
        .split("")
        .reduce(
            (valid, num) => valid && (num === "0" || num === "1"),
            true
        ))
        return null

    // como el binario es un sistema numérico posicional, podemos calcular la conversión iterando sobre el string
    // más información: https://blogs.ua.es/matesfacil/2018/11/12/sistema-de-numeracion-posicional/ (consultado el 25/09/2022)
    let numberInDecimal: number = 0

    // vamos de derecha a izquierda
    for (let i = numberInBinary.length - 1; i >= 0; i--) {

        if (numberInBinary[i] === "0")
            continue

        let position = numberInBinary.length - (i + 1)
        let value = 2 ** position // valor de la posición (1 = 2 ** 0, 2 = 2 ** 1, 4 = 2 ** 2, 8 = 2 ** 3...)

        numberInDecimal += value
    }

    return numberInDecimal
}

console.table(
    [
        { prueba: "16 = 0x10000", esperado: 16, real: bin2dec("10000") },
        { prueba: "1000 = 0x1111101000", esperado: 1000, real: bin2dec("1111101000") },
        { prueba: "Número inválido (123)", esperado: null, real: bin2dec("123") },
        { prueba: "ceros delante: 1000 = 0x00001111101000", esperado: 1000, real: bin2dec("00001111101000")}
    ],
    ["prueba", "esperado", "real"]
)