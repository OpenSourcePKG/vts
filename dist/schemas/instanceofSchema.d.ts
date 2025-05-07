import { Schema, SchemaDescription, SchemaErrors, SchemaOptions } from '../schema.js';
import { AbstractClass } from '../vts.js';
export interface InstanceOfSchemaDescription extends SchemaDescription {
    type: 'instanceOf';
}
export declare class InstanceofSchema<S> extends Schema<S> {
    private readonly _constructor;
    constructor(_constructor: AbstractClass<S>, _options?: SchemaOptions);
    describe(): InstanceOfSchemaDescription;
    validate(_data: unknown, _errors: SchemaErrors): _data is S;
}
