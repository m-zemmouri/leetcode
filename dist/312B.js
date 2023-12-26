'use strict'
function maxCoins(nums) {
	if (!nums?.length) return 0
	const n = nums.length
	nums = [1, ...nums, 1]
	const dp = Array.from({ length: n + 2 }, () => Array(n + 2).fill(0))
	for (let len = 3; len <= n + 2; len++) {
		for (let left = 0; left <= n + 2 - len; left++) {
			const right = left + len - 1
			for (let lastBurst = left + 1; lastBurst < right; lastBurst++) {
				const coins = dp[left][lastBurst] + nums[left] * nums[lastBurst] * nums[right] + dp[lastBurst][right]
				if (dp[left][right] < coins) dp[left][right] = coins
			}
		}
	}
	return dp[0][n + 1]
}
//# sourceMappingURL=312B.js.map
