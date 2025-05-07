import {ExtractSchemaResultType, Schema, SchemaDescription, SchemaErrors, SchemaOptions} from '../../schema.js';

export interface DiscriminatorSchemaDescription extends SchemaDescription {
  discriminating: true;
}

export class DiscriminatorSchema<S extends Schema<unknown>> extends Schema<ExtractSchemaResultType<S>> {

  public constructor(private readonly _schema: S) {
    super();
  }

  public override describe(): DiscriminatorSchemaDescription {
    return {
      ...this._schema.describe(),
      discriminating: true
    };
  }

  public validate(
    _data: unknown,
    _errors: SchemaErrors,
    _options?: SchemaOptions
  ): _data is ExtractSchemaResultType<S> {
    return this._schema.validate(_data, _errors, _options);
  }

}