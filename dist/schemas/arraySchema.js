import { Schema } from '../schema.js';
import { Vts } from '../vts.js';
export class ArraySchema extends Schema {
    constructor(_elementsSchema, _options) {
        super(_options);
        this._elementsSchema = _elementsSchema;
    }
    describe() {
        return {
            ...super.describe(),
            items: this._elementsSchema.describe(),
            type: 'array'
        };
    }
    validate(_data, _errors, _options) {
        if (!Vts.isArray(_data)) {
            this.addError(_errors, 'not an array');
            return false;
        }
        if (_data.length === 0) {
            return true;
        }
        const arrayErrors = {};
        for (const [key, element] of Object.entries(_data)) {
            const errors = [];
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
