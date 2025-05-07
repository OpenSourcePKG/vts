import { Schema, SchemaDescription, SchemaErrors } from '../schema.js';
export interface UndefinedSchemaDescription extends SchemaDescription {
    type: 'undefined';
}
export declare class UndefinedSchema extends Schema<undefined> {
    describe(): UndefinedSchemaDescription;
    validate(_data: unknown, _errors: SchemaErrors): _data is undefined;
}
