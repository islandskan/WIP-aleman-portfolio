export const setIndex = (content, propName) => {
    const findIndex = content.findIndex((item) => propName in item.fields);
    if (findIndex !== -1) {
        return findIndex;
    }
    // return;
};

export const setContent = (content, propName) => {
    return content.filter((item) => propName in item.fields);
};
