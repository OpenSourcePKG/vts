import { Schema } from '../schema.js';
import { Vts } from '../vts.js';
export class UndefinedSchema extends Schema {
    describe() {
        return {
            ...super.describe(),
            type: 'undefined'
        };
    }
    validate(_data, _errors) {
        if (!Vts.isUndefined(_data)) {
            this.addError(_errors, 'not undefined');
            return false;
        }
        return true;
    }
}
