function rectangleRotation(a, b) {
    const pointsA = Math.floor(Math.sqrt(a ** 2 / 2));
    const pointsB = Math.floor(Math.sqrt(b ** 2 / 2));
    
    return (pointsA * pointsB + Math.floor((pointsA + pointsB) / 2)) * 2 + 1;
}
