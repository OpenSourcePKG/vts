import { Schema, SchemaDescription, SchemaErrors, SchemaOptions } from '../schema.js';
export interface EqualSchemaDescription extends SchemaDescription {
    type: 'equal';
    value: any;
}
export declare class EqualSchema<S> extends Schema<S> {
    private readonly _value;
    constructor(_value: unknown, _options?: SchemaOptions);
    describe(): EqualSchemaDescription;
    validate(_data: unknown, _errors: SchemaErrors): _data is S;
}
