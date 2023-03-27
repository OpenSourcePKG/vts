import { Schema, SchemaErrors } from '../schema.js';
export declare class ErrorSchema extends Schema<Error> {
    validate(_data: unknown, _errors: SchemaErrors): _data is Error;
}
