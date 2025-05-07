import {ExtractSchemaResultType, Schema, SchemaDescription, SchemaErrors, SchemaOptions} from '../schema.js';
import {Vts} from '../vts.js';
import {StringSchema} from './stringSchema.js';

export interface Object2SchemaDescription extends SchemaDescription {
  key: SchemaDescription;
  type: 'object2';
  value: SchemaDescription;
}

export class Object2Schema<KeySchema extends StringSchema, ValuesSchema extends Schema<unknown>>
  extends Schema<unknown> {

  public constructor(
    private readonly _keySchema: KeySchema,
    private readonly _valuesSchema: ValuesSchema,
    _options?: SchemaOptions
  ) {
    super(_options);
  }

  public override describe(): Object2SchemaDescription {
    return {
      ...super.describe(),
      key: this._keySchema.describe(),
      type: 'object2',
      value: this._valuesSchema.describe()
    };
  }

  public validate(
    _data: unknown,
    _errors: SchemaErrors
  ): _data is Record<ExtractSchemaResultType<KeySchema>, ExtractSchemaResultType<ValuesSchema>> {
    if (!Vts.isObject(_data)) {
      this.addError(_errors, 'not an object');
      return false;
    }

    const objectErrors: {
      [key: string]: SchemaErrors;
    } = {};

    for (const [key, value] of Object.entries(_data)) {
      const entryErrors: SchemaErrors = [];
      if (!this._keySchema.validate(key, entryErrors)) {
        this.addErrors(objectErrors, key, entryErrors);
      }
      const valueErrors: SchemaErrors = [];
      if (!this._valuesSchema.validate(value, valueErrors)) {
        this.addErrors(objectErrors, key, valueErrors);
      }
    }

    if (Object.keys(objectErrors).length > 0) {
      this.addError(_errors, objectErrors);
    }

    return Object.keys(objectErrors).length === 0;
  }

}