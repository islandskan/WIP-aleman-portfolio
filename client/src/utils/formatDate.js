export const formatDate = (date) => {
    const dateItem = date.replaceAll(/-/g, '');

    const dateFormat = {
        // year: dateItem.substr(2, 2),
        month: dateItem.substr(4, 2),
        day: dateItem.substr(6, 2),
    };

    return getFormattedDate(dateFormat);
};

const getFormattedDate = (dates) => {
    const { month, day } = dates;
    return `${day}.${month}`;
};
