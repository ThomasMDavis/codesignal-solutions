function addBorder(picture) {
    const rowLen = picture[0].length;
    const columnLen = picture.length;
    
    for (i = 0; i < columnLen; i++) {
        picture[i] = "*" + picture[i] + "*";
    }
    
    picture.splice(0, 0, "*".repeat(rowLen + 2));
    picture.splice(columnLen + 1, 0, "*".repeat(rowLen + 2));
    
    return picture;
}
