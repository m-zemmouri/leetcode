function largestRectangleArea2(heights: number[]): number {
	if (!heights?.length) return 0

	let len: number = heights.length

	let result: number = Math.max(...heights)
	// @ts-ignore
	let v0: number = heights.shift()
	let v1: number = 0
	// let cache: number[] = []

	// heights.map((height, index) => {
	// 	cache[index] = height
	// 	result = Math.max(result, height)
	// })
	let l = 1
	let i = 0
	len--
	while (heights.length) {
		// @ts-ignore
		v1 = heights.shift()
		const minHeight = Math.min(v0, v1)
		result = Math.max(result, l * minHeight)
		heights.push(minHeight)
		v0 = v1
		i++
		if (i > len) break
		if (i == len) {
			len--
			i = 0
			l++
		}
	}

	return result
}

let h2 = [1, 2, 2]
let v2 = largestRectangleArea2(h2)
console.log(v2)
