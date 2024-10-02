export {}

declare global {
	interface Array<T> {
		groupBy(fn: (item: T) => string): Record<string, T[]>
	}
}

Array.prototype.groupBy = function (fn) {
	let result: Record<string, number[]> = {}
	const size = this.length
	for (let i = 0; i < size; i++) {
		const key = fn(this[i]) // Apply the function to the current element
		result[key] ||= [] // Initialize the array if it doesn't exist
		result[key].push(this[i]) // Push the current element to the corresponding array
	}
	return result
}
