// هنا بعمل جيينيرك تايب علشان استخدمه في  حاجتين وهما ال ok لو كان تمم و false لو في error 
export type Result<T> =
  | { ok: true; value: T }
  | { ok: false; error: string };

// هنا لو كان ok هيرجعلي ال result اللي انا حاططهالي 
export const Ok = <T>(value: T): Result<T> => ({
  ok: true,
  value,
});

// نفس الكلام اللي علي ok لكن ده لو ب false ونفس اللي بعمله return هو نفسه هنا بس الاختلاف اني استخدمت ال never لان عارف ان ده error 
export const Err = <T = never>(error: string): Result<T> => ({
  ok: false,
  error,
});
