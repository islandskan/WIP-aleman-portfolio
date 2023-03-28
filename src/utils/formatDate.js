export const formatDate = (date) => {
    const dateItem = date.replaceAll(/-/g, '');

    const dateFormat = {
        // year: dateItem.substr(2, 2),
        month: dateItem.substr(4, 2),
        day: dateItem.substr(6, 2),
    };

    return getFormattedDate(dateFormat);
};

// format July 1, 2023 - August 3, 2023
// format 01.06.23 - 03.08.23
// format 23.06.01 - 23.08.03
// format 01.06.23 | 18:30

const getFormattedDate = (dates) => {
    const { month, day } = dates;
    return `${day}.${month}`;
};
