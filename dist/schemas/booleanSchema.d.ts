import { Schema, SchemaErrors } from '../schema.js';
export declare class BooleanSchema extends Schema<boolean> {
    validate(_data: unknown, _errors: SchemaErrors): _data is boolean;
}
