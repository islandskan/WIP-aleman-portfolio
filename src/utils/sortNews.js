const sortNewsCards = (arr) => {
    const arrayCopy = [...arr];
    const onlineShopItem = arrayCopy.splice(isOnlineShop(arr), 1);
    return arrayCopy.concat(onlineShopItem);
};

const isOnlineShop = (arr) => {
    return arr.findIndex((item) => item.fields.location === 'Ed Art');
};

export { sortNewsCards };
