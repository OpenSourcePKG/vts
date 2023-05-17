import {Schema, SchemaErrors} from '../schema.js';
import {AbstractClass, Vts} from '../vts.js';

export class InstanceofSchema<S> extends Schema<S> {

  public constructor(private readonly _constructor: AbstractClass<S>) {
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