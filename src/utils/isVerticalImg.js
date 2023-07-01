export function isVerticalImg(h, w, url) {
    let height;
    // let width;
    if (h > w) {
        height = Math.floor((h / 3) * 2);
        // width = (w / 3) * 2;
    }
    return `${height}, ${url}`;
}
