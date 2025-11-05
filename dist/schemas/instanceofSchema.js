import { Schema } from '../schema.js';
import { Vts } from '../vts.js';
export class InstanceofSchema extends Schema {
    constructor(_constructor, _options) {
        super(_options);
        this._constructor = _constructor;
    }
    describe() {
        return {
            ...super.describe(),
            type: 'instanceOf'
        };
    }
    validate(_data, _errors) {
        if (!Vts.isInstanceOf(_data, this._constructor)) {
            this.addError(_errors, `not an instance of ${this._constructor.name}`);
            return false;
        }
        return true;
    }
}
