export type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue }
export type Obj = Record<string, JSONValue> | JSONValue[]

function isEmpty(obj: Obj): boolean {
	return !Object.keys(obj).length
}
