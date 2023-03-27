import { Schema, SchemaErrors } from '../schema.js';
import { AbstractClass } from '../vts.js';
export declare class InstanceofSchema<S, T extends AbstractClass<S>> extends Schema<S> {
    private readonly _constructor;
    constructor(_constructor: T);
    validate(_data: unknown, _errors: SchemaErrors): _data is S;
}
