import moment from 'moment';
import { SchemaErrors } from '../vts.js';
import { StringSchema } from './stringSchema.js';
export interface DateStringSchemaValidateOptions {
    test: (_data: moment.Moment) => string;
}
export declare class DateStringSchema extends StringSchema {
    private readonly _options?;
    constructor(_options?: DateStringSchemaValidateOptions | undefined);
    validate(_data: unknown, _errors: SchemaErrors): _data is string;
}
