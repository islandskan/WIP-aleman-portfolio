const resizeImg = (card) => {
    const imgSizes = card.fields.projectThumbnail.fields.file.details.image;
    let { height, width } = imgSizes;

    if (height > width) {
        width = 450;
        console.log(`${card.fields.projectTitle}`);
    }

    return { height, width };
};

export { resizeImg };
