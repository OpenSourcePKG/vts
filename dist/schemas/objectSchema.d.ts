import { ExtractSchemaResultType, Schema, SchemaErrors, SchemaOptions } from '../schema.js';
import { RecordOf } from '../vts.js';
import { OptionalSchema } from './objectSchema/optionalSchema.js';
export interface ObjectSchemaItems {
    [key: string]: Schema<unknown>;
}
type PickByValue<Base extends RecordOf<unknown>, Condition> = Pick<Base, {
    [Key in keyof Base]: Base[Key] extends Condition ? Key : never;
}[keyof Base]>;
type OmitByValue<Base extends RecordOf<unknown>, Condition> = Omit<Base, {
    [Key in keyof Base]: Base[Key] extends Condition ? Key : never;
}[keyof Base]>;
type ExtractRequired<T extends RecordOf<unknown>> = OmitByValue<T, OptionalSchema<Schema<unknown>>>;
type ExtractOptional<T extends RecordOf<unknown>> = PickByValue<T, OptionalSchema<Schema<unknown>>>;
type RequiredItems<T extends RecordOf<unknown>> = Required<{
    [key in keyof ExtractRequired<T>]: ExtractSchemaResultType<T[key]>;
}>;
type OptionalItems<T extends RecordOf<unknown>> = Partial<{
    [key in keyof ExtractOptional<T>]: ExtractSchemaResultType<T[key]>;
}>;
export interface ObjectSchemaOptions extends SchemaOptions {
    objectSchema?: {
        ignoreAdditionalItems?: boolean;
        strict?: boolean;
    };
}
export declare class ObjectSchema<Items extends ObjectSchemaItems> extends Schema<unknown> {
    readonly _schemaItems: Items;
    private readonly _options?;
    constructor(_schemaItems: Items, _options?: ObjectSchemaOptions | undefined);
    extend<Items2 extends ObjectSchemaItems>(_schemaItems: Items2, _options?: ObjectSchemaOptions): ObjectSchema<Items & Items2>;
    validate(_data: unknown, _errors: SchemaErrors, _options?: ObjectSchemaOptions): _data is RequiredItems<Items> & OptionalItems<Items>;
}
export {};
