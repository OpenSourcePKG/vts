import { Schema } from '../schema.js';
import { Vts } from '../vts.js';
export class EnumSchema extends Schema {
    constructor(_enum, _options) {
        super(_options);
        this._enum = _enum;
    }
    describe() {
        const schemaDescription = super.describe();
        const enumSchemaDescription = {
            ...schemaDescription,
            type: 'enum',
            values: {}
        };
        for (const [k, t] of Object.entries(this._enum)) {
            enumSchemaDescription.values[t] = {
                description: k
            };
        }
        return enumSchemaDescription;
    }
    validate(_data, _errors, _options) {
        const enumErrors = {};
        for (const [key, type] of Object.entries(this._enum)) {
            const errors = [];
            if (Vts.equal(type, _options).validate(_data, errors)) {
                return true;
            }
            if (errors.length > 0) {
                enumErrors[`schema${key}`] = errors;
            }
        }
        this.addError(_errors, 'no match with any of the given schemas');
        this.addError(_errors, enumErrors);
        return false;
    }
}
