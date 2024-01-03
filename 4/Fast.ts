function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
	const l1 = nums1.length
	const l2 = nums2.length
	const l3 = l1 + l2
	const merged: number[] = new Array(l3)

	let i = 0,
		j = 0,
		k = 0

	while (i < l1 && j < l2)
		if (nums1[i] < nums2[j]) merged[k++] = nums1[i++]
		else merged[k++] = nums2[j++]

	while (i < l1) merged[k++] = nums1[i++]

	while (j < l2) merged[k++] = nums2[j++]

	const mid = Math.floor(l3 / 2)
	return l3 % 2 ? merged[mid] : (merged[mid - 1] + merged[mid]) / 2
}
