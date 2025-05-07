import {Schema, SchemaDescription, SchemaErrors, SchemaOptions} from '../schema.js';
import {Vts} from '../vts.js';

type StringTestCallback = (_data: string) => boolean;

export interface StringSchemaOptions extends SchemaOptions {
  test?: StringTestCallback;
}

export interface StringSchemaDescription extends SchemaDescription {
  type: 'string';
}

export class StringSchema<Options extends StringSchemaOptions = StringSchemaOptions> extends Schema<string, Options> {

  public override describe(): StringSchemaDescription {
    return {
      ...super.describe(),
      type: 'string'
    };
  }

  public validate(
    _data: unknown,
    _errors: SchemaErrors
  ): _data is string {
    if (!Vts.isString(_data)) {
      this.addError(_errors, 'not a string');
      return false;
    }
    if (this._options?.test && !this._options.test(_data)) {
      this.addError(_errors, 'test was not successful');
      return false;
    }
    return true;
  }

}