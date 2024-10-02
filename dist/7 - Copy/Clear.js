export function reverse(x) {
    const isNegative = x < 0;
    let reversed = Math.abs(x).toString().split('').reverse().join('');
    let result = parseInt(reversed) * (isNegative ? -1 : 1);
    if (result < -(2 ** 31) || result > 2 ** 31 - 1)
        return 0;
    return result;
}
//# sourceMappingURL=Clear.js.map