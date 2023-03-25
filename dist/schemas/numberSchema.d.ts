import { Schema } from '../schema.js';
import { SchemaErrors } from '../vts.js';
export declare class NumberSchema extends Schema<number> {
    validate(_data: unknown, _errors: SchemaErrors): _data is number;
}
