function findMissing(list) {
    let n = list.length;
    let posledov = (list[n - 1] - list[0]) / n;
    for (let i = 1; i < n; i++) {
        if (list[i] - list[i - 1] !== posledov) {
            return list[i - 1] + posledov;
        }
    }
    return null;
}