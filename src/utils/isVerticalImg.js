export function isVerticalImg(h, w, txt) {
    const diff = Math.abs(h - w);
    // (`${txt}: ${Math.abs(h - w)}`);
    // (`${txt}: ${diff <= 300}`);
    let className = 'landscapeImg';
    if (h > w && diff > 350) {
        className = 'portraitImg';
        // (`${txt}'s diff is between height and width: ${diff}`);
        return { className };
    } else {
        // (`${txt}'s diff is between height and width: ${diff}`);
        return { className };
    }
}
