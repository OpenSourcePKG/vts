import { Schema, SchemaDescription, SchemaErrors, SchemaOptions } from '../schema.js';
type StringTestCallback = (_data: string) => boolean;
export interface StringSchemaOptions extends SchemaOptions {
    test?: StringTestCallback;
}
export interface StringSchemaDescription extends SchemaDescription {
    type: 'string';
}
export declare class StringSchema<Options extends StringSchemaOptions = StringSchemaOptions> extends Schema<string, Options> {
    describe(): StringSchemaDescription;
    validate(_data: unknown, _errors: SchemaErrors): _data is string;
}
export {};
