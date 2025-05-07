import {Schema, SchemaDescription, SchemaErrors, SchemaOptions} from '../schema.js';
import {AbstractClass, Vts} from '../vts.js';

export interface InstanceOfSchemaDescription extends SchemaDescription {
  type: 'instanceOf';
}

export class InstanceofSchema<S> extends Schema<S> {

  public constructor(
    private readonly _constructor: AbstractClass<S>,
    _options?: SchemaOptions
  ) {
    super(_options);
  }

  public override describe(): InstanceOfSchemaDescription {
    return {
      ...super.describe(),
      type: 'instanceOf'
    };
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