function fareEstimator(ride_time, ride_distance, cost_per_minute, cost_per_mile) {
    let resArr = [];
    
    for (i = 0; i < cost_per_minute.length; i++) {
        resArr.push(
            ((cost_per_minute[i] * ride_time) + (cost_per_mile[i] * ride_distance)).toFixed(2)
        );
    }
    
    return resArr;
}
