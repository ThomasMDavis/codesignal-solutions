function meanScores(scores) {
    let ongoingSum = 0;
    
    for (i = 0; i < scores.length; i++) {
        ongoingSum += scores[i];
        scores[i] = Math.floor(ongoingSum / (i + 1));
    }
    
    return scores;
}
