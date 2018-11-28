function marathonTaskScore(marathonLength, maxScore, submissions, successfulSubmissionTime) {
    let res = maxScore;
    
    if (successfulSubmissionTime < 0) {
        return 0;
    }
    
    if (submissions === 1 && successfulSubmissionTime === 0) {
        return maxScore;
    }
    else {
        res -= successfulSubmissionTime * ((maxScore / 2) * (1 / marathonLength));
        res -= (submissions - 1) * 10;
    }
    
    res = res < maxScore / 2 ? maxScore / 2 : res;
    
    return res;
}
