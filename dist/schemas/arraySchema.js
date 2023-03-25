import { Schema } from '../schema.js';
import { Vts } from '../vts.js';
export class ArraySchema extends Schema {
    constructor(_type) {
        super();
        this._type = _type;
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
        for (const [key, data] of Object.entries(_data)) {
            const errors = [];
            if (!this._type.validate(data, errors, _options)) {
                arrayErrors[key] = errors;
            }
        }
        if (Object.keys(arrayErrors).length > 0) {
            this.addError(_errors, arrayErrors);
        }
        return Object.keys(arrayErrors).length === 0;
    }
}
