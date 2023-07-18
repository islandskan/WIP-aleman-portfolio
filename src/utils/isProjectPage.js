const isProjectPage = (page) => {
    const regex = /works\//gi;
    return page.match(regex);
};

export { isProjectPage };
