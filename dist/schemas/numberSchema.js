import { Schema } from '../schema.js';
import { Vts } from '../vts.js';
export class NumberSchema extends Schema {
    describe() {
        return {
            ...super.describe(),
            type: 'number'
        };
    }
    validate(_data, _errors) {
        if (!Vts.isNumber(_data)) {
            this.addError(_errors, 'not a number');
            return false;
        }
        return true;
    }
}
