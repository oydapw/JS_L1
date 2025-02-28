function primeFactors(n) {
    let result = [];
    let factor = 2;
    while (n >= 2) {
        let count = 0;
        while (n % factor === 0) {
            n /= factor;
            count++;
        }
        if (count) result.push(`${factor}${count > 1 ? `**${count}` : ''}`);
        factor++;
    }
    return `(${result.join(')(')})`;
}
