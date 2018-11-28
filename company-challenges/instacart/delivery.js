function delivery(order, shoppers) {
    const distanceStoreToHouse = order[0];
    const minsUntilReady = order[1];
    const maxMinsLate = order[2];
    let shoppersArr = [];
    
    for (i = 0; i < shoppers.length; i++) {
        const distanceShopperToStore = shoppers[i][0];
        const speed = shoppers[i][1];
        const minsInStore = shoppers[i][2];
        let res = (distanceShopperToStore + distanceStoreToHouse) / speed + minsInStore;
        
        if (res < minsUntilReady || res > minsUntilReady + maxMinsLate) {
            shoppersArr.push(false);
        }
        else {
            shoppersArr.push(true);
        }
    }
    
    return shoppersArr;
}
