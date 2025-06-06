export type ExtractSchemaResultType<Type> = Type extends Schema<infer X> ? X : never;
export type SchemaErrors = (string | Record<string, SchemaErrors>)[];
export type SchemaOptions = {
  description?: string;
};

export interface SchemaDescription {
  description?: string;
}

export abstract class Schema<Type, Options extends SchemaOptions = SchemaOptions> {

  public constructor(protected readonly _options?: Options) {
  }

  public abstract validate(
    _data: unknown,
    _errors: SchemaErrors,
    _options?: Options
  ): _data is Type;

  public describe(): SchemaDescription {
    return {
      description: this._options?.description
    };
  }

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