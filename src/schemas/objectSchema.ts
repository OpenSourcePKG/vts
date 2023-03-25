import {Schema} from '../schema.js';
import {ExtractSchemaType, RecordOf, SchemaErrors, SchemaOptions, Vts} from '../vts.js';
import {OptionalSchema} from './objectSchema/optionalSchema.js';

export interface ObjectSchemaItems {
  [key: string]: Schema<unknown>;
}

type PickByValue<Base extends RecordOf<unknown>, Condition> = Pick<Base, {
  [Key in keyof Base]: Base[Key] extends Condition ? Key : never
}[keyof Base]>;
type OmitByValue<Base extends RecordOf<unknown>, Condition> = Omit<Base, {
  [Key in keyof Base]: Base[Key] extends Condition ? Key : never
}[keyof Base]>;

type ExtractRequired<T extends RecordOf<unknown>> = OmitByValue<T, OptionalSchema<Schema<unknown>>>;
type ExtractOptional<T extends RecordOf<unknown>> = PickByValue<T, OptionalSchema<Schema<unknown>>>;

type RequiredItems<T extends RecordOf<unknown>> = Required<{
  [key in keyof ExtractRequired<T>]: ExtractSchemaType<T[key]>
}>;

type OptionalItems<T extends RecordOf<unknown>> = Partial<{
  [key in keyof ExtractOptional<T>]: ExtractSchemaType<T[key]>
}>;

export interface ObjectSchemaOptions extends SchemaOptions {
  objectSchema?: {
    ignoreAdditionalItems?: boolean;
    strict?: boolean;
  };
}

export class ObjectSchema<Items extends ObjectSchemaItems> extends Schema<unknown> {

  public constructor(
    public readonly _schemaItems: Items,
    private readonly _options?: ObjectSchemaOptions
  ) {
    super();
  }

  public extend<Items2 extends ObjectSchemaItems>(
    _schemaItems: Items2,
    _options?: ObjectSchemaOptions
  ): ObjectSchema<Items & Items2> {
    return new ObjectSchema({
      ...this._schemaItems,
      ..._schemaItems
    }, {
      ...this._options,
      ..._options
    });
  }

  public validate(
    _data: unknown,
    _errors: SchemaErrors,
    _options?: ObjectSchemaOptions
  ): _data is RequiredItems<Items> & OptionalItems<Items> {
    if (!Vts.isObject(_data, _options?.objectSchema?.strict ?? true)) {
      this.addError(_errors, 'not an object');
      return false;
    }

    const objectErrors: {
      [key: string]: SchemaErrors;
    } = {};

    for (const schemaKey of Object.keys(this._schemaItems)) {
      const schema = this._schemaItems[schemaKey];

      if (!Vts.isInstanceOf(schema, OptionalSchema) && !(schemaKey in _data)) {
        this.addErrors(objectErrors, schemaKey, ['missing required key']);
      }
      if (schemaKey in _data) {
        const valueErrors: SchemaErrors = [];
        if (!schema.validate(_data[schemaKey], valueErrors, _options)) {
          this.addErrors(objectErrors, schemaKey, valueErrors);
        }
      }
    }

    if (!(this._options?.objectSchema?.ignoreAdditionalItems || _options?.objectSchema?.ignoreAdditionalItems)) {
      for (const dataKey of Object.keys(_data)) {
        if (!(dataKey in this._schemaItems)) {
          this.addErrors(objectErrors, dataKey, ['unexpected additional key']);
        }
      }
    }

    if (Object.keys(objectErrors).length > 0) {
      this.addError(_errors, objectErrors);
    }

    return Object.keys(objectErrors).length === 0;
  }

}