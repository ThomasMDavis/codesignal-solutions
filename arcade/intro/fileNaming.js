function fileNaming(names) {
    let newNames = [];
    
    for (i = 0; i < names.length; i++) {
        if (!newNames.includes(names[i])) {
            newNames.push(names[i]);
        }
        else {
            let searching = true;
            let j = 1;
            
            while (searching) {
                if (!newNames.includes(names[i] + "(" + j + ")")) {
                    newNames.push(names[i] + "(" + j + ")");
                    searching = false;
                }
                j++;
            }
        }
    }
    
    return newNames;
}
