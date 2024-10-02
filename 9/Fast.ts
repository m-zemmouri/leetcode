function isPalindrome_Fast(x: number): boolean {
	// Negative numbers cannot be palindromes
	if (x < 0) return false

	// 0-9 are palindromes
	if (x < 10) return true

	// Numbers ending with 0 (but not 0 itself) cannot be palindromes
	if (x % 10 === 0) return false

	let reversedHalf = 0
	while (x > reversedHalf) {
		reversedHalf = reversedHalf * 10 + (x % 10)
		x = (x / 10) | 0
	}

	// Check if the original number (x) matches the reversed half
	// If the length is odd, we can ignore the middle digit by dividing reversedHalf by 10
	return x === reversedHalf || x === ((reversedHalf / 10) | 0)
}
