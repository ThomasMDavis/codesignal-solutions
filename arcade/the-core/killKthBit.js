function killKthBit(n, k) {
  return Number(parseInt((n.toString(2).substr(0, n.toString(2).length - k) + "0" + n.toString(2).substr(n.toString(2).length - k + 1, n.length)), 2));
}
