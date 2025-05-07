import { Schema } from '../schema.js';
import { Vts } from '../vts.js';
export class BooleanSchema extends Schema {
    describe() {
        return {
            ...super.describe(),
            type: 'boolean'
        };
    }
    validate(_data, _errors) {
        if (!Vts.isBoolean(_data)) {
            this.addError(_errors, 'not a boolean');
            return false;
        }
        return true;
    }
}
