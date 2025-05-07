import {Schema, SchemaDescription, SchemaErrors, SchemaOptions} from '../schema.js';

export interface EqualSchemaDescription extends SchemaDescription {
  type: 'equal';
  value: any;
}

export class EqualSchema<S> extends Schema<S> {

  public constructor(
    private readonly _value: unknown,
    _options?: SchemaOptions
  ) {
    super(_options);
  }

  public override describe(): EqualSchemaDescription {
    return {
      ...super.describe(),
      type: 'equal',
      value: this._value
    };
  }

  public validate(
    _data: unknown,
    _errors: SchemaErrors
  ): _data is S {
    if (_data !== this._value) {
      this.addError(_errors, `not equal to ${this._value}`);
      return false;
    }
    return true;
  }

}