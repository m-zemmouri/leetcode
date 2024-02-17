"use strict";
function largestRectangleArea2(heights) {
    if (!heights?.length)
        return 0;
    let len = heights.length;
    let result = 0;
    let v = 0;
    let l = 1;
    while (heights.length) {
        // @ts-ignore
        v = heights.shift();
        result = Math.max(result, l * v);
        len--;
        for (let i = 0; i < len; i++) {
            heights.push(Math.min(v, heights[0]));
            // @ts-ignore
            v = heights.shift();
            result = Math.max(result, l * v);
        }
        l++;
    }
    return result;
}
let h2 = [2, 1, 5, 6, 2, 3];
let v2 = largestRectangleArea2(h2);
console.log(v2);
//# sourceMappingURL=Fast2.js.map