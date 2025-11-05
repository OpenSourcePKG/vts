import { Schema } from '../../schema.js';
export class DiscriminatorSchema extends Schema {
    constructor(_schema) {
        super();
        this._schema = _schema;
    }
    describe() {
        return {
            ...this._schema.describe(),
            discriminating: true
        };
    }
    validate(_data, _errors, _options) {
        return this._schema.validate(_data, _errors, _options);
    }
}
