function lateRide(n) {
    const hours1 = Number(parseInt(n / 60).toString()[0]) || 0;
    const hours2 = Number(parseInt(n / 60).toString()[1]) || 0;
    const mins1 = Number(parseInt(n % 60).toString()[0]) || 0;
    const mins2 = Number(parseInt(n % 60).toString()[1]) || 0;
    
    return hours1 + hours2 + mins1 + mins2;
}
