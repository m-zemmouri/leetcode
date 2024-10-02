export {}

declare global {
	interface Array<T> {
		groupBy(fn: (item: T) => string): Record<string, T[]>
	}
}

Array.prototype.groupBy = function (fn) {
	return this.reduce((group, item) => {
		const key = fn(item)
		;(group[key] = group[key] || []).push(item)
		return group
	}, {})
}
