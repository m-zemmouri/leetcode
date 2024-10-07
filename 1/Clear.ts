function twoSum_Clear(nums: number[], target: number): number[] {
	for (let i = 0; i < nums.length; i++) for (let j = nums.length - 1; i < j; j--) if (nums[i] + nums[j] == target) return [i, j]
}
