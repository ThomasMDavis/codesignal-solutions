function matrixElementsSum(matrix) {
    let sum = 0;
    let badColumns = [];
    
    for (i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] && !badColumns.includes(j)) {
                sum = sum + matrix[i][j];
            }
            else {
                badColumns.push(j);
            }
        }
    }
    
    return sum;
}
