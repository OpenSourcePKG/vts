import {Vts} from '../../vts.js';
import {Schema, SchemaErrors} from '../schema.js';

export class ErrorSchema extends Schema<Error> {

  public validate(
    _data: unknown,
    _errors: SchemaErrors
  ): _data is Error {
    if (!Vts.isError(_data)) {
      this.addError(_errors, 'not an error');
      return false;
    }
    return true;
  }

}