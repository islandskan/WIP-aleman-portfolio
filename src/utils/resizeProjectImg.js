const resizeImg = (card) => {
    const imgSizes = card.fields.projectThumbnail.fields.file.details.image;
    let { height, width } = imgSizes;

    return { height, width };
};

export { resizeImg };
