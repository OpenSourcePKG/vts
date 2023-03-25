import {Vts} from '../../vts.js';
import {Schema, SchemaErrors} from '../schema.js';

export class NumberSchema extends Schema<number> {

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