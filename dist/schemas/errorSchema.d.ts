import { Schema, SchemaDescription, SchemaErrors } from '../schema.js';
export interface ErrorSchemaDescription extends SchemaDescription {
    type: 'error';
}
export declare class ErrorSchema extends Schema<Error> {
    describe(): ErrorSchemaDescription;
    validate(_data: unknown, _errors: SchemaErrors): _data is Error;
}
