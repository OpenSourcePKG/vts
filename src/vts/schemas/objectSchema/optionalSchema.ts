import {Vts} from '../../../vts.js';
import {ExtractSchemaType, Schema, SchemaErrors, SchemaOptions} from '../../schema.js';

export class OptionalSchema<S extends Schema<unknown>> extends Schema<ExtractSchemaType<S>> {

  public constructor(private readonly _schema: S) {
    super();
  }

  public validate(
    _data: unknown,
    _errors: SchemaErrors,
    _options?: SchemaOptions
  ): _data is ExtractSchemaType<S> {
    return Vts.isUndefined(_data) || this._schema.validate(_data, _errors, _options);
  }

}