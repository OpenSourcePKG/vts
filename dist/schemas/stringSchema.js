import { Schema } from '../schema.js';
import { Vts } from '../vts.js';
export class StringSchema extends Schema {
    describe() {
        return {
            ...super.describe(),
            type: 'string'
        };
    }
    validate(_data, _errors) {
        if (!Vts.isString(_data)) {
            this.addError(_errors, 'not a string');
            return false;
        }
        if (this._options?.test && !this._options.test(_data)) {
            this.addError(_errors, 'test was not successful');
            return false;
        }
        return true;
    }
}
