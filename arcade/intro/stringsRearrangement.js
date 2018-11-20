function stringsRearrangement(inputArray) {
    let used = [];
    
    findSequence(inputArray, null, used, 0);
    
    return success;
}

let success = false;

function findSequence(a, prev, used, n) {
    if (n === a.length) {
        success = true;
        return;
    }
    
    for (i = 0; i < a.length; i++) {
        if (!used[i] && (prev == null || differByOne(prev, a[i]))) {
            used[i] = true;
            findSequence(a, a[i], used, n+1);
            used[i] = false;
        }
    }
}

function differByOne(a, b) {
    let count = 0;
    for (i = 0; i < a.length; i++) {
        if (a.charAt(i) !== b.charAt(i)) {
            count++;
        }
    }
    return count === 1;
}
