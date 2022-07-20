function distanceFromHqInBlocks(blocks) {
    const hq = 42
    if (blocks >= hq) {
        return blocks - hq
    } else if (blocks <= hq) {
        return hq - blocks
    }

}
function distanceFromHqInFeet(blocks) {
    const hq = 42
    if (blocks >= hq) {
        return ((blocks - hq) * 264)
    } else if (blocks <= hq) {
        return ((hq - blocks) * 264)
    }

}
function distanceTravelledInFeet(start, end) {
    if (start >= end) {
        return ((start - end) * 264)
    } else if (start <= end) {
        return ((end - start) * 264)
    }

}
function calculatesFarePrice(start, end) {
    // if (start >= end) {
    //     return ((start - end) * 264)
    // } else if (start <= end) {
    //     return ((end - start) * 264)
    // }
    switch (start, end) {
        case ((start - end) * 264) < 400:
            return 0;
        case ((end - start) * 264) < 400:
            return 0;
        case ((start - end) * 264) >= 400 && ((start - end) * 264) <= 2000:
            return (start, end * 0.02)
        case ((end - start) * 264) >= 400 && ((end - start) * 264) <= 2000:
            return (start, end * 0.02)
        case ((start - end) * 264) > 2000 && ((start - end) * 264) < 2500:
            return 25;
        case ((end - start) * 264) > 2000 && ((end - start) * 264) < 2500:
            return 25;
        case ((start - end) * 264) > 2500:
            return 'cannot travel that far'
        case ((end - start) * 264) > 2500:
            return 'cannot travel that far'
    }
}