import {Schema, SchemaDescription, SchemaErrors} from '../schema.js';
import {Vts} from '../vts.js';

export interface ErrorSchemaDescription extends SchemaDescription {
  type: 'error';
}

export class ErrorSchema extends Schema<Error> {

  public override describe(): ErrorSchemaDescription {
    return {
      ...super.describe(),
      type: 'error'
    };
  }

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