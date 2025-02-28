function bingo(ticket, win) {
    function min(subArray) {
        const [str, num] = subArray;
        for (let char of str) {
            if (char.charCodeAt(0) === num) {
                return true;
            }
        }
        return false;
    }
    let mini = 0;
    for (let subArray of ticket) {
        if (min(subArray)) {
            mini++;
        }
    }
    if (mini >= win) {
        return "Победитель!";
    } else {
        return "Проигравший!";
    }
}
