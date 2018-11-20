function lineEncoding(s) {
    const disjointSubstrs = s.split("");
    let res = "";
    let count = 1;
    
    for (i = 0; i < disjointSubstrs.length; i++) {
        if (disjointSubstrs[i] === disjointSubstrs[i + 1]) {
            count++;
        }
        else {
            res += count > 1 ? count + disjointSubstrs[i] : disjointSubstrs[i];
            count = 1;
        }
    }
    
    return res;
}
