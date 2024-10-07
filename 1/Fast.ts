function twoSum(nums: number[], target: number): number[] {
	const m = new Map()
	for (let i = 0; i < nums.length; ++i) {
		const comp = target - nums[i]
		if (m.has(comp)) return [m.get(comp), i]
		m.set(nums[i], i)
	}
}

// function twoSum(nums: number[], target: number): number[] {
// 	// Step 1: Map each value with its index
// 	const m = nums.map((value, index) => ({ value, index })).sort((a, b) => a.value - b.value) // Sort by the value
// 	let i = 0
// 	let j = nums.length - 1

// 	while (m[i].value + m[j].value != target) {
// 		if (m[i].value + m[j].value < target) i++
// 		if (m[i].value + m[j].value > target) j--
// 	}

// 	return [m[i].index, m[j].index]
// }
