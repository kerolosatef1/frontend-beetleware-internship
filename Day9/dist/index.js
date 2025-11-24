//rest patern وبعد كده تعالي ناخد نفس فكرة ال challenge بتاعت ال usememo لكن ب typeSCRIPT
function sum(...numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
}
console.log(sum(1, 2, 3));
console.log(sum(5, 10, 15, 20));
import { Ok, Err } from "./helpers";
export function safeMap(arr, mapper) {
    try {
        const out = [];
        for (let i = 0; i < arr.length; i++) {
            const item = arr[i];
            if (item !== undefined) {
                out.push(mapper(item, i));
            }
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
            const item = arr[i];
            if (item !== undefined && predicate(item, i)) {
                out.push(item);
            }
        }
        return Ok(out);
    }
    catch (e) {
        return Err(String(e));
    }
}
//# sourceMappingURL=index.js.map