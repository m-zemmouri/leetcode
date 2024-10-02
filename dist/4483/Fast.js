/**
 Do not return anything, modify nums in-place instead.
 */
export function sortColors(nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;
    while (mid <= high) {
        if (nums[mid] === 0) {
            // Swap nums[low] and nums[mid]
            ;
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        }
        else if (nums[mid] === 1) {
            mid++;
        }
        else {
            // Swap nums[mid] and nums[high]
            ;
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
}
//# sourceMappingURL=Fast.js.map