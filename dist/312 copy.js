"use strict";
function maxCoins1(nums) {
    if (!nums?.length)
        return 0;
    // Declar cache
    let cache = new Map();
    // const toKey = (a: number[]): string => (a.length === 3 ? a.sort().join() : a.join())
    function toKey(a) {
        if (a.length === 3) {
            // To optimize
            return a
                .slice()
                .sort((x, y) => x - y)
                .join();
        }
        return a.join();
    }
    // let keys = new Set<string>()
    // Fill cach
    nums.forEach((val) => {
        cache.set(toKey([1, val, 1]), val);
    });
    return Coins([1, ...nums, 1]);
    function Coins(nums) {
        // // Min nums length ==3
        const n = nums.length;
        // Compute Result
        let val = 0;
        // for (let i = 1; i < n - 1; i++) {
        // 	let left = nums.slice(0, i + 1)
        // 	let right = nums.slice(i, n)
        // 	let vLeft = i < 2 ? 0 : cache.get(toKey(left)) || Coins(left)
        // 	let vRight = n - i < 3 ? 0 : cache.get(toKey(right)) || Coins(right)
        // 	let v = vLeft + nums[0] * nums[i] * nums[n - 1] + vRight
        // 	val = Math.max(val, v)
        // }
        val = nums
            .map((_, i) => {
            let left = nums.slice(0, i + 1);
            let right = nums.slice(i, n);
            let vLeft = i < 2 ? 0 : cache.get(toKey(left)) || Coins(left);
            let vRight = n - i < 3 ? 0 : cache.get(toKey(right)) || Coins(right);
            return vLeft + nums[0] * nums[i] * nums[n - 1] + vRight;
            // val = Math.max(val, v)
        })
            .reduce((max, v) => Math.max(max, v), 0);
        // keys.add(key)
        let key = toKey(nums);
        cache.set(key, val);
        return val;
    }
}
//# sourceMappingURL=312%20copy.js.map