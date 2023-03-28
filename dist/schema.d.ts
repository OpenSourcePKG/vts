import { RecordOf } from './vts.js';
export type ExtractSchemaResultType<Type> = Type extends Schema<infer X> ? X : never;
export type SchemaErrors = (string | Record<string, SchemaErrors>)[];
export type SchemaOptions = RecordOf<unknown>;
export declare abstract class Schema<Type> {
    abstract validate(_data: unknown, _errors: SchemaErrors, _options?: SchemaOptions): _data is Type;
    protected addError(_errors: SchemaErrors, _error: string | Record<string, SchemaErrors>): void;
    protected addErrors(_errorsObject: Record<string, SchemaErrors>, _key: string, _errors: SchemaErrors): void;
}
