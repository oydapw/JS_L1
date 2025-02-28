function toWeirdCase(str) {
    return str.split(' ').map(word => 
        word.split('').map((char, index) => 
            index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
        ).join('')
    ).join(' ');
}