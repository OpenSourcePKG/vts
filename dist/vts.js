import { ArraySchema } from './schemas/arraySchema.js';
import { BooleanSchema } from './schemas/booleanSchema.js';
import { DateSchema } from './schemas/dateSchema.js';
import { DateStringSchema } from './schemas/dateStringSchema.js';
import { EqualSchema } from './schemas/equalSchema.js';
import { ErrorSchema } from './schemas/errorSchema.js';
import { InstanceofSchema } from './schemas/instanceofSchema.js';
import { NullSchema } from './schemas/nullSchema.js';
import { NumberSchema } from './schemas/numberSchema.js';
import { Object2Schema } from './schemas/object2Schema.js';
import { ObjectSchema } from './schemas/objectSchema.js';
import { DiscriminatorSchema } from './schemas/objectSchema/discriminatorSchema.js';
import { OptionalSchema } from './schemas/objectSchema/optionalSchema.js';
import { OrSchema } from './schemas/orSchema.js';
import { RegExpSchema } from './schemas/regExpSchema.js';
import { StringSchema } from './schemas/stringSchema.js';
import { UndefinedSchema } from './schemas/undefinedSchema.js';
import { UnknownSchema } from './schemas/unknownSchema.js';
export class Vts {
    static array(_type) {
        return new ArraySchema(_type);
    }
    static boolean() {
        return new BooleanSchema();
    }
    static date() {
        return new DateSchema();
    }
    static dateString(_options) {
        return new DateStringSchema(_options);
    }
    static discriminator(_schema) {
        return new DiscriminatorSchema(_schema);
    }
    static enum(_value) {
        return Vts.or([...Object.values(_value).map((_val) => Vts.equal(_val))]);
    }
    static equal(_value) {
        return new EqualSchema(_value);
    }
    static error() {
        return new ErrorSchema();
    }
    static false() {
        return new EqualSchema(false);
    }
    static instanceof(_constructor) {
        return new InstanceofSchema(_constructor);
    }
    static null() {
        return new NullSchema();
    }
    static number() {
        return new NumberSchema();
    }
    static object(_keys, _options) {
        return new ObjectSchema(_keys, _options);
    }
    static object2(_keySchema, _valuesSchema) {
        return new Object2Schema(_keySchema, _valuesSchema);
    }
    static optional(_schema) {
        return new OptionalSchema(_schema);
    }
    static or(_schemas) {
        return new OrSchema(_schemas);
    }
    static regexp() {
        return new RegExpSchema();
    }
    static string() {
        return new StringSchema();
    }
    static true() {
        return new EqualSchema(true);
    }
    static unknown() {
        return new UnknownSchema();
    }
    static undefined() {
        return new UndefinedSchema();
    }
    static isArray(_val) {
        return Array.isArray(_val);
    }
    static isBoolean(_val) {
        return typeof _val === 'boolean';
    }
    static isDate(_val) {
        return this.isInstanceOf(_val, Date) && _val.toString() !== 'Invalid Date';
    }
    static isError(_val) {
        return this.isInstanceOf(_val, Error);
    }
    static isFunction(_val) {
        return typeof _val === 'function';
    }
    static isInteger(_val) {
        return Number.isInteger(_val);
    }
    static isInstanceOf(_val, _constructor) {
        return _val instanceof _constructor;
    }
    static isNaN(_val) {
        return Number.isNaN(_val);
    }
    static isNull(_val) {
        return _val === null;
    }
    static isNumber(_val) {
        return typeof _val === 'number' && !this.isNaN(_val);
    }
    static isObject(_val, _strict = true) {
        return typeof _val === 'object' && !this.isNull(_val) && (_strict ? !this.isArray(_val) && !this.isDate(_val) &&
            !this.isRegExp(_val) && !this.isError(_val) : true);
    }
    static isRegExp(_val) {
        return this.isInstanceOf(_val, RegExp);
    }
    static isString(_val) {
        return typeof _val === 'string';
    }
    static isUndefined(_val) {
        return typeof _val === 'undefined';
    }
}
