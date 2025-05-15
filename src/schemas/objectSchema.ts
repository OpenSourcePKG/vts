import {ExtractSchemaResultType, Schema, SchemaDescription, SchemaErrors, SchemaOptions} from '../schema.js';
import {RecordOf, Vts} from '../vts.js';
import {DiscriminatorSchema} from './objectSchema/discriminatorSchema.js';
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
  [key in keyof ExtractRequired<T>]: ExtractSchemaResultType<T[key]>
}>;

type OptionalItems<T extends RecordOf<unknown>> = Partial<{
  [key in keyof ExtractOptional<T>]: ExtractSchemaResultType<T[key]>
}>;

export interface ObjectSchemaOptions extends SchemaOptions {
  objectSchema?: {
    ignoreAdditionalItems?: boolean;
    strict?: boolean;
  };
}

export interface ObjectSchemaDescription extends SchemaDescription {
  items: Record<string, SchemaDescription>;
  type: 'object';
}

export class ObjectSchema<Items extends ObjectSchemaItems> extends Schema<unknown, ObjectSchemaOptions> {

  public constructor(
    public readonly _schemaItems: Items,
    _options?: ObjectSchemaOptions
  ) {
    super(_options);
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

  public override describe(): ObjectSchemaDescription {
    const objectSchemaDescription: ObjectSchemaDescription = {
      ...super.describe(),
      items: {},
      type: 'object'
    };

    for (const [schemaKey, schema] of Object.entries(this._schemaItems)) {
      objectSchemaDescription.items[schemaKey] = schema.describe();
    }

    return objectSchemaDescription;
  }

  public validate(
    _data: unknown,
    _errors: SchemaErrors,
    _options?: ObjectSchemaOptions
  ): _data is RequiredItems<Items> & OptionalItems<Items> {
    const strict = _options?.objectSchema?.strict ?? this._options?.objectSchema?.strict ?? true;
    const ignoreAdditionalItems = _options?.objectSchema?.ignoreAdditionalItems ??
      this._options?.objectSchema?.ignoreAdditionalItems ?? false;

    if (!Vts.isObject(_data, strict)) {
      this.addError(_errors, 'not an object');
      return false;
    }

    const objectErrors: {
      [key: string]: SchemaErrors;
    } = {};

    for (const schemaKey of Object.keys(this._schemaItems)) {
      const schema = this._schemaItems[schemaKey];
      const keyIsInData = schemaKey in _data;
      const valueErrors: SchemaErrors = [];
      const validated = keyIsInData ? schema.validate(_data[schemaKey], valueErrors, _options) : false;

      if (Vts.isInstanceOf(schema, DiscriminatorSchema) && (!keyIsInData || !validated)) {
        return false;
      }

      if (!Vts.isInstanceOf(schema, OptionalSchema) && !keyIsInData) {
        this.addErrors(objectErrors, schemaKey, ['missing required key']);
      }

      if (keyIsInData && !validated) {
        this.addErrors(objectErrors, schemaKey, valueErrors);
      }
    }

    if (!ignoreAdditionalItems) {
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