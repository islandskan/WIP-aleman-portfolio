export const setIndex = (content, propName) => {
    const findIndex = content.findIndex((item) => propName in item.fields);
    if (findIndex !== -1) {
        return findIndex;
    }
    // return;
};

function getItem(items) {
    if (!items) {
        throw new Error('Empty');
    }
}

export const setContent = (content, propName) => {
    return content.filter((item) => propName in item.fields);
    // console.log(content.filter((item) => propName in item.fields));
};
