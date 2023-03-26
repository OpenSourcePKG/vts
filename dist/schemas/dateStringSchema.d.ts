import { SchemaErrors } from '../vts.js';
import { StringSchema } from './stringSchema.js';
type DateStringTestCallback = (_data: string) => boolean;
export interface DateStringSchemaValidateOptions {
    test: DateStringTestCallback;
}
export declare const DateStringSchemaTestDefault: DateStringTestCallback;
export declare class DateStringSchema extends StringSchema {
    private readonly _options;
    constructor(_options?: DateStringSchemaValidateOptions);
    validate(_data: unknown, _errors: SchemaErrors): _data is string;
}
export {};
