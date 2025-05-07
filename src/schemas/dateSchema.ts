import {Schema, SchemaDescription, SchemaErrors} from '../schema.js';
import {Vts} from '../vts.js';

export interface DateSchemaDescription extends SchemaDescription {
  type: 'date';
}

export class DateSchema extends Schema<Date> {

  public override describe(): DateSchemaDescription {
    return {
      ...super.describe(),
      type: 'date'
    };
  }

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