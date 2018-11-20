function electionsWinners(votes, k) {
    let winners = 0;
    votes = votes.sort(function(a, b) {
        return a - b;
    });
    
    for(i = 0; i < votes.length; i++) {
        if (votes[i] + k > votes[votes.length - 1]) {
            winners++;
        }
        
        if (winners === 0 && i === votes.length - 1 && votes[votes.length - 1] !== votes[votes.length - 2]) {
            winners++;
        }
    }
    
    return winners;
}
