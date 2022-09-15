function findOdd(A) {
  let occurrencies = A.reduce((object, item) => {
    if (!(item in object))
      object[item] = 0

    object[item]++
    return object
  }, {})

  let entries = Object.entries(occurrencies)
  return entries.reduce((carry, item) => {
    if (item[1] % 2 != 0)
      return parseInt(item[0])

    return carry
  }, 0)
}
