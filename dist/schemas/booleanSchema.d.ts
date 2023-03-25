import { Schema } from '../schema.js';
import { SchemaErrors } from '../vts.js';
export declare class BooleanSchema extends Schema<boolean> {
    validate(_data: unknown, _errors: SchemaErrors): _data is boolean;
}
