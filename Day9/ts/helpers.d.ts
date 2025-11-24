import { Result } from "./result";
export declare function safeMap<T, U>(arr: T[], mapper: (item: T, index: number) => U): Result<U[]>;
export declare function safeFilter<T>(arr: T[], predicate: (item: T, index: number) => boolean): Result<T[]>;
//# sourceMappingURL=helpers.d.ts.map