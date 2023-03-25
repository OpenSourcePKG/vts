import { Schema } from '../schema.js';
import { Vts } from '../vts.js';
export class DateSchema extends Schema {
    validate(_data, _errors) {
        if (!Vts.isDate(_data)) {
            this.addError(_errors, 'not a date');
            return false;
        }
        return true;
    }
}
