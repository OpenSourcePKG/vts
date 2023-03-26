import {SchemaErrors, Vts} from '../vts.js';
import {StringSchema} from './stringSchema.js';

type DateStringTestCallback = (_data: string) => boolean;

export interface DateStringSchemaValidateOptions {
  test: DateStringTestCallback;
}

export const DateStringSchemaTestDefault: DateStringTestCallback = (_data) => !Vts.isNaN(Date.parse(_data));

export class DateStringSchema extends StringSchema {

  public constructor(private readonly _options: DateStringSchemaValidateOptions = {
    test: DateStringSchemaTestDefault
  }) {
    super();
  }

  public override validate(
    _data: unknown,
    _errors: SchemaErrors
  ): _data is string {
    if (!super.validate(_data, _errors)) {
      return false;
    }
    if (!this._options.test(_data)) {
      this.addError(_errors, 'not a valid date string');
      return false;
    }
    return true;
  }

}