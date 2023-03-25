import {SchemaErrors, SchemaOptions} from './vts.js';

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