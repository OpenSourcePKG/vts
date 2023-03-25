import { Schema } from '../schema.js';
import { Vts } from '../vts.js';
export class RegExpSchema extends Schema {
    validate(_data, _errors) {
        if (!Vts.isRegExp(_data)) {
            this.addError(_errors, 'not a regexp');
            return false;
        }
        return true;
    }
}
