import { Schema } from '../schema.js';
import { Vts } from '../vts.js';
export class Object2Schema extends Schema {
    constructor(_keySchema, _valuesSchema, _options) {
        super(_options);
        this._keySchema = _keySchema;
        this._valuesSchema = _valuesSchema;
    }
    describe() {
        return {
            ...super.describe(),
            key: this._keySchema.describe(),
            type: 'object2',
            value: this._valuesSchema.describe()
        };
    }
    validate(_data, _errors) {
        if (!Vts.isObject(_data)) {
            this.addError(_errors, 'not an object');
            return false;
        }
        const objectErrors = {};
        for (const [key, value] of Object.entries(_data)) {
            const entryErrors = [];
            if (!this._keySchema.validate(key, entryErrors)) {
                this.addErrors(objectErrors, key, entryErrors);
            }
            const valueErrors = [];
            if (!this._valuesSchema.validate(value, valueErrors)) {
                this.addErrors(objectErrors, key, valueErrors);
            }
        }
        if (Object.keys(objectErrors).length > 0) {
            this.addError(_errors, objectErrors);
        }
        return Object.keys(objectErrors).length === 0;
    }
}
