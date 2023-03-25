import { SchemaErrors, SchemaOptions } from './vts.js';
export declare abstract class Schema<Type> {
    abstract validate(_data: unknown, _errors: SchemaErrors, _options?: SchemaOptions): _data is Type;
    protected addError(_errors: SchemaErrors, _error: string | Record<string, SchemaErrors>): void;
    protected addErrors(_errorsObject: Record<string, SchemaErrors>, _key: string, _errors: SchemaErrors): void;
}