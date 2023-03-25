import { Schema } from '../schema.js';
import { SchemaErrors } from '../vts.js';
export declare class EqualSchema<S> extends Schema<S> {
    private readonly _value;
    constructor(_value: unknown);
    validate(_data: unknown, _errors: SchemaErrors): _data is S;
}
