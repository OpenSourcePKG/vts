import { Schema } from '../schema.js';
import { Vts } from '../vts.js';
export class ErrorSchema extends Schema {
    describe() {
        return {
            ...super.describe(),
            type: 'error'
        };
    }
    validate(_data, _errors) {
        if (!Vts.isError(_data)) {
            this.addError(_errors, 'not an error');
            return false;
        }
        return true;
    }
}
