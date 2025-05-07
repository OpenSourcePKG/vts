import { ExtractSchemaResultType, Schema, SchemaDescription, SchemaErrors, SchemaOptions } from '../schema.js';
export interface OrSchemaDescription extends SchemaDescription {
    type: 'or';
    values: SchemaDescription[];
}
export declare class OrSchema<S extends Schema<unknown>> extends Schema<ExtractSchemaResultType<S>> {
    private readonly _types;
    constructor(_types: S[], _options?: SchemaOptions);
    describe(): SchemaDescription;
    validate(_data: unknown, _errors: SchemaErrors, _options?: SchemaOptions): _data is ExtractSchemaResultType<S>;
}
