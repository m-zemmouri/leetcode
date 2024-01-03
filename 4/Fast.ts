function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
	const l1 = nums1.length
	const l2 = nums2.length
	const l3 = l1 + l2

	let i: number = 0
	let j: number = 0
	let k: number = 0
	const mid2 = Math.floor(l3 / 2)
	let mid2_inNum1: boolean = false
	if (l3 % 2) {
		while (k <= mid2) {
			k++
			if (i === l1) {
				j++
				mid2_inNum1 = false
				continue
			}
			if (j === l2) {
				i++
				mid2_inNum1 = true
				continue
			}
			if (nums1[i] < nums2[j]) {
				i++
				mid2_inNum1 = true
			} else {
				j++
				mid2_inNum1 = false
			}
		}
		return mid2_inNum1 ? nums1[i - 1] : nums2[j - 1]
	}
	let mid1_inNum1: boolean = false
	while (k <= mid2) {
		mid1_inNum1 = mid2_inNum1
		k++
		if (i === l1) {
			j++
			mid2_inNum1 = false
			continue
		}
		if (j === l2) {
			i++
			mid2_inNum1 = true
			continue
		}
		if (nums1[i] < nums2[j]) {
			i++
			mid2_inNum1 = true
		} else {
			j++
			mid2_inNum1 = false
		}
	}
	const index: number = mid1_inNum1 == mid2_inNum1 ? 1 : 0
	const v1 = mid1_inNum1 ? nums1[i - 1 - index] : nums2[j - 1 - index]
	const v2 = mid2_inNum1 ? nums1[i - 1] : nums2[j - 1]
	return (v1 + v2) / 2
}
