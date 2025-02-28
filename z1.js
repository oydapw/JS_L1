function hasTwoCubeSums(n)
{
    for (let a = 1; a ** 3 < n; a++) {
        for (let b = 1; b ** 3 < n; b++) {
            if (a !== b && a ** 3 + b ** 3 === n) {
                for (let c = 1; c ** 3 < n; c++) {
                    for (let d = 1; d ** 3 < n; d++) {
                        if (c !== d && c !== a && c !== b && d !== a && d !== b && c ** 3 + d ** 3 === n) {
                            return true;
                        }
                    }
                }
            }
        }
    }
    return false;
}
