type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue }
type Fn = (...args: JSONValue[]) => void

function cancellable_TimeOut(fn: Fn, args: JSONValue[], t: number): () => void {
	const timerId = setTimeout(() => fn(...args), t)
	return () => clearTimeout(timerId)
}
