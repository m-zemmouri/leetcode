function maxCoins(nums: number[]): number {
	if (!nums?.length) return 0
	// Declar cache
	let cache = new Map<string, number>()
	// Fill cach
	nums.forEach((val) => {
		cache.set([1, val, 1].sort().join(), val)
	})

	return Coins([1, ...nums, 1])

	function Coins(nums: number[]): number {
		// // Min nums length ==3
		let n = nums?.length
		// if (n < 3) return 0

		// Check Result if in cache // To optimize
		let key: string = n === 3 ? nums.sort().join() : nums.join()

		// if (cache.has(key)) return cache.get(key) || 0

		// Compute Result
		let val: number = 0

		for (let i = 1; i < n - 1; i++) {
			let vLeft = 0
			if (i > 1) {
				let left = nums.slice(0, i + 1)
				let kLeft = left.length === 3 ? left.sort().join() : left.join()
				vLeft = cache.get(kLeft) || Coins(left)
			}
			let vRight = 0
			if (n - i > 2) {
				let right = nums.slice(i, n)
				let kRight = right.length === 3 ? right.sort().join() : right.join()
				vRight = cache.get(kRight) || Coins(right)
			}
			let v = vLeft + nums[0] * nums[i] * nums[n - 1] + vRight
			val = Math.max(val, v)
		}

		cache.set(key, val)
		return val
	}
}
let nums = [8, 3, 4, 3, 5, 0, 5, 6, 6, 2, 8, 5, 6, 2, 3, 8, 3, 5, 1, 0, 2]
nums = [3, 1, 5, 8]
let v = maxCoins(nums)
console.log(v)
