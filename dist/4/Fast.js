"use strict";
function findMedianSortedArrays(nums1, nums2) {
    const l1 = nums1.length;
    const l2 = nums2.length;
    const l3 = l1 + l2;
    const mid2 = Math.floor(l3 / 2);
    if (l3 % 2) {
        let i = Math.min(Math.floor(l1 / 2), Math.floor(l2 / 2));
        let j = i;
        let k = i * 2;
        let v = 0;
        while (k <= mid2) {
            k++;
            if (i === l1) {
                v = nums2[j++];
                continue;
            }
            if (j === l2 || nums1[i] < nums2[j])
                v = nums1[i++];
            else
                v = nums2[j++];
        }
        return v;
    }
    let i = 0;
    let j = 0;
    let k = 0;
    let mid2_inNum1 = false;
    let mid1_inNum1 = false;
    while (k <= mid2) {
        mid1_inNum1 = mid2_inNum1;
        k++;
        if (i === l1) {
            j++;
            mid2_inNum1 = false;
            continue;
        }
        if (j === l2 || nums1[i] < nums2[j]) {
            i++;
            mid2_inNum1 = true;
        }
        else {
            j++;
            mid2_inNum1 = false;
        }
    }
    i--;
    j--;
    if (mid1_inNum1 != mid2_inNum1)
        return (nums1[i] + nums2[j]) / 2;
    if (mid1_inNum1)
        return (nums1[i - 1] + nums1[i]) / 2;
    return (nums2[j - 1] + nums2[j]) / 2;
}
const result = findMedianSortedArrays([1, 2], [3, 4, 5]);
console.log(result);
//# sourceMappingURL=Fast.js.map