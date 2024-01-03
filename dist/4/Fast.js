"use strict";
function findMedianSortedArrays(nums1, nums2) {
    const l1 = nums1.length;
    const l2 = nums2.length;
    const max1 = nums1[l1 - 1];
    const max2 = nums2[l2 - 1];
    let merged = [];
    let i = 0, j = 0;
    while (i < l1 && j < l2) {
        if (max1 <= nums2[j]) {
            merged.push(...nums1.slice(i));
            i = l1;
            break;
        }
        if (max2 <= nums2[i]) {
            merged.push(...nums2.slice(j));
            j = l2;
            break;
        }
        if (nums1[i] < nums2[j]) {
            merged.push(nums1[i++]);
        }
        else
            merged.push(nums2[j++]);
    }
    let l = merged.push(...nums1.slice(i), ...nums2.slice(j));
    let mid = Math.floor(l / 2);
    if (l % 2 === 0)
        return (merged[mid - 1] + merged[mid]) / 2;
    else
        return merged[mid];
}
findMedianSortedArrays([1, 3], [2]);
//# sourceMappingURL=Fast.js.map