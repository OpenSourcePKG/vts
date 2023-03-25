import moment from 'moment';
import {SchemaErrors} from '../vts.js';
import {StringSchema} from './stringSchema.js';

export interface DateStringSchemaValidateOptions {
  test: (_data: moment.Moment) => string;
}

export class DateStringSchema extends StringSchema {

  public constructor(private readonly _options?: DateStringSchemaValidateOptions) {
    super();
  }

  public override validate(
    _data: unknown,
    _errors: SchemaErrors
  ): _data is string {
    if (!super.validate(_data, _errors)) {
      return false;
    }
    const mom = moment(new Date(_data));
    if (!mom.isValid()) {
      this.addError(_errors, 'not a valid date');
      return false;
    }
    if (this._options?.test) {
      const test = this._options?.test(mom);
      if (test !== _data) {
        console.log(test, _data);
        this.addError(_errors, 'wrong format');
        return false;
      }
    }
    return true;
  }

}