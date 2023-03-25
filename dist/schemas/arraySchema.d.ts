import { Schema } from '../schema.js';
import { ExtractSchemaType, SchemaErrors, SchemaOptions } from '../vts.js';
export declare class ArraySchema<S extends Schema<unknown>> extends Schema<ExtractSchemaType<S>[]> {
    private readonly _type;
    constructor(_type: S);
    validate(_data: unknown, _errors: SchemaErrors, _options?: SchemaOptions): _data is ExtractSchemaType<S>[];
}
