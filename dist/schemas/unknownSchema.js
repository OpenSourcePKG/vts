import { Schema } from '../schema.js';
export class UnknownSchema extends Schema {
    validate(_data) {
        return true;
    }
}
