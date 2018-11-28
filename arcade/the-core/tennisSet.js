function tennisSet(score1, score2) {
    return (score1 === 6 && score2 < 5) ||
           (score2 === 6 && score1 < 5) ||
           (score1 === 7 && [5, 6].includes(score2)) ||
           (score2 === 7 && [5, 6].includes(score1));
}
