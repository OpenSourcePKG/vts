import { Schema } from '../schema.js';
export class OrSchema extends Schema {
    constructor(_types, _options) {
        super(_options);
        this._types = _types;
    }
    describe() {
        const schemaDescription = super.describe();
        const orSchemaDescription = {
            ...schemaDescription,
            type: 'or',
            values: []
        };
        for (const schema of Object.values(this._types)) {
            orSchemaDescription.values.push(schema.describe());
        }
        return orSchemaDescription;
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
