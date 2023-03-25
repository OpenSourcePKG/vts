import {Vts} from '../../vts.js';
import {Schema, SchemaErrors} from '../schema.js';

export class StringSchema extends Schema<string> {

  public validate(
    _data: unknown,
    _errors: SchemaErrors
  ): _data is string {
    if (!Vts.isString(_data)) {
      this.addError(_errors, 'not a string');
      return false;
    }
    return true;
  }

}