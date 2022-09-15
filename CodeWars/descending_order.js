function descendingOrder(n) {
  /*
  let stringNumber = n.toString()
  let numbers = stringNumber.split("").map(item => parseInt(item))
  let stringDescendingNumbers = numbers.sort().reverse().map(item => item.toString())

  return parseInt(stringDescendingNumbers.join(""))
  */

  return parseInt // to integer
    (
      n
        .toString() // string
        .split("") // to array of strings
        .map(item => parseInt(item)) // array of integers
        .sort() // ascending order
        .reverse() // descending order
        .map(item => item.toString()) // to array of strings
        .join("") // number in string
    )
}
