"use strict";
function findMedianSortedArrays(nums1, nums2) {
    const l1 = nums1.length;
    const l2 = nums2.length;
    const l3 = l1 + l2;
    let i = 0;
    let j = 0;
    let k = 0;
    const mid = Math.ceil(l3 / 2);
    let mid_inNum1 = false;
    if (l3 % 2) {
        while (k < mid) {
            k++;
            if (i === l1) {
                j++;
                mid_inNum1 = false;
                continue;
            }
            if (j === l2) {
                i++;
                mid_inNum1 = true;
                continue;
            }
            if (nums1[i] < nums2[j]) {
                i++;
                mid_inNum1 = true;
            }
            else {
                j++;
                mid_inNum1 = false;
            }
        }
        return mid_inNum1 ? nums1[i - 1] : nums2[j - 1];
    }
    let mid1_inNum1 = false;
    while (k <= mid) {
        mid1_inNum1 = mid_inNum1;
        k++;
        if (i === l1) {
            j++;
            mid_inNum1 = false;
            continue;
        }
        if (j === l2) {
            i++;
            mid_inNum1 = true;
            continue;
        }
        if (nums1[i] < nums2[j]) {
            i++;
            mid_inNum1 = true;
        }
        else {
            j++;
            mid_inNum1 = false;
        }
    }
    const v1 = mid1_inNum1 ? nums1[i - 1] : nums2[j - 1];
    const v2 = mid_inNum1 ? nums1[i - 1] : nums2[j - 1];
    return (v1 + v2) / 2;
}
findMedianSortedArrays([], [2, 3]);
//# sourceMappingURL=Fast.js.map