import {Schema, SchemaDescription, SchemaErrors} from '../schema.js';
import {Vts} from '../vts.js';

export interface NumberSchemaDescription extends SchemaDescription {
  type: 'number';
}

export class NumberSchema extends Schema<number> {

  public override describe(): NumberSchemaDescription {
    return {
      ...super.describe(),
      type: 'number'
    };
  }

  public validate(
    _data: unknown,
    _errors: SchemaErrors
  ): _data is number {
    if (!Vts.isNumber(_data)) {
      this.addError(_errors, 'not a number');
      return false;
    }
    return true;
  }

}