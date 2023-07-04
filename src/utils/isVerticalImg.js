export function isVerticalImg(h, w) {
    const diff = Math.abs(h - w);
    let newHeight = h;
    let newWidth = w;
    let className = 'landscapeImg';
    if (h > w && diff >= 300) {
        newHeight = Math.floor((newHeight / 3) * 2);
        newWidth = Math.floor((newWidth / 3) * 2);
        className = 'portraitImg';
        return { newHeight, newWidth, className };
    } else {
        newHeight = Math.floor(newHeight);
        newWidth = Math.floor(newWidth);
        return { newHeight, newWidth, className };
    }
}
