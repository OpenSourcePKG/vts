export type ExtractSchemaResultType<Type> = Type extends Schema<infer X> ? X : never;
export type SchemaErrors = (string | Record<string, SchemaErrors>)[];
export type SchemaOptions = {
    description?: string;
};
export interface SchemaDescription {
    description?: string;
}
export declare abstract class Schema<Type, Options extends SchemaOptions = SchemaOptions> {
    protected readonly _options?: Options | undefined;
    constructor(_options?: Options | undefined);
    abstract validate(_data: unknown, _errors: SchemaErrors, _options?: Options): _data is Type;
    describe(): SchemaDescription;
    protected addError(_errors: SchemaErrors, _error: string | Record<string, SchemaErrors>): void;
    protected addErrors(_errorsObject: Record<string, SchemaErrors>, _key: string, _errors: SchemaErrors): void;
}
