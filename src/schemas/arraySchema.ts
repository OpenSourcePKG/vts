import {Schema, SchemaErrors, SchemaOptions} from '../schema.js';
import {ExtractSchemaResultType, Vts} from '../vts.js';

export class ArraySchema<S extends Schema<unknown>> extends Schema<ExtractSchemaResultType<S>[]> {

  public constructor(private readonly _type: S) {
    super();
  }

  public validate(
    _data: unknown,
    _errors: SchemaErrors,
    _options?: SchemaOptions
  ): _data is ExtractSchemaResultType<S>[] {
    if (!Vts.isArray(_data)) {
      this.addError(_errors, 'not an array');
      return false;
    }

    if (_data.length === 0) {
      return true;
    }

    const arrayErrors: {
      [key: string]: SchemaErrors;
    } = {};

    for (const [key, data] of Object.entries(_data)) {
      const errors: SchemaErrors = [];
      if (!this._type.validate(data, errors, _options)) {
        arrayErrors[key] = errors;
      }
    }

    if (Object.keys(arrayErrors).length > 0) {
      this.addError(_errors, arrayErrors);
    }

    return Object.keys(arrayErrors).length === 0;
  }

}