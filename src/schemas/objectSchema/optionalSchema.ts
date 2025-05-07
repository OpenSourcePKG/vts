import {ExtractSchemaResultType, Schema, SchemaDescription, SchemaErrors, SchemaOptions} from '../../schema.js';
import {Vts} from '../../vts.js';

export interface OptionalSchemaDescription extends SchemaDescription {
  optional: true;
}

export class OptionalSchema<S extends Schema<unknown>> extends Schema<ExtractSchemaResultType<S>> {

  public constructor(private readonly _schema: S) {
    super();
  }

  public override describe(): OptionalSchemaDescription {
    return {
      ...this._schema.describe(),
      optional: true
    };
  }

  public validate(
    _data: unknown,
    _errors: SchemaErrors,
    _options?: SchemaOptions
  ): _data is ExtractSchemaResultType<S> {
    return Vts.isUndefined(_data) || this._schema.validate(_data, _errors, _options);
  }

}