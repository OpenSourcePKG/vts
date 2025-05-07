import {Schema, SchemaDescription, SchemaErrors} from '../schema.js';
import {Vts} from '../vts.js';

export interface RegExpSchemaDescription extends SchemaDescription {
  type: 'regExp';
}

export class RegExpSchema extends Schema<RegExp> {

  public override describe(): RegExpSchemaDescription {
    return {
      ...super.describe(),
      type: 'regExp'
    };
  }

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