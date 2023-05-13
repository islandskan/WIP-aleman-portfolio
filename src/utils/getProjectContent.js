const getCardImg = (card) => {
    const imgSizes = card.fields.projectThumbnail.fields.file.details.image;
    let { height, width } = imgSizes;

    return { height, width };
};

// const getProjectContent = (res) => {
//     // const { title, year, content, slug } = res.fields;
//     res.map((project) => {
//         const { projectLinkUrl, projectLinksTitle, startYear, endYear } =
//             project.fields;

//         // projectLinksUnderMenu,
//         console.log(projectLinkUrl, projectLinksTitle, startYear, endYear);
//     });
// };

// extract images from projects
const getProjectImg = (content) => {
    return;
};

// extracts titles from projects

const getProjectTitle = (title) => {
    return;
};

// extract intro texts from projects
const getProjectTxt = (content) => {
    return content[0].fields.textParagraph;
};

// extract videos from projects
const getProjectVideo = (videoContent) => {
    return;
};

// extract pdfs from projects
const getProjectPdf = (response) => {
    return;

    // const artistBodyText = artistBody.fields.formattedText;
};

// extract links from projects
const getProjectLink = (content) => {
    return;
};

export {
    getCardImg,
    getProjectImg,
    getProjectTitle,
    getProjectTxt,
    getProjectVideo,
    getProjectLink,
    getProjectPdf,
    // getProjectContent,
};
