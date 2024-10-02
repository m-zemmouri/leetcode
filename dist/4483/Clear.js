/**
 Do not return anything, modify nums in-place instead.
 */
export function sortColors(nums) {
    const n = nums.length;
    let n0 = 0, n1 = 0, i = 0;
    while (i < n) {
        if (nums[i] === 0)
            n0++;
        else if (nums[i] === 1)
            n1++;
        i++;
    }
    n1 += n0;
    while (i > n1)
        nums[--i] = 2;
    while (i > n0)
        nums[--i] = 1;
    while (i > 0)
        nums[--i] = 0;
}
// let nums = [2, 0, 2, 1, 1, 0]
// sortColors(nums)
// console.log(nums)
//# sourceMappingURL=Clear.js.map