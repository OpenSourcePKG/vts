import { Schema, SchemaDescription, SchemaErrors } from '../schema.js';
export interface NumberSchemaDescription extends SchemaDescription {
    type: 'number';
}
export declare class NumberSchema extends Schema<number> {
    describe(): NumberSchemaDescription;
    validate(_data: unknown, _errors: SchemaErrors): _data is number;
}
