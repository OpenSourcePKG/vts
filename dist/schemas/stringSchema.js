import { Vts } from '../vts.js';
import { Schema } from '../schema.js';
export class StringSchema extends Schema {
    validate(_data, _errors) {
        if (!Vts.isString(_data)) {
            this.addError(_errors, 'not a string');
            return false;
        }
        return true;
    }
}
