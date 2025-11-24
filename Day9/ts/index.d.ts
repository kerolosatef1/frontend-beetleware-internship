export type Result<T> = {
    ok: true;
    value: T;
} | {
    ok: false;
    error: string;
};
export declare const Ok: <T>(value: T) => Result<T>;
export declare const Err: (error: string) => Result<never>;
//# sourceMappingURL=index.d.ts.map