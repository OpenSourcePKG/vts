import { Schema, SchemaErrors } from '../schema.js';
export declare class RegExpSchema extends Schema<RegExp> {
    validate(_data: unknown, _errors: SchemaErrors): _data is RegExp;
}
