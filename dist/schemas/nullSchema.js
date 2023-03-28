import { Schema } from '../schema.js';
import { Vts } from '../vts.js';
export class NullSchema extends Schema {
    validate(_data, _errors) {
        if (!Vts.isNull(_data)) {
            this.addError(_errors, 'not null');
            return false;
        }
        return true;
    }
}
