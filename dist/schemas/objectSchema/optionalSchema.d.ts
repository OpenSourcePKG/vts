import { ExtractSchemaResultType, Schema, SchemaDescription, SchemaErrors, SchemaOptions } from '../../schema.js';
export interface OptionalSchemaDescription extends SchemaDescription {
    optional: true;
}
export declare class OptionalSchema<S extends Schema<unknown>> extends Schema<ExtractSchemaResultType<S>> {
    private readonly _schema;
    constructor(_schema: S);
    describe(): OptionalSchemaDescription;
    validate(_data: unknown, _errors: SchemaErrors, _options?: SchemaOptions): _data is ExtractSchemaResultType<S>;
}
