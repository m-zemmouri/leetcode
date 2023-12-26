function maxCoins(nums: number[]): number {
	if (!nums?.length) return 0
	// Declar cache
	let cache = new Map<string, number>()
	// Fill cach
	nums.forEach((val) => {
		cache.set([1, val, 1].sort().join(), val)
	})

	const a = [1, ...nums, 1]

	return Coins(a, a.join())

	function getVal(a: number[]): number {
		const key = a.length === 3 ? a.sort().join() : a.join()
		return cache.get(key) || Coins(a, key)
	}

	function Coins(nums: number[], key: string): number {
		let n = nums?.length
		let val: number = 0

		for (let i = 1; i < n - 1; i++) {
			const vLeft = i > 1 ? getVal(nums.slice(0, i + 1)) : 0
			const vRight = n - i > 2 ? getVal(nums.slice(i, n)) : 0
			val = Math.max(val, vLeft + nums[0] * nums[i] * nums[n - 1] + vRight)
		}
		cache.set(key, val)
		return val
	}
}

const nums = [
	70, 53, 55, 58, 46, 3, 75, 69, 30, 75, 79, 41, 93, 92, 37, 90, 74, 68, 69, 80, 67, 1, 48, 46, 66, 50, 26, 45, 56, 36, 98, 12, 41, 39, 83, 63, 70, 75, 40, 8, 41, 43, 61, 37, 68, 27, 0, 11, 12, 20, 79, 24, 60, 52, 11, 74, 12, 51, 76, 12, 32, 61, 0, 79, 44, 50, 28, 13, 85, 67, 92, 93, 15, 77, 70, 5, 2, 50, 19, 9, 69,
	71, 45, 24, 40, 34, 53, 1, 77, 12, 34, 26, 51, 63, 28, 59, 100, 68, 48, 11, 27, 3, 13, 64, 59, 44, 15, 53, 34, 15, 1, 17, 10, 13, 0, 84, 38, 2, 8, 53, 12, 1, 36, 49, 2, 83, 72, 33, 38, 11, 55, 27, 66, 74, 100, 100, 46, 34, 60, 0, 3, 19, 27, 49, 9, 33, 28, 4, 54, 79, 49, 52, 61, 11, 5, 78, 56, 67, 39, 68, 86, 1, 41,
	59, 72, 99, 81, 75, 15, 20, 88, 49, 41, 21, 70, 42, 29, 93, 44, 43, 94, 68, 66, 23, 37, 92, 21, 2, 34, 8, 11, 48, 36, 22, 61, 83, 22, 72, 96, 64, 39, 16, 98, 46, 60, 60, 92, 49, 100, 68, 0, 87, 87, 31, 47, 47, 43, 10, 85, 35, 32, 58, 43, 61, 40, 93, 1, 86, 50, 53, 88, 6, 30, 41, 49, 63, 35, 40, 0, 95, 86, 5, 64,
	62, 1, 17, 24, 30, 61, 18, 57, 97, 99, 7, 39, 64, 73, 17, 72, 8, 25, 82, 3, 18, 13, 27, 61, 18, 17, 17, 94, 63, 35, 65, 18, 96, 9, 92, 51, 73, 81, 89, 13, 22, 77, 84, 17, 73, 77, 4, 27, 61, 71, 10, 25, 30, 16, 16, 64, 100,
]

const v = maxCoins(nums)
console.log(v)
