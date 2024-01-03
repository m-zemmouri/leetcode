function maxCoins(nums) {
    var v = 0;
    if (!(nums === null || nums === void 0 ? void 0 : nums.length))
        return v;
    v = nums[0];
    if (nums.length == 1)
        return v;
    for (var i = 0; i < nums.length - 1; i++)
        v = v + nums[0] * nums[i] * nums[i + 1];
    v = v + nums[0] * nums[nums.length - 1];
    return v;
}
console.log(maxCoins([3, 1, 5, 8]));
