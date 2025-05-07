import { Schema, SchemaDescription, SchemaErrors } from '../schema.js';
export interface RegExpSchemaDescription extends SchemaDescription {
    type: 'regExp';
}
export declare class RegExpSchema extends Schema<RegExp> {
    describe(): RegExpSchemaDescription;
    validate(_data: unknown, _errors: SchemaErrors): _data is RegExp;
}
