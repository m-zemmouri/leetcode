/**
 * Reverses a 32-bit signed integer. Returns 0 if the reversed integer overflows.
 *
 * @param x - The integer to reverse
 * @returns The reversed integer, or 0 if overflow occurs
 */
function reverse(x: number): number {
	// Pre-calculated value of (2^31 / 10) or ((2^31 - 1) / 10)
	// Used for overflow checking before multiplying by 10
	const INT_32_DIV_10: number = 214_748_364

	let result = 0
	// Store the sign of x and work with its absolute value
	if (x < 0) {
		x = Math.abs(x)

		while (x !== 0) {
			// Extract last digit
			const pop = x % 10

			// Remove the last digit
			x = ((x - pop) / 10) | 0

			// Overflow for negative values
			if (result > INT_32_DIV_10 || (result === INT_32_DIV_10 && pop > 8)) return 0

			// Build the reversed number
			result = result * 10 + pop
		}
		// Restore the original sign
		return -result
	}

	while (x !== 0) {
		// Extract last digit
		const pop = x % 10

		// Remove the last digit
		x = ((x - pop) / 10) | 0

		// Overflow for positive values
		if (result > INT_32_DIV_10 || (result === INT_32_DIV_10 && pop > 7)) return 0

		// Build the reversed number
		result = result * 10 + pop
	}

	return result
}
