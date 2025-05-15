import { ArraySchema } from './schemas/arraySchema.js';
import { BooleanSchema } from './schemas/booleanSchema.js';
import { DateSchema } from './schemas/dateSchema.js';
import { EnumSchema } from './schemas/enumSchema.js';
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
    static array(_elementsSchema, _options) {
        return new ArraySchema(_elementsSchema, _options);
    }
    static boolean(_options) {
        return new BooleanSchema(_options);
    }
    static date(_options) {
        return new DateSchema(_options);
    }
    static dateString(_options = {
        test: (_data) => Vts.isFinite(Date.parse(_data))
    }) {
        return new StringSchema(_options);
    }
    static discriminator(_schema) {
        return new DiscriminatorSchema(_schema);
    }
    static enum(_value, _options) {
        return new EnumSchema(_value, _options);
    }
    static equal(_value, _options) {
        return new EqualSchema(_value, _options);
    }
    static error(_options) {
        return new ErrorSchema(_options);
    }
    static false(_options) {
        return new EqualSchema(false, _options);
    }
    static instanceof(_constructor, _options) {
        return new InstanceofSchema(_constructor, _options);
    }
    static null(_options) {
        return new NullSchema(_options);
    }
    static number(_options) {
        return new NumberSchema(_options);
    }
    static object(_items, _options = {}) {
        return new ObjectSchema(_items, _options);
    }
    static object2(_keySchema, _valuesSchema, _options) {
        return new Object2Schema(_keySchema, _valuesSchema, _options);
    }
    static optional(_schema) {
        return new OptionalSchema(_schema);
    }
    static or(_schemas, _options) {
        return new OrSchema(_schemas, _options);
    }
    static regexp(_options) {
        return new RegExpSchema(_options);
    }
    static string(_options) {
        return new StringSchema(_options);
    }
    static true(_options) {
        return new EqualSchema(true, _options);
    }
    static unknown(_options) {
        return new UnknownSchema(_options);
    }
    static undefined(_options) {
        return new UndefinedSchema(_options);
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
    static isFinite(_val) {
        return Number.isFinite(_val);
    }
    static isFunction(_val) {
        return typeof _val === 'function';
    }
    static isInteger(_val) {
        return Number.isInteger(_val);
    }
    static isInstanceOf(_val, _class) {
        return _val instanceof _class;
    }
    static isNull(_val) {
        return _val === null;
    }
    static isNumber(_val) {
        return typeof _val === 'number' && this.isFinite(_val);
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
    static isSystemError(_val, _code) {
        return _val instanceof Error && Vts.object({
            code: Vts.isUndefined(_code) ? Vts.optional(Vts.string()) : Vts.equal(_code),
            errno: Vts.optional(Vts.number()),
            path: Vts.optional(Vts.string()),
            syscall: Vts.optional(Vts.string())
        }).validate(_val, [], {
            objectSchema: {
                strict: false
            }
        });
    }
    static isUndefined(_val) {
        return typeof _val === 'undefined';
    }
}
