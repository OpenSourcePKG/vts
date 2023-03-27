import {Schema, SchemaErrors} from '../schema.js';
import {Vts} from '../vts.js';

export class RegExpSchema extends Schema<RegExp> {

  public validate(
    _data: unknown,
    _errors: SchemaErrors
  ): _data is RegExp {
    if (!Vts.isRegExp(_data)) {
      this.addError(_errors, 'not a regexp');
      return false;
    }
    return true;
  }

}