function bishopAndPawn(bishop, pawn) {
    const rows = ["1", "2", "3", "4", "5", "6", "7", "8"];
    const cols = ["a", "b", "c", "d", "e", "f", "g", "h"];
    
    const bishopCol = cols.findIndex(function(el) {
        return el === bishop.toString()[0];
    });
    
    const bishopRow = rows.findIndex(function(el) {
        return el === bishop.toString()[1];
    });
    
    const pawnCol = cols.findIndex(function(el) {
        return el === pawn.toString()[0];
    });
    
    const pawnRow = rows.findIndex(function(el) {
        return el === pawn.toString()[1];
    });
    
    for (i = 0; i < 8; i++) {
        if ((pawnCol === bishopCol + i && pawnRow === bishopRow + i) ||
            (pawnCol === bishopCol - i && pawnRow === bishopRow - i) ||
            (pawnCol === bishopCol + i && pawnRow === bishopRow - i) ||
            (pawnCol === bishopCol - i && pawnRow === bishopRow + i)) {
            return true;
        }
    }
    
    return false;
}
