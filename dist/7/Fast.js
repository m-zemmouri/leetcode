"use strict";
/**
 * Reverses a 32-bit signed integer. Returns 0 if the reversed integer overflows.
 *
 * @param x - The integer to reverse
 * @returns The reversed integer, or 0 if overflow occurs
 */
function reverse(x) {
    // Pre-calculated value of (2^31 / 10) or ((2^31 - 1) / 10)
    // Used for overflow checking before multiplying by 10
    const INT_32_DIV_10 = 214_748_364;
    let result = 0;
    // Store the sign of x and work with its absolute value
    if (x < 0) {
        x = -x;
        while (x !== 0) {
            // Overflow
            if (result > INT_32_DIV_10)
                return 0;
            // Extract last digit
            const pop = x % 10;
            // Overflow for negative values
            if (result === INT_32_DIV_10 && pop > 8)
                return 0;
            // Build the reversed number
            result = result * 10 + pop;
            // Remove the last digit
            x = (x / 10) | 0;
        }
        // Restore the original sign
        return -result;
    }
    while (x !== 0) {
        // Overflow
        if (result > INT_32_DIV_10)
            return 0;
        // console.log('x : ', x)
        // Extract last digit
        const pop = x % 10;
        // console.log('p : ', pop)
        // Overflow for positive values
        if (result === INT_32_DIV_10 && pop > 7)
            return 0;
        // console.log('r : ', result)
        // Build the reversed number
        result = result * 10 + pop;
        // console.log('r : ', result)
        // Remove the last digit
        x = (x / 10) | 0;
    }
    return result;
}
reverse(-2147483412);
//# sourceMappingURL=Fast.js.map