function increaseNumberRoundness(n) {
    const zeros = n.toString().match(/[^1-9]+/g);
    
    if (!zeros) return false;
    if (zeros.length > 1 ||
       (zeros.length > 0 && Number(n.toString()[n.toString().length - 1]) > 0)) return true;
    
    return false;
}
