import moment from 'moment';
import { StringSchema } from './stringSchema.js';
export class DateStringSchema extends StringSchema {
    constructor(_options) {
        super();
        this._options = _options;
    }
    validate(_data, _errors) {
        if (!super.validate(_data, _errors)) {
            return false;
        }
        const mom = moment(new Date(_data));
        if (!mom.isValid()) {
            this.addError(_errors, 'not a valid date');
            return false;
        }
        if (this._options?.test) {
            const test = this._options?.test(mom);
            if (test !== _data) {
                console.log(test, _data);
                this.addError(_errors, 'wrong format');
                return false;
            }
        }
        return true;
    }
}
