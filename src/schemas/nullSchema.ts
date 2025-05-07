import {Schema, SchemaDescription, SchemaErrors} from '../schema.js';
import {Vts} from '../vts.js';

export interface NullSchemaDescription extends SchemaDescription {
  type: 'null';
}

export class NullSchema extends Schema<null> {

  public override describe(): NullSchemaDescription {
    return {
      ...super.describe(),
      type: 'null'
    };
  }

  public validate(
    _data: unknown,
    _errors: SchemaErrors
  ): _data is null {
    if (!Vts.isNull(_data)) {
      this.addError(_errors, 'not null');
      return false;
    }
    return true;
  }

}