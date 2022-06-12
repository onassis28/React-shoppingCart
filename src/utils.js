export const sortByDate = (a, b) => {
    return a.date - b.date;
};

export const sortByName = (a, b) => {
    if (a.text.toLowerCase() > b.text.toLowerCase()) {
        return 1;
    } else if (b.text.toLowerCase() > a.text.toLowerCase()) {
        return -1;
    } else {
        return 0;
    }
};