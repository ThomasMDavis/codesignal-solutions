function almostIncreasingSequence(sequence) {
    let sequenceLen = sequence.length;
    let i = sequenceLen;
    
    while (i >= 0) {
        let testSequence = sequence.slice();
        let isPossible = true;
        let j = 0;
        
        testSequence.splice(i, 1);
        let testSequenceLen = testSequence.length;
        
        while (j < testSequenceLen) {
            isPossible = testSequence[j] >= testSequence[j + 1] ? false : isPossible;
            j++;
        }
        
        if (isPossible) {
            return true;
        }
        
        i--;
    }
    
    return false;
}
