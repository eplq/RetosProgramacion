/*
 * Enunciado: ¡Han anunciado un nuevo "The Legend of Zelda"! 
 * Se llamará "Tears of the Kingdom" y se lanzará el 12 de mayo de 2023.
 * Pero, ¿recuerdas cuánto tiempo ha pasado entre los distintos
 * "The Legend of Zelda" de la historia?
 * Crea un programa que calcule cuántos años y días hay entre 2 juegos de Zelda
 * que tú selecciones.
 * - Debes buscar cada uno de los títulos y su día de lanzamiento 
 *   (si no encuentras el día exacto puedes usar el mes, o incluso inventártelo)
 */

interface Lanzamiento {
    nombre: string
    año: number
}

// https://es.wikipedia.org/wiki/The_Legend_of_Zelda#Comercial
const LANZAMIENTOS: Array<Lanzamiento> = [
    {
        "nombre": "The Legend of Zelda",
        "año": 1986
    },
    {
        "nombre": "The Adventure of Link",
        "año": 1987
    },
    {
        "nombre": "A Link to the Past",
        "año": 1991
    },
    {
        "nombre": "Ocarina of Time",
        "año": 1998
    },
    {
        "nombre": "Majora's Mask",
        "año": 2000
    },
    {
        "nombre": "The Wind Waker",
        "año": 2002
    },
    {
        "nombre": "Four Swords Adventures",
        "año": 2004
    },
    {
        "nombre": "Twilight Princess",
        "año": 2006
    },
    {
        "nombre": "Link's Crossbow Training",
        "año": 2007
    },
    {
        "nombre": "Skyward Sword",
        "año": 2011
    },
    {
        "nombre": "The Wind Waker HD",
        "año": 2013
    },
    {
        "nombre": "Hyrule Warriors",
        "año": 2014
    },
    {
        "nombre": "Twilight Princess HD",
        "año": 2016
    },
    {
        "nombre": "Breath of the Wild",
        "año": 2017
    },
    {
        "nombre": "Link's Awakening",
        "año": 2019
    },
    {
        "nombre": "Hyrule Warriors: Age of Calamity",
        "año": 2020
    },
    {
        "nombre": "Skyward Sword HD",
        "año": 2021
    },
    {
        "nombre": "Link's Awakening DX",
        "año": 1998
    },
    {
        "nombre": "Oracle of Seasons",
        "año": 2001
    },
    {
        "nombre": "Oracle of Ages",
        "año": 2001
    },
    {
        "nombre": "A Link to the Past/Four Swords",
        "año": 2002
    },
    {
        "nombre": "Classic NES Series: The Legend of Zelda",
        "año": 2004
    },
    {
        "nombre": "Classic NES Series: The Adventure of Link",
        "año": 2004
    },
    {
        "nombre": "The Minish Cap",
        "año": 2004
    },
    {
        "nombre": "Freshly-Picked Tingle's Rosy Rupeeland",
        "año": 2006
    },
    {
        "nombre": "Phantom Hourglass",
        "año": 2007
    },
    {
        "nombre": "Irozuki Tingle no Koi no Ballon Trip",
        "año": 2009
    },
    {
        "nombre": "Spirit Tracks",
        "año": 2009
    },
    {
        "nombre": "Ocarina of Time 3D",
        "año": 2011
    },
    {
        "nombre": "A Link Between Worlds",
        "año": 2013
    },
    {
        "nombre": "Majora's Mask 3D",
        "año": 2015
    },
    {
        "nombre": "Tri Force Heroes",
        "año": 2015
    },
    {
        "nombre": "Hyrule Warriors Legends",
        "año": 2016
    }
]

function calcularDiferenciaAños(lanzamiento1: Lanzamiento, lanzamiento2: Lanzamiento): number {
    return Math.abs(lanzamiento2.año - lanzamiento1.año)
}

function calcularDiferenciaDias(lanzamiento1: Lanzamiento, lanzamiento2: Lanzamiento): number {
    let fecha1 = new Date(lanzamiento1.año, 0, 1) // como si se hubieran lanzado el 1 de enero de 
    let fecha2 = new Date(lanzamiento2.año, 0, 1)

    let diff = fecha2.getTime() - fecha1.getTime()

    //                     secs   min  h   days
    return Math.abs(diff / 1000 / 60 / 60 / 24) // los días entre dos fechas son los mismos sin importar el orden de los operandos
}

// Prueba

let lanzamientoAntiguo: Lanzamiento = LANZAMIENTOS[0] // The Legend of Zelda, 1986
let lanzamientoNuevo: Lanzamiento = LANZAMIENTOS[1] // The Adventure of Link, 1987

let diferenciaDias = calcularDiferenciaDias(lanzamientoAntiguo, lanzamientoNuevo)
let diferenciaAños = calcularDiferenciaAños(lanzamientoAntiguo, lanzamientoNuevo)
let diferenciaAñosBisiesto = calcularDiferenciaDias(LANZAMIENTOS[14], LANZAMIENTOS[16]) // 2019 to 2021

console.table(
    [
        { prueba: "Diferencia en años", esperado: 1, real: diferenciaAños },
        { prueba: "Diferencia en días", esperado: 365, real: diferenciaDias },
        { prueba: "Diferencia en días con uno bisiesto", esperado: 365 * 2 + 1, real: diferenciaAñosBisiesto }
    ],
    ["prueba", "esperado", "real"]
)