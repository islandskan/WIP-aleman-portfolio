const resizeImg = (card) => {
    const imgSizes = card.fields.projectThumbnail.fields.file.details.image;
    let { height, width } = imgSizes;
    if (height > width) {
        height = width;
        width *= 0.3;
        console.log(`${card.fields.projectTitle}`);
    }

    return { height, width };
};

export { resizeImg };
