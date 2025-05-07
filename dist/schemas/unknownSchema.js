import { Schema } from '../schema.js';
export class UnknownSchema extends Schema {
    describe() {
        return {
            ...super.describe(),
            type: 'unknown'
        };
    }
    validate(_data) {
        return true;
    }
}
