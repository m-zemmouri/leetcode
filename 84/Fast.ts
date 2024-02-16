function largestRectangleArea(heights: number[]): number {
	if (!heights?.length) return 0
	const len: number = heights.length
	let result: number = 0
	
	const cache: number[][] = Array.from({ length: len }, (_, index) => {
		const height = heights[index]
		result = Math.max(result, height)
		return [height]
	})

	for (let l = 2; l <= len; l++) {
		for (let start = 0; start <= len - l; start++) {
			const end = start + l - 1
			const v1 = cache[start][end - 1]
			const v2 = cache[start + 1][end]
			const minHeight = Math.min(v1, v2)
			cache[start][end] = minHeight
			result = Math.max(result, l * minHeight)
		}
	}
	return result
}
let h = [2, 1, 5]
let v = largestRectangleArea(h)
console.log(v)
