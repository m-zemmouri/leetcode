export type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue }
export type Fn = (...args: JSONValue[]) => void

export function cancellable_TimeOut(fn: Fn, args: JSONValue[], t: number): () => void {
	const timerId = setTimeout(() => fn(...args), t)
	return () => clearTimeout(timerId)
}
