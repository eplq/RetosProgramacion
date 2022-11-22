function rgb(r, g, b){
  // Number.prototype.toString(radix)
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

  const round = (n) => {
    if (n < 0)
      return 0

    if (n > 255)
      return 255

    return n
  }

  const hex = (n) => n.toString(16).toUpperCase()

  r = round(r)
  g = round(g)
  b = round(b)

  return `${r < 16 ? '0' : ''}${hex(r)}${g < 16 ? '0' : ''}${hex(g)}${b < 16 ? '0' : ''}${hex(b)}`
}
