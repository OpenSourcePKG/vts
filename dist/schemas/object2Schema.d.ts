import { ExtractSchemaResultType, Schema, SchemaDescription, SchemaErrors, SchemaOptions } from '../schema.js';
import { StringSchema } from './stringSchema.js';
export interface Object2SchemaDescription extends SchemaDescription {
    key: SchemaDescription;
    type: 'object2';
    value: SchemaDescription;
}
export declare class Object2Schema<KeySchema extends StringSchema, ValuesSchema extends Schema<unknown>> extends Schema<unknown> {
    private readonly _keySchema;
    private readonly _valuesSchema;
    constructor(_keySchema: KeySchema, _valuesSchema: ValuesSchema, _options?: SchemaOptions);
    describe(): Object2SchemaDescription;
    validate(_data: unknown, _errors: SchemaErrors): _data is Record<ExtractSchemaResultType<KeySchema>, ExtractSchemaResultType<ValuesSchema>>;
}
