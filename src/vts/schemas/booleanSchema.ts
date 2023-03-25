import {Vts} from '../../vts.js';
import {Schema, SchemaErrors} from '../schema.js';

export class BooleanSchema extends Schema<boolean> {

  public validate(
    _data: unknown,
    _errors: SchemaErrors
  ): _data is boolean {
    if (!Vts.isBoolean(_data)) {
      this.addError(_errors, 'not a boolean');
      return false;
    }
    return true;
  }

}