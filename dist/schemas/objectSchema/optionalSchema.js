import { Schema } from '../../schema.js';
import { Vts } from '../../vts.js';
export class OptionalSchema extends Schema {
    _schema;
    constructor(_schema) {
        super();
        this._schema = _schema;
    }
    describe() {
        return {
            ...this._schema.describe(),
            optional: true
        };
    }
    validate(_data, _errors, _options) {
        return Vts.isUndefined(_data) || this._schema.validate(_data, _errors, _options);
    }
}
