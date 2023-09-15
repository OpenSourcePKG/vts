import { Schema } from '../schema.js';
export class OrSchema extends Schema {
    _types;
    constructor(_types) {
        super();
        this._types = _types;
    }
    validate(_data, _errors, _options) {
        const orErrors = {};
        for (const [key, type] of this._types.entries()) {
            const errors = [];
            if (type.validate(_data, errors, _options)) {
                return true;
            }
            if (errors.length > 0) {
                orErrors[`schema${key}`] = errors;
            }
        }
        this.addError(_errors, 'no match with any of the given schemas');
        this.addError(_errors, orErrors);
        return false;
    }
}
