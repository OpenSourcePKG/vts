import {RecordOf} from '../types.js';

export type ExtractSchemaType<Type> = Type extends Schema<infer X> ? X : never;

export type SchemaErrors = (string | Record<string, SchemaErrors>)[];

export type SchemaOptions = RecordOf<unknown>;

export abstract class Schema<Type> {

  public abstract validate(
    _data: unknown,
    _errors: SchemaErrors,
    _options?: SchemaOptions
  ): _data is Type;

  protected addError(
    _errors: SchemaErrors,
    _error: string | Record<string, SchemaErrors>
  ): void {
    _errors.push(_error);
  }

  protected addErrors(
    _errorsObject: Record<string, SchemaErrors>,
    _key: string,
    _errors: SchemaErrors
  ): void {
    _errorsObject[_key] ||= [];
    _errorsObject[_key].push(..._errors);
  }

}