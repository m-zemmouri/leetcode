function maxCoins(nums: number[]): number {
	if (!nums?.length) return 0
	// Declar cache
	let cache = new Map<number, number>()
	// Add default value 1
	nums = [1, ...nums, 1]
	const n = nums.length
	return Coins(0, nums.length)

	function Coins(start: number, end: number): number {
		if (end - start < 3) return 0
		const key = start + n * (end - start) // start < end < n
		// get val from cache or compute it
		let val = cache.get(key)
		if (val === undefined) {
			val = Compute(start, end)
			//Save val in cache
			cache.set(key, val)
		}
		return val
	}

	function Compute(start: number, end: number): number {
		let val: number = 0

		for (let i = start + 1; i < end - 1; i++) {
			const vLeft = Coins(start, i + 1)
			const vRight = Coins(i, end)
			const v = vLeft + nums[start] * nums[i] * nums[end - 1] + vRight
			// get Max val
			if (val < v) val = v
		}

		return val
	}
}
