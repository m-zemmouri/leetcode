function maxCoins(nums: number[]): number {
	let n = nums?.length

	if (!n) return 0
	// Declar cache
	let cache = new Map<string, number>()
	let keys = new Set<string>()
	// Fill cach
	nums.forEach((val) => {
		let key: string = [1, val, 1].sort().join()
		keys.add(key)
		cache.set(key, val)
	})

	let newArr: number[] = [1, ...nums, 1]
	return Coins(newArr)

	function Coins(nums: number[]): number {
		// // Min nums length ==3
		let n = nums?.length
		if (n < 3) return 0

		// To optimize
		if (n === 3) nums = nums.sort()

		// Check Result if in cache
		let key: string = nums.join()
		if (keys.has(key)) return cache.get(key) || 0

		// Compute Result
		let val: number = 0
		// if (n === 3) val = nums[0] * nums[1] * nums[2]
		// else
		for (let i = 1; i < n - 1; i++) {
			let left = nums.slice(0, i + 1)
			let right = nums.slice(i, n)
			// let v = Coins(left) + nums[i] + Coins(right)
			let v = Coins(left) + nums[0] * nums[i] * nums[n - 1] + Coins(right)
			val = Math.max(val, v)
		}

		keys.add(key)
		cache.set(key, val)
		return val
	}
}
let nums = [8, 3, 4, 3, 5, 0, 5, 6, 6, 2, 8, 5, 6, 2, 3, 8, 3, 5, 1, 0, 2]
nums = [3, 1, 5, 8]
let v = maxCoins(nums)
console.log(v)
