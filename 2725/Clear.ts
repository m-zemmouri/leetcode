export type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue }
export type Fn = (...args: JSONValue[]) => void

export function cancellable(fn: Function, args: any[], t: number): Function {
	let stop = false
	const repeat = () => {
		if (stop) return
		fn(...args)
		setTimeout(() => repeat(), t)
	}
	repeat()
	return () => (stop = true)
}
