import { Schema, SchemaErrors } from '../schema.js';
export declare class NullSchema extends Schema<null> {
    validate(_data: unknown, _errors: SchemaErrors): _data is null;
}
