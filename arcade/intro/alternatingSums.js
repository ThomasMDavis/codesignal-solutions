function alternatingSums(a) {
    let team1Sum = 0;
    let team2Sum = 0;
    let isTeamOne = true;
    
    for (i = 0; i < a.length; i++) {
        if (isTeamOne) {
            team1Sum += a[i];
        }
        else {
            team2Sum += a[i];
        }
        
        isTeamOne = !isTeamOne;
    }
    
    return [team1Sum, team2Sum];
}
