Array.prototype.groupBy = function (fn) {
    return this.reduce((group, item) => {
        const key = fn(item);
        (group[key] = group[key] || []).push(item);
        return group;
    }, {});
};
export {};
//# sourceMappingURL=Fast.js.map