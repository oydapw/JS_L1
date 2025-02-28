function expandedForm(num) {
    let digits = String(num).split('');
    let res = [];
    for (let i = 0; i < digits.length; i++) {
        if (digits[i] !== '0') {
            res.push(digits[i] + '0'.repeat(digits.length - i - 1));
        }
    }
    return res.join(' + ');
}