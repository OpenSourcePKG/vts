import { Schema } from '../schema.js';
import { ExtractSchemaType, SchemaErrors, SchemaOptions } from '../vts.js';
export declare class OrSchema<S extends Schema<unknown>> extends Schema<ExtractSchemaType<S>> {
    private readonly _types;
    constructor(_types: S[]);
    validate(_data: unknown, _errors: SchemaErrors, _options?: SchemaOptions): _data is ExtractSchemaType<S>;
}
