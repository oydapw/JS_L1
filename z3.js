function whatCentury(year) {
    const intYear = Number.parseInt(year);
    const century = Math.ceil(intYear / 100);
    const suffixes = ['th', 'st', 'nd', 'rd'];
    if ([11, 12, 13].includes(century % 100)) {
        return `${century}th`;
    }
    let index;
    if (century % 10 < 4) {
        index = century % 10;
    } else {
        index = 0;
    }    
    return `${century}${suffixes[index]}`;
}