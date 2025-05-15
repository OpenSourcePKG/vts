import {ExtractSchemaResultType, Schema, SchemaDescription, SchemaErrors, SchemaOptions} from '../schema.js';

export interface OrSchemaDescription extends SchemaDescription {
  type: 'or';
  values: SchemaDescription[];
}

export class OrSchema<S extends Schema<unknown>> extends Schema<ExtractSchemaResultType<S>> {

  public constructor(
    private readonly _types: S[],
    _options?: SchemaOptions
  ) {
    super(_options);
  }

  public override describe(): OrSchemaDescription {
    const schemaDescription = super.describe();

    const orSchemaDescription: OrSchemaDescription = {
      ...schemaDescription,
      type: 'or',
      values: []
    };

    for (const schema of Object.values(this._types)) {
      orSchemaDescription.values.push(schema.describe());
    }

    return orSchemaDescription;
  }

  public validate(
    _data: unknown,
    _errors: SchemaErrors,
    _options?: SchemaOptions
  ): _data is ExtractSchemaResultType<S> {
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