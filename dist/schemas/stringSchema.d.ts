import { Schema, SchemaErrors } from '../schema.js';
export declare class StringSchema extends Schema<string> {
    validate(_data: unknown, _errors: SchemaErrors): _data is string;
}
