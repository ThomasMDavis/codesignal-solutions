function weakNumbers(n) {
    const divisors = getDivisors(n, {});
    const arr = getWeakness(n, 0, divisors, []);
    const weakness = Math.max(...arr);
    let count = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (weakness === arr[i]) count++;
    }
    
    return [weakness, count];
}

function getDivisors(n, divisors) {
    for (let i = 1; i <= n; i++) {
        divisors[i] = 0;
        
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) divisors[i]++;
        }
    }
    
    return divisors;
}
    
function getWeakness(n, count, map, arr) {
    while (n > 0) {
        for (let l = n - 1; l > 0; l--) {
            if (map[n] < map[l]) count++;
        }
        
        arr.push(count);
        count = 0;
        n--;
    }
    
    return arr;
}
