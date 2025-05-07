import {Schema, SchemaDescription, SchemaErrors} from '../schema.js';
import {Vts} from '../vts.js';

export interface BooleanSchemaDescription extends SchemaDescription {
  type: 'boolean';
}

export class BooleanSchema extends Schema<boolean> {

  public override describe(): BooleanSchemaDescription {
    return {
      ...super.describe(),
      type: 'boolean'
    };
  }

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