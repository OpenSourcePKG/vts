import { ExtractSchemaResultType, Schema, SchemaErrors, SchemaOptions } from '../../schema.js';
export declare class OptionalSchema<S extends Schema<unknown>> extends Schema<ExtractSchemaResultType<S>> {
    private readonly _schema;
    constructor(_schema: S);
    validate(_data: unknown, _errors: SchemaErrors, _options?: SchemaOptions): _data is ExtractSchemaResultType<S>;
}
