import { ExtractSchemaResultType, Schema, SchemaDescription, SchemaErrors, SchemaOptions } from '../schema.js';
export interface ArraySchemaDescription extends SchemaDescription {
    items: SchemaDescription;
    type: 'array';
}
export declare class ArraySchema<S extends Schema<unknown>> extends Schema<ExtractSchemaResultType<S>[]> {
    private readonly _elementsSchema;
    constructor(_elementsSchema: S, _options?: SchemaOptions);
    describe(): ArraySchemaDescription;
    validate(_data: unknown, _errors: SchemaErrors, _options?: SchemaOptions): _data is ExtractSchemaResultType<S>[];
}
