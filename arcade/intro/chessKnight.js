function chessKnight(cell) {
    const rows = ["1", "2", "3", "4", "5", "6", "7", "8"];
    const cols = ["a", "b", "c", "d", "e", "f", "g", "h"];
    let possibleMoves = 8;
    
    const knightCol = cols.findIndex(function(el) {
        return el === cell.toString()[0];
    });
    
    const knightRow = rows.findIndex(function(el) {
        return el === cell.toString()[1];
    });
    
    possibleMoves = knightCol - 2 < 0 || knightRow - 1 < 0 ? possibleMoves - 1 : possibleMoves;
    possibleMoves = knightCol - 2 < 0 || knightRow + 1 > 7 ? possibleMoves - 1 : possibleMoves;
    possibleMoves = knightCol + 2 > 7 || knightRow - 1 < 0 ? possibleMoves - 1 : possibleMoves;
    possibleMoves = knightCol + 2 > 7 || knightRow + 1 > 7 ? possibleMoves - 1 : possibleMoves;
    possibleMoves = knightRow - 2 < 0 || knightCol - 1 < 0 ? possibleMoves - 1 : possibleMoves;
    possibleMoves = knightRow - 2 < 0 || knightCol + 1 > 7 ? possibleMoves - 1 : possibleMoves;
    possibleMoves = knightRow + 2 > 7 || knightCol - 1 < 0 ? possibleMoves - 1 : possibleMoves;
    possibleMoves = knightRow + 2 > 7 || knightCol + 1 > 7 ? possibleMoves - 1 : possibleMoves;
    
    return possibleMoves;
}
