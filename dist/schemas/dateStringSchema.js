import { Vts } from '../vts.js';
import { StringSchema } from './stringSchema.js';
export const DateStringSchemaTestDefault = (_data) => Vts.isFinite(Date.parse(_data));
export class DateStringSchema extends StringSchema {
    constructor(_options = {
        test: DateStringSchemaTestDefault
    }) {
        super();
        this._options = _options;
    }
    validate(_data, _errors) {
        if (!super.validate(_data, _errors)) {
            return false;
        }
        if (!this._options.test(_data)) {
            this.addError(_errors, 'not a valid date string');
            return false;
        }
        return true;
    }
}
