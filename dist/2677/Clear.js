export function chunk(arr, size) {
    const len = Math.ceil(arr.length / size);
    return Array.from({ length: len }, (_, index) => arr.slice(index * size, (index + 1) * size));
}
//# sourceMappingURL=Clear.js.map