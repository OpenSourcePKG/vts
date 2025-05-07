import { Schema, SchemaDescription, SchemaErrors } from '../schema.js';
export interface DateSchemaDescription extends SchemaDescription {
    type: 'date';
}
export declare class DateSchema extends Schema<Date> {
    describe(): DateSchemaDescription;
    validate(_data: unknown, _errors: SchemaErrors): _data is Date;
}
