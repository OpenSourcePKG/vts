import { Schema, SchemaErrors } from '../schema.js';
export declare class DateSchema extends Schema<Date> {
    validate(_data: unknown, _errors: SchemaErrors): _data is Date;
}
