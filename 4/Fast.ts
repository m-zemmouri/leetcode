function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
	const l1 = nums1.length
	const l2 = nums2.length

	const max1 = nums1[l1 - 1]
	const max2 = nums2[l2 - 1]

	let merged: number[] = []
	let i: number = 0,
		j: number = 0

	while (i < l1 && j < l2) {
		if (nums1[i] >= max2) {
			merged.push(...nums2.slice(j))
			j = l2
			break
		}
		if (nums2[j] >= max1) {
			merged.push(...nums1.slice(i))
			i = l1
			break
		}
		if (nums1[i] < nums2[j]) {
			merged.push(nums1[i++])
		} else merged.push(nums2[j++])
	}
	let l: number = merged.push(...nums1.slice(i), ...nums2.slice(j))

	let mid: number = Math.floor(l / 2)
	if (l % 2 === 0) return (merged[mid - 1] + merged[mid]) / 2
	else return merged[mid]
}
