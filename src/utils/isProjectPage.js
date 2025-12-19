const isProjectPage = (page) => {
    const regex = /works\//gi;
    const matchedPage = page.match(regex);
    return matchedPage;
};

export { isProjectPage };
