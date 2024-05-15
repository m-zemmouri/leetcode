type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue }
type Obj = Record<string, JSONValue> | Array<JSONValue>

function chunk(arr: Obj[], size: number): Obj[][] {
	const len = Math.ceil(arr.length / size)
	return Array.from({ length: len }, (_, index) => arr.slice(index * size, (index + 1) * size))
}
