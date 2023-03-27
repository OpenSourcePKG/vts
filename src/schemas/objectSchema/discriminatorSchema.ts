import {Schema, SchemaErrors, SchemaOptions} from '../../schema.js';
import {ExtractSchemaResultType} from '../../vts.js';

export class DiscriminatorSchema<S extends Schema<unknown>> extends Schema<ExtractSchemaResultType<S>> {

  public constructor(private readonly _schema: S) {
    super();
  }

  public validate(
    _data: unknown,
    _errors: SchemaErrors,
    _options?: SchemaOptions
  ): _data is ExtractSchemaResultType<S> {
    return this._schema.validate(_data, _errors, _options);
  }

}