function digitalRoot(n) {
  do {
    n = n
      .toString()
      .split("")
      .map((x) => parseInt(x))
      .reduce((carry, num) => num + carry, 0);
  } while (n >= 10);

  return n;
}
