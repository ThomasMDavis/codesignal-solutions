function additionWithoutCarrying(param1, param2) {
    const max = Math.max(param1, param2).toString().split("").reverse().join("");
    const min = Math.min(param1, param2).toString().split("").reverse().join("");
    let res = "";
    
    for (i = 0; i < min.length; i++) {
        let sum = Number(max[i]) + Number(min[i]);
        
        if (sum > 9) res += sum.toString()[1];
        else res += sum;
    }
    
    for (i = max.length - 1; i >= min.length; i--) res += max[i];
    
    return Number(res.split("").reverse().join(""));
}
