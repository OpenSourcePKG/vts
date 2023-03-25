import {Schema} from '../schema.js';
import {SchemaErrors} from '../vts.js';

export class EqualSchema<S> extends Schema<S> {

  public constructor(private readonly _value: unknown) {
    super();
  }

  public validate(
    _data: unknown,
    _errors: SchemaErrors
  ): _data is S {
    if (_data !== this._value) {
      this.addError(_errors, `not equal to ${this._value}`);
      return false;
    }
    return true;
  }

}