import { Schema } from '../schema.js';
import { ExtractSchemaType, SchemaErrors } from '../vts.js';
import { StringSchema } from './stringSchema.js';
export declare class Object2Schema<KeySchema extends StringSchema, ValuesSchema extends Schema<unknown>> extends Schema<unknown> {
    private readonly _keySchema;
    private readonly _valuesSchema;
    constructor(_keySchema: KeySchema, _valuesSchema: ValuesSchema);
    validate(_data: unknown, _errors: SchemaErrors): _data is Record<ExtractSchemaType<KeySchema>, ExtractSchemaType<ValuesSchema>>;
}