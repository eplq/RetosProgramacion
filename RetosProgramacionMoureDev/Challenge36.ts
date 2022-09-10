/*
 * Reto #36
 * LOS ANILLOS DE PODER
 * Fecha publicación enunciado: 06/09/22
 * Fecha publicación resolución: 14/09/22
 * Dificultad: MEDIA
 *
 * Enunciado: ¡La Tierra Media está en guerra! En ella lucharán razas leales a Sauron
 * contra otras bondadosas que no quieren que el mal reine sobre sus tierras.
 * Cada raza tiene asociado un "valor" entre 1 y 5:
 * - Razas bondadosas: Pelosos (1), Sureños buenos (2), Enanos (3), Númenóreanos (4), Elfos (5)
 * - Razas malvadas: Sureños malos (2), Orcos (2), Goblins (2), Huargos (3), Trolls (5)
 * Crea un programa que calcule el resultado de la batalla entre los 2 tipos de ejércitos:
 * - El resultado puede ser que gane el bien, el mal, o exista un empate. Dependiendo de la
 *   suma del valor del ejército y el número de integrantes.
 * - Cada ejército puede estar compuesto por un número de integrantes variable de cada raza.
 * - Tienes total libertad para modelar los datos del ejercicio.
 * Ej: 1 Peloso pierde contra 1 Orco, 2 Pelosos empatan contra 1 Orco, 3 Pelosos ganan a 1 Orco.
 *
 * Información adicional:
 * - Usa el canal de nuestro Discord (https://mouredev.com/discord) "🔁reto-semanal"
 *   para preguntas, dudas o prestar ayuda a la comunidad.
 * - Tienes toda la información sobre los retos semanales en
 *   https://retosdeprogramacion.com/semanales2022.
 *
 */

enum RazasBondadosas {
    Peloso       = 1,
    SureñoBueno  = 2,
    Enano        = 3,
    Númenóreano  = 4,
    Elfo         = 5
}

enum RazasMalvadas {
    SureñoMalo   = 2,
    Orco         = 2,
    Goblin       = 2,
    Huargo       = 3,
    Troll        = 5
}

enum Resultado {
    GanaBien,
    GanaMal,
    Empate
}

type EjercitoBondadoso = Map<RazasBondadosas, number>
type EjercitoMalvado = Map<RazasMalvadas, number>


function batalla(ejercitoBondadoso: EjercitoBondadoso, ejercitoMalvado: EjercitoMalvado): Resultado {

    // multiplicamos el número de unidades de cada tipo por su fuerza
    let fuerzaBien = 0
    ejercitoBondadoso.forEach(
        (value, key) => fuerzaBien += key * value
    )

    let fuerzaMal = 0
    ejercitoMalvado.forEach(
        (value, key) => fuerzaMal += key * value
    )

    if (fuerzaBien === fuerzaMal)
        return Resultado.Empate

    if (fuerzaBien > fuerzaMal)
        return Resultado.GanaBien

    return Resultado.GanaMal
}


// Prueba

let ejercitoBueno: EjercitoBondadoso = new Map()

// Fuerza total: 28
ejercitoBueno.set(RazasBondadosas.Elfo, 3) // 15
ejercitoBueno.set(RazasBondadosas.Enano, 1) // 3
ejercitoBueno.set(RazasBondadosas.Peloso, 10) // 10


let ejercitoMalo: EjercitoMalvado = new Map()

// Fuerza total: 31
ejercitoMalo.set(RazasMalvadas.Huargo, 3) // 9
ejercitoMalo.set(RazasMalvadas.SureñoMalo, 1) // 2
ejercitoMalo.set(RazasMalvadas.Orco, 10) // 20


console.assert(batalla(ejercitoBueno, ejercitoMalo) === Resultado.GanaMal)
