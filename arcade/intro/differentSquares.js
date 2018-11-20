function differentSquares(matrix) {
    let squares = [];
    
    for (i = 0; i < matrix.length - 1; i++) {
        for (j = 0; j < matrix[i].length - 1; j++) {
            let possibleSquare = [
                matrix[i][j],
                matrix[i][j + 1],
                matrix[i + 1][j],
                matrix[i + 1][j + 1]
            ];
            
            squares.push(possibleSquare);
        }
    }
    
    let temp = [];
    let uniqueSquares = squares.filter(function(value) {
        if (temp.indexOf(value.toString()) < 0) {
            temp.push(value.toString());
            return value;
        }
    });
    
    return uniqueSquares.length;
}

function lazyArraysEqual(arr1, arr2) {
    return arr1.toString() === arr2.toString();
}
