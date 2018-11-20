function growingPlant(upSpeed, downSpeed, desiredHeight) {
    let newHeight = 0;
    
    for (i = 1; i < 1000; i++) {
        newHeight += upSpeed;
        
        if (newHeight >= desiredHeight) {
            return i;
        }
        else {
            newHeight = newHeight - downSpeed;
        }
    }
}
