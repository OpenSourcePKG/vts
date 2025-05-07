import { Schema, SchemaDescription } from '../schema.js';
export interface UnknownSchemaDescription extends SchemaDescription {
    type: 'unknown';
}
export declare class UnknownSchema extends Schema<unknown> {
    describe(): UnknownSchemaDescription;
    validate(_data: unknown): _data is unknown;
}
