export const delay = (ms: number) =>
	new Promise(resolve => setTimeout(resolve, ms))

export const extend = function <T, U>(first: T, second: U): T & U {
    let result = <T & U>{}
    for (let id in first) {
        (<any>result)[id] = (<any>first)[id]
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id]
        }
    }
    return result
}

export const padLeft = function(value: string, padding: string | number) {
	if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value
    }
    if (typeof padding === "string") {
        return padding + value
    }
}