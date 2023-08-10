import { Schema, SchemaErrors } from '../schema.js';
import { AbstractClass } from '../vts.js';
export declare class InstanceofSchema<S> extends Schema<S> {
    private readonly _constructor;
    constructor(_constructor: AbstractClass<S>);
    validate(_data: unknown, _errors: SchemaErrors): _data is S;
}
