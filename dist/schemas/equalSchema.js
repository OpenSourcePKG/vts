import { Schema } from '../schema.js';
export class EqualSchema extends Schema {
    _value;
    constructor(_value) {
        super();
        this._value = _value;
    }
    validate(_data, _errors) {
        if (_data !== this._value) {
            this.addError(_errors, `not equal to ${this._value}`);
            return false;
        }
        return true;
    }
}
