function makeArrayConsecutive2(statues) {
    let sortedStatues = statues.sort(sortNumber);
    let additionalStatues = 0;
    
    for (i = 0; i < sortedStatues.length - 1; i++) {
        additionalStatues = sortedStatues[i + 1] === sortedStatues[i] + 1 ? additionalStatues : additionalStatues + (sortedStatues[i + 1] - (sortedStatues[i] + 1));
    }
    
    return additionalStatues;
}

function sortNumber(a, b) {
    return a - b;
}
