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
	const max_pop = x < 0 ? 8 : 7

	let result = 0

	// Work with the absolute value of x
	let absX = Math.abs(x)

	while (absX !== 0) {
		const pop = absX % 10
		// Reduce absX without subtraction
		const nextX = (absX / 10) | 0

		// Overflow check
		if (result > INT_32_DIV_10 || (result === INT_32_DIV_10 && pop > max_pop)) return 0

		// Build the reversed number
		result = result * 10 + pop
		absX = nextX // Update absX for the next iteration
	}

	return x < 0 ? -result : result // Restore the original sign
}
