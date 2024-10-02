// types.ts
export type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue }
export type Obj = Record<string, JSONValue> | Array<JSONValue>

export function chunk(arr: Obj[], size: number): Obj[][] {
	const len = Math.ceil(arr.length / size)
	return Array.from({ length: len }, (_, index) => arr.slice(index * size, (index + 1) * size))
}
