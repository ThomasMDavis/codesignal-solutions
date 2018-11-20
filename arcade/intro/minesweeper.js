function minesweeper(matrix) {
    const numCols = matrix[0].length;
    const numRows = matrix.length;
    let res = [];
    
    for (i = 0; i < numRows; i++) {
        res[i] = [];
        
        for (j = 0; j < numCols; j++) {
            let numBombsNear = 0;
            
            for (k = -1; k < 2; k++) {
                for (l = -1; l < 2; l++) {
                    if (k === 0 && l === 0) {
                        numBombsNear = numBombsNear;
                    }
                    else if (typeof matrix[i + k] === "undefined") {
                        numBombsNear = numBombsNear;
                    }
                    else {
                        numBombsNear = matrix[i + k][j + l] ? numBombsNear + 1 : numBombsNear;
                    }
                }
            }
            
            res[i][j] = numBombsNear;
        }
    }
    
    return res;
}
