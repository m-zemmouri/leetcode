Array.prototype.groupBy = function (fn) {
    let result = {};
    const size = this.length;
    for (let i = 0; i < size; i++) {
        const key = fn(this[i]); // Apply the function to the current element
        result[key] ||= []; // Initialize the array if it doesn't exist
        result[key].push(this[i]); // Push the current element to the corresponding array
    }
    return result;
};
export {};
//# sourceMappingURL=Clear.js.map