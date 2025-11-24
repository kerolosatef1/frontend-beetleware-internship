export type Result<T> = {
    ok: true;
    value: T;
} | {
    ok: false;
    error: string;
};
export declare const Ok: <T>(value: T) => Result<T>;
export declare const Err: <T = never>(error: string) => Result<T>;
//# sourceMappingURL=helpers.d.ts.map