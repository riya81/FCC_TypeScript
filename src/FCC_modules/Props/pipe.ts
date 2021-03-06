export interface Pipe<T> {
    (): T;
    <U>(f: (x: T) => U): Pipe<U>;
}
export const Pipe: <T>(x: T) => Pipe<T> = <T>(x: T) => (<U>(f?: (x: T) => U) => (f ? Pipe(f(x)) : x)) as Pipe<T>;
