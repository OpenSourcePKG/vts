import { SchemaErrors } from '../vts.js';
import { Schema } from '../schema.js';
export declare class NullSchema extends Schema<null> {
    validate(_data: unknown, _errors: SchemaErrors): _data is null;
}
