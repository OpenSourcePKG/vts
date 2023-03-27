import {Schema, SchemaErrors} from '../schema.js';
import {Vts} from '../vts.js';

export class UndefinedSchema extends Schema<undefined> {

  public validate(
    _data: unknown,
    _errors: SchemaErrors
  ): _data is undefined {
    if (!Vts.isUndefined(_data)) {
      this.addError(_errors, 'not undefined');
      return false;
    }
    return true;
  }

}