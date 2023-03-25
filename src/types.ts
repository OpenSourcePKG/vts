export type Class<T> = (new (...args: any[]) => T);
export type AbstractClass<T> = (abstract new (...args: any[]) => T);

export type FunctionOfAnyType = (..._args: any[]) => any;

export type RecordOf<Type> = Record<string, Type | undefined>;

export type PickByValue<Base extends RecordOf<unknown>, Condition> = Pick<Base, {
  [Key in keyof Base]: Base[Key] extends Condition ? Key : never
}[keyof Base]>;

export type OmitByValue<Base extends RecordOf<unknown>, Condition> = Omit<Base, {
  [Key in keyof Base]: Base[Key] extends Condition ? Key : never
}[keyof Base]>;

export type ReplaceKeyType<Base, Key extends keyof any, NewType> = Omit<Base, Key> & Record<Key, NewType>;

export type AsyncFunction = (..._args: any[]) => Promise<any>;

export type SyncFunction = (..._args: any[]) => any;