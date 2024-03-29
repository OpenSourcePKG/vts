import { ExtractSchemaResultType, Schema, SchemaErrors, SchemaOptions } from '../schema.js';
export declare class ArraySchema<S extends Schema<unknown>> extends Schema<ExtractSchemaResultType<S>[]> {
    private readonly _elementsSchema;
    constructor(_elementsSchema: S);
    validate(_data: unknown, _errors: SchemaErrors, _options?: SchemaOptions): _data is ExtractSchemaResultType<S>[];
}
