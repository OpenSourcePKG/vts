import {Schema} from './schema.js';
import {ArraySchema} from './schemas/arraySchema.js';
import {BooleanSchema} from './schemas/booleanSchema.js';
import {DateSchema} from './schemas/dateSchema.js';
import {DateStringSchema, DateStringSchemaValidateOptions} from './schemas/dateStringSchema.js';
import {EqualSchema} from './schemas/equalSchema.js';
import {ErrorSchema} from './schemas/errorSchema.js';
import {InstanceofSchema} from './schemas/instanceofSchema.js';
import {NullSchema} from './schemas/nullSchema.js';
import {NumberSchema} from './schemas/numberSchema.js';
import {Object2Schema} from './schemas/object2Schema.js';
import {ObjectSchema, ObjectSchemaItems, ObjectSchemaOptions} from './schemas/objectSchema.js';
import {DiscriminatorSchema} from './schemas/objectSchema/discriminatorSchema.js';
import {OptionalSchema} from './schemas/objectSchema/optionalSchema.js';
import {OrSchema} from './schemas/orSchema.js';
import {RegExpSchema} from './schemas/regExpSchema.js';
import {StringSchema} from './schemas/stringSchema.js';
import {UndefinedSchema} from './schemas/undefinedSchema.js';
import {UnknownSchema} from './schemas/unknownSchema.js';

export type AbstractClass<T> = (abstract new (...args: any[]) => T);
export type FunctionOfAnyType = (..._args: any[]) => any;
export type RecordOf<Type> = Record<string, Type | undefined>;

export class Vts {

  public static array<S extends Schema<unknown>>(_elementsSchema: S): ArraySchema<S> {
    return new ArraySchema(_elementsSchema);
  }

  public static boolean(): BooleanSchema {
    return new BooleanSchema();
  }

  public static date(): DateSchema {
    return new DateSchema();
  }

  public static dateString(_options?: DateStringSchemaValidateOptions): DateStringSchema {
    return new DateStringSchema(_options);
  }

  public static discriminator<S extends Schema<unknown>>(_schema: S): DiscriminatorSchema<S> {
    return new DiscriminatorSchema(_schema);
  }

  public static enum<T>(_value: Record<any, T>): OrSchema<EqualSchema<T>> {
    return Vts.or([...Object.values(_value).map((_val) => Vts.equal(_val))]);
  }

  public static equal<S>(_value: S): EqualSchema<S> {
    return new EqualSchema(_value);
  }

  public static error(): ErrorSchema {
    return new ErrorSchema();
  }

  public static false(): EqualSchema<false> {
    return new EqualSchema(false);
  }

  public static instanceof<S>(_constructor: AbstractClass<S>): InstanceofSchema<S> {
    return new InstanceofSchema(_constructor);
  }

  public static null(): NullSchema {
    return new NullSchema();
  }

  public static number(): NumberSchema {
    return new NumberSchema();
  }

  public static object<Items extends ObjectSchemaItems>(
    _items: Items,
    _options?: ObjectSchemaOptions
  ): ObjectSchema<Items> {
    return new ObjectSchema(_items, _options);
  }

  public static object2<KeySchema extends StringSchema, ValuesSchema extends Schema<unknown>>(
    _keySchema: KeySchema,
    _valuesSchema: ValuesSchema
  ): Object2Schema<KeySchema, ValuesSchema> {
    return new Object2Schema(_keySchema, _valuesSchema);
  }

  public static optional<S extends Schema<unknown>>(_schema: S): OptionalSchema<S> {
    return new OptionalSchema(_schema);
  }

  public static or<S extends Schema<unknown>>(_schemas: S[]): OrSchema<S> {
    return new OrSchema(_schemas);
  }

  public static regexp(): RegExpSchema {
    return new RegExpSchema();
  }

  public static string(): StringSchema {
    return new StringSchema();
  }

  public static true(): EqualSchema<true> {
    return new EqualSchema(true);
  }

  public static unknown(): UnknownSchema {
    return new UnknownSchema();
  }

  public static undefined(): UndefinedSchema {
    return new UndefinedSchema();
  }

  public static isArray(_val: unknown): _val is unknown[] {
    return Array.isArray(_val);
  }

  public static isBoolean(_val: unknown): _val is boolean {
    return typeof _val === 'boolean';
  }

  public static isDate(_val: unknown): _val is Date {
    return this.isInstanceOf(_val, Date) && _val.toString() !== 'Invalid Date';
  }

  public static isError(_val: unknown): _val is Error {
    return this.isInstanceOf(_val, Error);
  }

  public static isFinite(_val: unknown): boolean {
    return Number.isFinite(_val);
  }

  public static isFunction<T extends FunctionOfAnyType>(_val: unknown): _val is T {
    return typeof _val === 'function';
  }

  public static isInteger(_val: unknown): _val is number {
    return Number.isInteger(_val);
  }

  public static isInstanceOf<T>(
    _val: unknown,
    _class: AbstractClass<T>
  ): _val is T {
    return _val instanceof _class;
  }

  public static isNull(_val: unknown): _val is null {
    return _val === null;
  }

  public static isNumber(_val: unknown): _val is number {
    return typeof _val === 'number' && this.isFinite(_val);
  }

  public static isObject(
    _val: unknown,
    _strict = true
  ): _val is RecordOf<unknown> {
    return typeof _val === 'object' && !this.isNull(_val) && (_strict ? !this.isArray(_val) && !this.isDate(_val) &&
      !this.isRegExp(_val) && !this.isError(_val) : true);
  }

  public static isRegExp(_val: unknown): _val is RegExp {
    return this.isInstanceOf(_val, RegExp);
  }

  public static isString(_val: unknown): _val is string {
    return typeof _val === 'string';
  }

  public static isUndefined(_val: unknown): _val is undefined {
    return typeof _val === 'undefined';
  }

}