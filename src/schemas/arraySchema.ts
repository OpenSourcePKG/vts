import {ExtractSchemaResultType, Schema, SchemaDescription, SchemaErrors, SchemaOptions} from '../schema.js';
import {Vts} from '../vts.js';

export interface ArraySchemaDescription extends SchemaDescription {
  items: SchemaDescription;
  type: 'array';
}

export class ArraySchema<S extends Schema<unknown>> extends Schema<ExtractSchemaResultType<S>[]> {

  public constructor(
    private readonly _elementsSchema: S,
    _options?: SchemaOptions
  ) {
    super(_options);
  }

  public override describe(): ArraySchemaDescription {
    return {
      ...super.describe(),
      items: this._elementsSchema.describe(),
      type: 'array'
    };
  }

  public validate(
    _data: unknown,
    _errors: SchemaErrors,
    _options?: SchemaOptions
  ): _data is ExtractSchemaResultType<S>[] {
    if (!Vts.isArray(_data)) {
      this.addError(_errors, 'not an array');
      return false;
    }

    if (_data.length === 0) {
      return true;
    }

    const arrayErrors: {
      [key: string]: SchemaErrors;
    } = {};

    for (const [key, element] of Object.entries(_data)) {
      const errors: SchemaErrors = [];
      if (!this._elementsSchema.validate(element, errors, _options)) {
        arrayErrors[key] = errors;
      }
    }

    if (Object.keys(arrayErrors).length > 0) {
      this.addError(_errors, arrayErrors);
    }

    return Object.keys(arrayErrors).length === 0;
  }

}