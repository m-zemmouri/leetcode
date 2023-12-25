function maxCoins(nums: number[]): number {
	let n = nums?.length

	if (!n) return 0
	let cache = new Map<string, number>()
	let keys = new Set<string>()
	// Fill cach
	// for (let i = 0; i < n; i++) cache.set(`1, ${nums[i]}, 1`, nums[i])

	let newArr: number[] = [1, ...nums, 1]
	return Coins(newArr)

	function Coins(nums: number[]): number {
		// // Min nums length ==3
		// let n = nums?.length
		// if (n < 3) return 0

		// Check Result if in cache
		let key: string = nums?.join(',')
		if (keys.has(key)) return cache.get(key) || 0
		// Compute Result
		let val: number = 0
		if (n === 3) val = nums[0] * nums[1] * nums[2]
		else
			for (let i = 1; i < n - 1; i++) {
				val = Math.max(val, nums[i - 1] * nums[i] * nums[i + 1] + Coins(remove(nums, i)))
			}

		keys.add(key)
		cache.set(key, val)
		return val

		function remove(nums: number[], i: number): number[] {
			let a = [...nums]
			a.splice(i, 1)
			return a
		}
	}
}
let nums = [8, 3, 4, 3, 5, 0, 5, 6, 6, 2, 8, 5, 6, 2, 3, 8, 3, 5, 1, 0, 2]
nums = [3, 1, 5, 8]
console.log(maxCoins(nums))
