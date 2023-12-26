function maxCoins(nums: number[]): number {
	if (!nums?.length) return 0
	// Declar cache
	let cache = new Map<string, number>()
	// Add default value 1
	nums = [1, ...nums, 1]

	return Coins(0, nums.length)

	function getVal(start: number, end: number): number {
		if (end - start < 3) return 0
		const key = `${start}-${end}`
		// get val from cache or compute it
		return cache.get(key) || Coins(start, end)
	}

	function Coins(start: number, end: number): number {
		let val: number = 0

		for (let i = start + 1; i < end - 1; i++) {
			const vLeft = getVal(start, i + 1)
			const vRight = getVal(i, end)
			const v = vLeft + nums[start] * nums[i] * nums[end - 1] + vRight
			// get Max val
			if (v > val) val = v
		}
		//Save val in cache
		const key = `${start}-${end}`
		cache.set(key, val)
		return val
	}
}
