import { Schema, SchemaErrors } from '../schema.js';
export declare class NumberSchema extends Schema<number> {
    validate(_data: unknown, _errors: SchemaErrors): _data is number;
}
