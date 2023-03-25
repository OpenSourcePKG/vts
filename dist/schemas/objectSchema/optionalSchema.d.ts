import { Schema } from '../../schema.js';
import { ExtractSchemaType, SchemaErrors, SchemaOptions } from '../../vts.js';
export declare class OptionalSchema<S extends Schema<unknown>> extends Schema<ExtractSchemaType<S>> {
    private readonly _schema;
    constructor(_schema: S);
    validate(_data: unknown, _errors: SchemaErrors, _options?: SchemaOptions): _data is ExtractSchemaType<S>;
}
