import { Schema, SchemaDescription, SchemaErrors, SchemaOptions } from '../schema.js';
export interface EnumSchemaDescription extends SchemaDescription {
    type: 'enum';
    values: Record<number | string, SchemaDescription>;
}
export declare class EnumSchema<T extends number | string> extends Schema<T> {
    private readonly _enum;
    constructor(_enum: Record<string, T>, _options?: SchemaOptions);
    describe(): EnumSchemaDescription;
    validate(_data: unknown, _errors: SchemaErrors, _options?: SchemaOptions): _data is T;
}
