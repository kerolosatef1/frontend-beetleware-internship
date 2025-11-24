//rest patern وبعد كده تعالي ناخد نفس فكرة ال challenge بتاعت ال usememo لكن ب typeSCRIPT
function sum(...numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
}
console.log(sum(1, 2, 3));
console.log(sum(5, 10, 15, 20));
// Helper creators
export const Ok = (value) => ({
    ok: true,
    value,
});
export const Err = (error) => ({
    ok: false,
    error,
});
//# sourceMappingURL=index.js.map