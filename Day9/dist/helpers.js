// هنا لو كان ok هيرجعلي ال result اللي انا حاططهالي 
export const Ok = (value) => ({
    ok: true,
    value,
});
// نفس الكلام اللي علي ok لكن ده لو ب false ونفس اللي بعمله return هو نفسه هنا بس الاختلاف اني استخدمت ال never لان عارف ان ده error 
export const Err = (error) => ({
    ok: false,
    error,
});
//# sourceMappingURL=helpers.js.map