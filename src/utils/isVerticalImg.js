export function isVerticalImg(h, w, txt) {
    const diff = Math.abs(h - w);
    // console.log(`${txt}: ${Math.abs(h - w)}`);
    // console.log(`${txt}: ${diff <= 300}`);
    let className = 'landscapeImg';
    if (h > w && diff > 350) {
        className = 'portraitImg';
        // console.log(`${txt}'s diff is between height and width: ${diff}`);
        return { className };
    } else {
        // console.log(`${txt}'s diff is between height and width: ${diff}`);
        return { className };
    }
}
