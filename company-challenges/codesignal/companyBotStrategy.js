function companyBotStrategy(trainingData) {
    let sumCorrects = 0;
    let numCorrects = 0;
    
    for (i = 0; i < trainingData.length; i++) {
        sumCorrects = trainingData[i][1] > 0 ? sumCorrects + trainingData[i][0] : sumCorrects;
        numCorrects = trainingData[i][1] > 0 ? numCorrects + 1 : numCorrects;
    }
    
    return sumCorrects ? sumCorrects / numCorrects : 0;
}
