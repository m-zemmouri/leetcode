"use strict";
function maxCoins(a) {
    if (!a?.length)
        return 0;
    // Declar cache
    let cache = new Map();
    // Fill cach
    // nums0.forEach((val) => {
    // 	cache.set([1, val, 1].sort().join(), val)
    // })
    a = [1, ...a, 1];
    return Coins(0, a.length);
    function getVal(start, end) {
        if (end - start < 3)
            return 0;
        const key = `${start}-${end}`;
        return cache.get(key) || Coins(start, end);
    }
    function Coins(start, end) {
        let val = 0;
        for (let i = start + 1; i < end - 1; i++) {
            const vLeft = getVal(start, i + 1);
            const vRight = getVal(i, end);
            const v = a[start] * a[i] * a[end - 1];
            val = Math.max(val, vLeft + v + vRight);
        }
        const key = `${start}-${end}`;
        cache.set(key, val);
        return val;
    }
}
const nums5 = [1, 5];
const v = maxCoins(nums5);
console.log(v);
//# sourceMappingURL=312.js.map