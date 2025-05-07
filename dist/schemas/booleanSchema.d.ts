import { Schema, SchemaDescription, SchemaErrors } from '../schema.js';
export interface BooleanSchemaDescription extends SchemaDescription {
    type: 'boolean';
}
export declare class BooleanSchema extends Schema<boolean> {
    describe(): BooleanSchemaDescription;
    validate(_data: unknown, _errors: SchemaErrors): _data is boolean;
}
