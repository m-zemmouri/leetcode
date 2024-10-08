export function largestRectangleArea(heights) {
    if (!heights?.length)
        return 0;
    const len = heights.length;
    let result = 0;
    for (let start = 0; start < len; start++) {
        for (let end = start + 1; end < len + 1; end++) {
            const m = Math.min(...heights.slice(start, end));
            const l = end - start;
            const v = m * l;
            result = Math.max(result, v);
        }
    }
    return result;
}
// let h0 = [2, 4]
// let v0 = largestRectangleArea_Clear(h0)
// console.log(v0)
//# sourceMappingURL=Clear.js.map