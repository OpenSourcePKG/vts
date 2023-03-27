import { Schema, SchemaErrors, SchemaOptions } from '../schema.js';
import { ExtractSchemaResultType } from '../vts.js';
export declare class OrSchema<S extends Schema<unknown>> extends Schema<ExtractSchemaResultType<S>> {
    private readonly _types;
    constructor(_types: S[]);
    validate(_data: unknown, _errors: SchemaErrors, _options?: SchemaOptions): _data is ExtractSchemaResultType<S>;
}
