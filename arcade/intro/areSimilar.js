function areSimilar(a, b) {
    const oldA = a.slice();
    const oldB = b.slice();
    
    if (a.toString() === b.toString()) {
        return true;
    }
    else {
        let i = oldA.length - 1;
        
        while (i >= 0) {
            let j = oldB.length - 1;
            
            if (a[i] !== b[i]) {
                while (j >= 0) {
                    if (a[j] !== b[j]) {
                        let temp = a[j];
                        a[j] = a[i];
                        a[i] = temp;

                        if (a.toString() === b.toString()) {
                            return true;
                        }

                        a = oldA.slice();

                        temp = b[j];
                        b[j] = b[i];
                        b[i] = temp;

                        if (a.toString() === b.toString()) {
                            return true;
                        }

                        b = oldB.slice();
                    }

                    j--;
                }
            }
            
            i--;
        }
    }
    
    return false;
}
