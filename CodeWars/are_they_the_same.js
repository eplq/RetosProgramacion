function comp(array1, array2) {

  if (!array1 || !array2) return false

  array2Squared = array2.map(x => Math.sqrt(x))

  array1.sort((a, b) => a - b)
  array2Squared.sort((a, b) => a - b)

  return array1.join(" ") === array2Squared.join(" ")
}
