import {Class} from '../../types.js';
import {Vts} from '../../vts.js';
import {Schema, SchemaErrors} from '../schema.js';

export class InstanceofSchema<S, T extends Class<S>> extends Schema<S> {

  public constructor(private readonly _constructor: T) {
    super();
  }

  public validate(
    _data: unknown,
    _errors: SchemaErrors
  ): _data is S {
    if (!Vts.isInstanceOf(_data, this._constructor)) {
      this.addError(_errors, `not an instance of ${this._constructor.name}`);
      return false;
    }
    return true;
  }

}