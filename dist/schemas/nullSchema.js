import { Schema } from '../schema.js';
import { Vts } from '../vts.js';
export class NullSchema extends Schema {
    describe() {
        return {
            ...super.describe(),
            type: 'null'
        };
    }
    validate(_data, _errors) {
        if (!Vts.isNull(_data)) {
            this.addError(_errors, 'not null');
            return false;
        }
        return true;
    }
}
