import { Schema } from '../schema.js';
import { SchemaErrors } from '../vts.js';
export declare class UndefinedSchema extends Schema<undefined> {
    validate(_data: unknown, _errors: SchemaErrors): _data is undefined;
}
