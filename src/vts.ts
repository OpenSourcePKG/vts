import {AbstractClass, Class, FunctionOfAnyType, RecordOf} from './types.js';
import {Schema} from './vts/schema.js';
import {ArraySchema} from './vts/schemas/arraySchema.js';
import {BooleanSchema} from './vts/schemas/booleanSchema.js';
import {DateSchema} from './vts/schemas/dateSchema.js';
import {DateStringSchema, DateStringSchemaValidateOptions} from './vts/schemas/dateStringSchema.js';
import {EqualSchema} from './vts/schemas/equalSchema.js';
import {ErrorSchema} from './vts/schemas/errorSchema.js';
import {InstanceofSchema} from './vts/schemas/instanceofSchema.js';
import {NullSchema} from './vts/schemas/nullSchema.js';
import {NumberSchema} from './vts/schemas/numberSchema.js';
import {Object2Schema} from './vts/schemas/object2Schema.js';
import {ObjectSchema, ObjectSchemaItems, ObjectSchemaOptions} from './vts/schemas/objectSchema.js';
import {OptionalSchema} from './vts/schemas/objectSchema/optionalSchema.js';
import {OrSchema} from './vts/schemas/orSchema.js';
import {RegExpSchema} from './vts/schemas/regExpSchema.js';
import {StringSchema} from './vts/schemas/stringSchema.js';
import {UndefinedSchema} from './vts/schemas/undefinedSchema.js';
import {UnknownSchema} from './vts/schemas/unknownSchema.js';

export class Vts {

  public static array<S extends Schema<unknown>>(_type: S): ArraySchema<S> {
    return new ArraySchema(_type);
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

  public static equal<S>(_value: S): EqualSchema<S> {
    return new EqualSchema(_value);
  }

  public static error(): ErrorSchema {
    return new ErrorSchema();
  }

  public static false(): EqualSchema<false> {
    return new EqualSchema(false);
  }

  public static instanceof<S, T extends Class<S>>(_constructor: T): InstanceofSchema<S, T> {
    return new InstanceofSchema(_constructor);
  }

  public static null(): NullSchema {
    return new NullSchema();
  }

  public static number(): NumberSchema {
    return new NumberSchema();
  }

  public static object<Items extends ObjectSchemaItems>(
    _keys: Items,
    _options?: ObjectSchemaOptions
  ): ObjectSchema<Items> {
    return new ObjectSchema(_keys, _options);
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
    return this.isInstanceOf(_val, Date);
  }

  public static isError(_val: unknown): _val is Error {
    return this.isInstanceOf(_val, Error);
  }

  public static isFunction<T extends FunctionOfAnyType>(_val: unknown): _val is T {
    return typeof _val === 'function';
  }

  public static isInteger(_val: unknown): _val is number {
    return Number.isInteger(_val);
  }

  public static isInstanceOf<T>(
    _val: unknown,
    _constructor: AbstractClass<T>
  ): _val is T {
    return _val instanceof _constructor;
  }

  public static isNaN(_val: unknown): boolean {
    return Number.isNaN(_val);
  }

  public static isNull(_val: unknown): _val is null {
    return _val === null;
  }

  public static isNumber(_val: unknown): _val is number {
    return typeof _val === 'number' && !this.isNaN(_val);
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