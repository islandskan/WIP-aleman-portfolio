const setNewsDates = (startDate, endDate) => {
    const formatStartDate = new Date(startDate).getTime();
    const formatEndDate = new Date(endDate).getTime();

    const newsInfoTxt = checkDates(formatStartDate, formatEndDate);
    return formatNewsInfo(newsInfoTxt);
};

const formatNewsInfo = (txt) => {
    if (!txt) return;
    const firstLetterUpperCase = `${txt.slice(0, 1).toUpperCase()}${txt.slice(
        1
    )}`;
    return firstLetterUpperCase;
};

const checkDates = (start, end) => {
    const current = new Date().getTime();
    let dateInfo;

    if ((start > current && end > current) || (start > current && !end)) {
        dateInfo = 'upcoming';
    } else if (
        (start < current && end > current) ||
        (start < current && !end)
    ) {
        dateInfo = 'current';
    } else if (
        (start < current && end < current) ||
        (!start && end < current)
    ) {
        dateInfo = 'archived';
    } else {
        dateInfo = '';
    }
    return dateInfo;
};

export { setNewsDates };
