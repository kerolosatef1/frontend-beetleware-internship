import { Result, Ok, Err } from "./result";
export function safeMap(arr, mapper) {
    try {
        const out = [];
        for (let i = 0; i < arr.length; i++) {
            out.push(mapper(arr[i], i));
        }
        return Ok(out);
    }
    catch (e) {
        return Err(String(e));
    }
}
export function safeFilter(arr, predicate) {
    try {
        const out = [];
        for (let i = 0; i < arr.length; i++) {
            if (predicate(arr[i], i))
                out.push(arr[i]);
        }
        return Ok(out);
    }
    catch (e) {
        return Err(String(e));
    }
}
//# sourceMappingURL=helpers.js.map