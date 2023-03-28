// function to slice out part of the content that has the images, and thenmap over image collections fot the projects

export function setImageCollection(response, sliceIndex) {
    const { content } = response.fields;
    return content.slice(sliceIndex);
}
