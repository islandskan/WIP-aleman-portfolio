export const hasDates = (type, startDate, endDate) => {
    if (startDate || endDate) {
        const hasStartDate = startDate && <p>{startDate}</p>;
        const hasEndDate = endDate && <p>{endDate}</p>;
        return [hasStartDate, hasEndDate];
    } else {
        const typeStr = type.charAt(0).toUpperCase() + type.slice(1);
        return <p>{typeStr}</p>;
    }
};
