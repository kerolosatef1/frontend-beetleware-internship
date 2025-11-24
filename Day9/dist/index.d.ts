import type { Result } from "./helpers";
export declare function safeMap<T, U>(arr: (T | undefined)[], mapper: (item: T, index: number) => U): Result<U[]>;
export declare function safeFilter<T>(arr: (T | undefined)[], predicate: (item: T, index: number) => boolean): Result<T[]>;
//# sourceMappingURL=index.d.ts.map