import {Schema} from '../schema.js';
import {ExtractSchemaType, SchemaErrors, SchemaOptions} from '../vts.js';

export class OrSchema<S extends Schema<unknown>> extends Schema<ExtractSchemaType<S>> {

  public constructor(private readonly _types: S[]) {
    super();
  }

  public validate(
    _data: unknown,
    _errors: SchemaErrors,
    _options?: SchemaOptions
  ): _data is ExtractSchemaType<S> {
    const orErrors: {
      [key: string]: SchemaErrors;
    } = {};

    for (const [key, type] of this._types.entries()) {
      const errors: SchemaErrors = [];

      if (type.validate(_data, errors, _options)) {
        return true;
      }

      if (errors.length > 0) {
        orErrors[`schema${key}`] = errors;
      }
    }

    this.addError(_errors, 'no match with any of the given schemas');
    this.addError(_errors, orErrors);
    return false;
  }

}