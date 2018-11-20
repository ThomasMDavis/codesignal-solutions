function boxBlur(image) {
    const noOfSquaresX = image[0].length - 2;
    const noOfSquaresY = image.length - 2;
    const result = [];
    
    for (i = 0; i < noOfSquaresY; i++) {
        result[i] = [];
        
        for (j = 0; j < noOfSquaresX; j++) {
            result[i][j] = 0;
            
            for (let col = 0; col < 3; col++) {
                for (let row = 0; row < 3; row++) {
                    result[i][j] += image[i + col][j + row];
                }
            }
            
            result[i][j] = Math.floor(result[i][j] / 9);
        }
    }
    
    return result;
}
