export function isVerticalImg(h, w) {
    const diff = Math.abs(h - w);
    let className = 'landscapeImg';
    if (h > w && diff >= 300) {
        className = 'portraitImg';
        return { className };
    } else {
        return { className };
    }
}
