function indexToSpan(index: number) {
    if ((index + 9) % 10 == 0) {
        return 2;
    }

    if ((index + 5) % 10 == 0) {
        return 2;
    }

    return 1;
}

export default function () {
    return indexToSpan;
}
