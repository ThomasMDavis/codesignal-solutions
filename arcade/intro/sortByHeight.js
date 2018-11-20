function sortByHeight(a) {
    let parkRow = [];
    let treePos = [];
    
    for (i = 0; i < a.length; i++) {
        if (a[i] !== -1) {
            parkRow.push(a[i]);
        }
        else {
            treePos.push(i);
        }
    }
    
    parkRow.sort(sortNumber);
    
    for (i = 0; i < treePos.length; i++) {
        parkRow.splice(treePos[i], 0, -1);
    }
    
    return parkRow;
}

function sortNumber(a, b) {
    return a - b;
}
