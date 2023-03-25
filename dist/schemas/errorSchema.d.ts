import { Schema } from '../schema.js';
import { SchemaErrors } from '../vts.js';
export declare class ErrorSchema extends Schema<Error> {
    validate(_data: unknown, _errors: SchemaErrors): _data is Error;
}
