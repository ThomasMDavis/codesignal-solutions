function celsiusVsFahrenheit(yourTemps, friendsTemps) {
    let countFriendsIsHotter = 0;
    
    for (i = 0; i < yourTemps.length; i++) {
        yourTemps[i] = Math.floor(yourTemps[i] * 1.8 + 32);
    }
    
    for (i = 0; i < yourTemps.length; i++) {
        countFriendsIsHotter = yourTemps[i] < friendsTemps[i] ? countFriendsIsHotter + 1 : countFriendsIsHotter;
    }
    
    return countFriendsIsHotter;
}
