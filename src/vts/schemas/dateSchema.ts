import {Vts} from '../../vts.js';
import {Schema, SchemaErrors} from '../schema.js';

export class DateSchema extends Schema<Date> {

  public validate(
    _data: unknown,
    _errors: SchemaErrors
  ): _data is Date {
    if (!Vts.isDate(_data)) {
      this.addError(_errors, 'not a date');
      return false;
    }
    return true;
  }

}