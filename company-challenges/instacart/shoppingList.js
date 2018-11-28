function shoppingList(items) {
    const priceArr = items.match(/[0-9]+(\.?[0-9]*)/g);
    let sum = 0;
    
    if (priceArr === undefined || priceArr === null) {
        return 0;
    }
    
    for (i = 0; i < priceArr.length; i++) {
        sum += Number(priceArr[i]);
    }
    
    return sum;
}
