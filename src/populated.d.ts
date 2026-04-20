type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

type Populated<T, D extends number> = D extends 0
  ? T
  : // eslint-disable-next-line @typescript-eslint/no-explicit-any
    T extends any[]
    ? T extends (infer Item)[]
      ? Populated<Item, Prev[D]>[]
      : never
    : T extends object
      ? {
          [K in keyof T]: T[K] extends (infer Item)[]
            ? Exclude<Item, string> extends never
              ? T[K]
              : Populated<Exclude<Item, string>, Prev[D]>[]
            : Exclude<T[K], string> extends never
              ? T[K] extends object
                ? Populated<T[K], Prev[D]>
                : T[K]
              : Populated<Exclude<T[K], string>, Prev[D]>
        }
      : T
