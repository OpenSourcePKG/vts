import { ExtractSchemaResultType, Schema, SchemaDescription, SchemaErrors, SchemaOptions } from '../../schema.js';
export interface DiscriminatorSchemaDescription extends SchemaDescription {
    discriminating: true;
}
export declare class DiscriminatorSchema<S extends Schema<unknown>> extends Schema<ExtractSchemaResultType<S>> {
    private readonly _schema;
    constructor(_schema: S);
    describe(): DiscriminatorSchemaDescription;
    validate(_data: unknown, _errors: SchemaErrors, _options?: SchemaOptions): _data is ExtractSchemaResultType<S>;
}
