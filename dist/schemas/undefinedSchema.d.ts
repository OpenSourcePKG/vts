import { Schema, SchemaErrors } from '../schema.js';
export declare class UndefinedSchema extends Schema<undefined> {
    validate(_data: unknown, _errors: SchemaErrors): _data is undefined;
}
