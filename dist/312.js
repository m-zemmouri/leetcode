"use strict";
function maxCoins(nums) {
    let n = nums?.length;
    if (!n)
        return 0;
    let cache = new Map();
    let newArr = [1, ...nums, 1];
    return Coins(newArr);
    function Coins(nums) {
        // Min nums length ==3
        let n = nums?.length;
        if (n < 3)
            return 0;
        // Check Result if in cache
        let key = nums?.join(',');
        if (cache.has(key)) {
            console.log(key + ':' + cache.get(key));
            return cache.get(key) || 0;
        }
        // Compute Result
        let val = 0;
        if (n === 3)
            val = nums[0] * nums[1] * nums[2];
        else
            for (let i = 1; i < n - 1; i++) {
                val = Math.max(val, nums[i - 1] * nums[i] * nums[i + 1] + Coins(remove(nums, i)));
            }
        cache.set(key, val);
        return val;
        function remove(nums, i) {
            let a = [...nums];
            a.splice(i, 1);
            return a;
        }
    }
}
let nums = [8, 3, 4, 3, 5, 0, 5, 6, 6, 2, 8, 5, 6, 2, 3, 8, 3, 5, 1, 0, 2];
nums = [3, 1, 5, 8];
console.log(maxCoins(nums));
//# sourceMappingURL=312.js.map