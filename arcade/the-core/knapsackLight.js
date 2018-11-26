function knapsackLight(value1, weight1, value2, weight2, maxW) {
    if (Math.min(weight1, weight2) > maxW) {
        return 0;
    }
    
    if (weight1 + weight2 > maxW) {
        return weight1 > maxW ? value2 : 
               weight2 > maxW ? value1 : 
               Math.max(value1, value2);
    }
    
    return value1 + value2;
}
