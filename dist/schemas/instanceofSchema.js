import { Schema } from '../schema.js';
import { Vts } from '../vts.js';
export class InstanceofSchema extends Schema {
    _constructor;
    constructor(_constructor) {
        super();
        this._constructor = _constructor;
    }
    validate(_data, _errors) {
        if (!Vts.isInstanceOf(_data, this._constructor)) {
            this.addError(_errors, `not an instance of ${this._constructor.name}`);
            return false;
        }
        return true;
    }
}
