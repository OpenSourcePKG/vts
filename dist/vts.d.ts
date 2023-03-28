import { Schema } from './schema.js';
import { ArraySchema } from './schemas/arraySchema.js';
import { BooleanSchema } from './schemas/booleanSchema.js';
import { DateSchema } from './schemas/dateSchema.js';
import { DateStringSchema, DateStringSchemaValidateOptions } from './schemas/dateStringSchema.js';
import { EqualSchema } from './schemas/equalSchema.js';
import { ErrorSchema } from './schemas/errorSchema.js';
import { InstanceofSchema } from './schemas/instanceofSchema.js';
import { NullSchema } from './schemas/nullSchema.js';
import { NumberSchema } from './schemas/numberSchema.js';
import { Object2Schema } from './schemas/object2Schema.js';
import { ObjectSchema, ObjectSchemaItems, ObjectSchemaOptions } from './schemas/objectSchema.js';
import { DiscriminatorSchema } from './schemas/objectSchema/discriminatorSchema.js';
import { OptionalSchema } from './schemas/objectSchema/optionalSchema.js';
import { OrSchema } from './schemas/orSchema.js';
import { RegExpSchema } from './schemas/regExpSchema.js';
import { StringSchema } from './schemas/stringSchema.js';
import { UndefinedSchema } from './schemas/undefinedSchema.js';
import { UnknownSchema } from './schemas/unknownSchema.js';
export type AbstractClass<T> = (abstract new (...args: any[]) => T);
export type FunctionOfAnyType = (..._args: any[]) => any;
export type RecordOf<Type> = Record<string, Type | undefined>;
export declare class Vts {
    static array<S extends Schema<unknown>>(_type: S): ArraySchema<S>;
    static boolean(): BooleanSchema;
    static date(): DateSchema;
    static dateString(_options?: DateStringSchemaValidateOptions): DateStringSchema;
    static discriminator<S extends Schema<unknown>>(_schema: S): DiscriminatorSchema<S>;
    static enum<T>(_value: Record<any, T>): OrSchema<EqualSchema<T>>;
    static equal<S>(_value: S): EqualSchema<S>;
    static error(): ErrorSchema;
    static false(): EqualSchema<false>;
    static instanceof<S, T extends AbstractClass<S>>(_constructor: T): InstanceofSchema<S, T>;
    static null(): NullSchema;
    static number(): NumberSchema;
    static object<Items extends ObjectSchemaItems>(_keys: Items, _options?: ObjectSchemaOptions): ObjectSchema<Items>;
    static object2<KeySchema extends StringSchema, ValuesSchema extends Schema<unknown>>(_keySchema: KeySchema, _valuesSchema: ValuesSchema): Object2Schema<KeySchema, ValuesSchema>;
    static optional<S extends Schema<unknown>>(_schema: S): OptionalSchema<S>;
    static or<S extends Schema<unknown>>(_schemas: S[]): OrSchema<S>;
    static regexp(): RegExpSchema;
    static string(): StringSchema;
    static true(): EqualSchema<true>;
    static unknown(): UnknownSchema;
    static undefined(): UndefinedSchema;
    static isArray(_val: unknown): _val is unknown[];
    static isBoolean(_val: unknown): _val is boolean;
    static isDate(_val: unknown): _val is Date;
    static isError(_val: unknown): _val is Error;
    static isFunction<T extends FunctionOfAnyType>(_val: unknown): _val is T;
    static isInteger(_val: unknown): _val is number;
    static isInstanceOf<T>(_val: unknown, _constructor: AbstractClass<T>): _val is T;
    static isNaN(_val: unknown): boolean;
    static isNull(_val: unknown): _val is null;
    static isNumber(_val: unknown): _val is number;
    static isObject(_val: unknown, _strict?: boolean): _val is RecordOf<unknown>;
    static isRegExp(_val: unknown): _val is RegExp;
    static isString(_val: unknown): _val is string;
    static isUndefined(_val: unknown): _val is undefined;
}
