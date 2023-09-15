import { Schema } from '../../schema.js';
export class DiscriminatorSchema extends Schema {
    _schema;
    constructor(_schema) {
        super();
        this._schema = _schema;
    }
    validate(_data, _errors, _options) {
        return this._schema.validate(_data, _errors, _options);
    }
}
