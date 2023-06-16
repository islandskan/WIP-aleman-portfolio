const sortCards = (arr) => {
    const arrayCopy = [...arr];
    const onlineShop = extractOnlineStore(arr, arrayCopy);
    const sorted = sorter(arrayCopy);
    return sorted.concat(onlineShop);
};

const isOnlineShop = (arr) => {
    return arr.findIndex((item) => item.fields.location === 'Ed Art');
};

const extractOnlineStore = (arr, arrCopy) => {
    return arrCopy.splice(isOnlineShop(arr), 1);
};

const sorter = (arr) => {
    return arr.sort(
        (a, b) =>
            Date.parse(b.fields.startDate) - Date.parse(a.fields.startDate)
    );
};

export { sortCards };
