function sudoku(grid) {
    let subgrids = [];
    
    for (i = 0; i < 3; i++) {
        subgrids.push([]);
        
        for (j = 0; j < 3; j++) {
            subgrids[i].push([]);
        }
    }

    for (i = 0; i < 9; i++) {
        let horizontal = [];
        let vertical = [];

        for (j = 0; j < 9; j++) {
            horizontal.push(grid[i][j]);
            vertical.push(grid[j][i]);
            subgrids[Math.floor(i / 3)][Math.floor(j / 3)].push(grid[i][j]);
        }
        
        if (!isValid(horizontal) || !isValid(vertical)) {
            return false;
        }
    }

    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            if (!isValid(subgrids[i][j])) {
                return false;
            }
        }
    }

    return true;
}

function isValid(block) {
    return block.sort().join("") === "123456789";
}
