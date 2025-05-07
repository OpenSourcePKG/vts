import { Schema, SchemaDescription, SchemaErrors } from '../schema.js';
export interface NullSchemaDescription extends SchemaDescription {
    type: 'null';
}
export declare class NullSchema extends Schema<null> {
    describe(): NullSchemaDescription;
    validate(_data: unknown, _errors: SchemaErrors): _data is null;
}
