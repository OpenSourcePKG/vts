import {Schema, SchemaDescription, SchemaErrors, SchemaOptions} from '../schema.js';
import {Vts} from '../vts.js';

export interface EnumSchemaDescription extends SchemaDescription {
  type: 'enum';
  values: Record<string, SchemaDescription>;
}

export class EnumSchema<T extends string> extends Schema<T> {

  public constructor(
    private readonly _enum: Record<string, T>,
    _options?: SchemaOptions
  ) {
    super(_options);
  }

  public override describe(): EnumSchemaDescription {
    const schemaDescription = super.describe();

    const enumSchemaDescription: EnumSchemaDescription = {
      ...schemaDescription,
      type: 'enum',
      values: {}
    };

    for (const [k, t] of Object.entries(this._enum)) {
      enumSchemaDescription.values[t] = {
        description: k
      };
    }

    return enumSchemaDescription;
  }

  public validate(
    _data: unknown,
    _errors: SchemaErrors,
    _options?: SchemaOptions
  ): _data is T {
    const enumErrors: {
      [key: string]: SchemaErrors;
    } = {};

    for (const [key, type] of Object.entries(this._enum)) {
      const errors: SchemaErrors = [];

      if (Vts.equal(type, _options).validate(_data, errors)) {
        return true;
      }

      if (errors.length > 0) {
        enumErrors[`schema${key}`] = errors;
      }
    }

    this.addError(_errors, 'no match with any of the given schemas');
    this.addError(_errors, enumErrors);
    return false;
  }

}