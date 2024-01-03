function findMedianSortedArrays_Clear(nums1: number[], nums2: number[]): number {
	const merged: number[] = [...nums1, ...nums2].sort((a, b) => a - b)
	const mid: number = Math.floor(merged.length / 2)

	return merged.length % 2 === 0 ? (merged[mid - 1] + merged[mid]) / 2 : merged[mid]
}
